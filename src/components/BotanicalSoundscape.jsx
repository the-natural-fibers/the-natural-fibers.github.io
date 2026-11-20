import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Headphones, 
  ChevronDown, 
  ChevronUp,
  Leaf, 
  SlidersHorizontal,
  Music2
} from 'lucide-react';

// Module/Window singleton for persistent audio instances across React 18/19 StrictMode and HMR
function getAudioInstances() {
  if (typeof window === 'undefined') return { birds: null, music: null };
  
  if (!window.__botanicalAudio) {
    const birds = new Audio('/audio/forest-birds.mp3');
    birds.loop = true;
    birds.preload = 'auto';

    const music = new Audio('/audio/acoustic-ambient.mp3');
    music.loop = true;
    music.preload = 'auto';

    window.__botanicalAudio = { birds, music };
  }
  return window.__botanicalAudio;
}

export default function BotanicalSoundscape() {
  // Setup: Master 50%, Birds 100%, Music 0%, Autoplay by default
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [masterVolume, setMasterVolume] = useState(0.5);
  const [birdsVolume, setBirdsVolume] = useState(1.0);
  const [musicVolume, setMusicVolume] = useState(0.0);

  // Track if user explicitly requested pause
  const isUserPausedRef = useRef(false);
  const listenersAttachedRef = useRef(false);

  // Safely stop all audio playback
  const safePause = () => {
    isUserPausedRef.current = true;
    cleanupAutoplayListeners();
    const { birds, music } = getAudioInstances();
    if (birds) {
      try {
        birds.pause();
      } catch (e) {}
    }
    if (music) {
      try {
        music.pause();
      } catch (e) {}
    }
    setIsPlaying(false);
  };

  // Safely start audio playback
  const safePlay = () => {
    isUserPausedRef.current = false;
    const { birds, music } = getAudioInstances();
    if (!birds || !music) return;

    birds.volume = Math.max(0, Math.min(1, masterVolume * birdsVolume));
    music.volume = Math.max(0, Math.min(1, masterVolume * musicVolume));

    const playPromise = birds.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // If the user clicked pause while play() was pending, immediately pause
          if (isUserPausedRef.current) {
            birds.pause();
            setIsPlaying(false);
          } else {
            setIsPlaying(true);
          }
        })
        .catch((err) => {
          console.log('Autoplay restricted by browser:', err);
        });
    }

    if (musicVolume > 0) {
      const musicPromise = music.play();
      if (musicPromise !== undefined) {
        musicPromise
          .then(() => {
            if (isUserPausedRef.current) {
              music.pause();
            }
          })
          .catch(() => {});
      }
    }
  };

  // Autoplay fallback interaction listener
  const onFirstInteraction = (e) => {
    cleanupAutoplayListeners();
    // If the user already clicked pause, do not trigger play
    if (isUserPausedRef.current) return;
    safePlay();
  };

  const cleanupAutoplayListeners = () => {
    if (!listenersAttachedRef.current) return;
    listenersAttachedRef.current = false;
    window.removeEventListener('click', onFirstInteraction, true);
    window.removeEventListener('touchstart', onFirstInteraction, true);
    window.removeEventListener('scroll', onFirstInteraction, true);
    window.removeEventListener('keydown', onFirstInteraction, true);
  };

  const attachAutoplayListeners = () => {
    if (listenersAttachedRef.current) return;
    listenersAttachedRef.current = true;
    window.addEventListener('click', onFirstInteraction, true);
    window.addEventListener('touchstart', onFirstInteraction, true);
    window.addEventListener('scroll', onFirstInteraction, true);
    window.addEventListener('keydown', onFirstInteraction, true);
  };

  // Initialize and handle autoplay on mount
  useEffect(() => {
    const { birds, music } = getAudioInstances();
    if (!birds || !music) return;

    // Listen to native audio events to guarantee 100% state synchronization
    const handleNativePlay = () => setIsPlaying(true);
    const handleNativePause = () => setIsPlaying(false);

    birds.addEventListener('play', handleNativePlay);
    birds.addEventListener('pause', handleNativePause);

    // Initial volumes
    birds.volume = Math.max(0, Math.min(1, masterVolume * birdsVolume));
    music.volume = Math.max(0, Math.min(1, masterVolume * musicVolume));

    // Attempt direct autoplay if user hasn't explicitly paused
    if (!isUserPausedRef.current) {
      const p = birds.play();
      if (p !== undefined) {
        p.then(() => {
          if (!isUserPausedRef.current) {
            setIsPlaying(true);
          } else {
            birds.pause();
          }
        }).catch(() => {
          // Browser prevented unprompted autoplay -> attach fallback listener for first interaction
          if (!isUserPausedRef.current) {
            attachAutoplayListeners();
          }
        });
      }
    }

    return () => {
      birds.removeEventListener('play', handleNativePlay);
      birds.removeEventListener('pause', handleNativePause);
      cleanupAutoplayListeners();
    };
  }, []);

  // Update volumes dynamically whenever sliders change
  useEffect(() => {
    const { birds, music } = getAudioInstances();
    if (!birds || !music) return;

    birds.volume = Math.max(0, Math.min(1, masterVolume * birdsVolume));
    music.volume = Math.max(0, Math.min(1, masterVolume * musicVolume));

    // If music volume is raised from 0 while playing, resume music channel
    if (isPlaying && !isUserPausedRef.current && musicVolume > 0 && music.paused) {
      music.play().catch(() => {});
    }
  }, [masterVolume, birdsVolume, musicVolume, isPlaying]);

  // Master Play / Pause Toggle
  const togglePlay = () => {
    if (isPlaying) {
      safePause();
    } else {
      safePlay();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none font-sans">
      {/* 1. Expanded Single-Tab Control Panel */}
      {isExpanded && (
        <div className="mb-3 w-80 sm:w-96 p-5 rounded-[28px] bg-[#faf8f5]/95 backdrop-blur-xl border border-[#e8ded1] shadow-2xl text-[#0c2340] transition-all animate-fade-in space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#e8ded1]/80 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#2a5a46] text-white flex items-center justify-center shadow-xs">
                <Volume2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#0c2340] leading-none mb-1">
                  Botanical Soundscape
                </h4>
                <p className="text-[11px] text-[#718096]">Forest ambience and acoustic music</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1.5 rounded-xl hover:bg-[#e8ded1]/50 text-[#718096] hover:text-[#0c2340] transition-colors cursor-pointer"
              title="Close settings"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Unified Volume Customization */}
          <div className="space-y-3.5 pt-1">
            {/* Master Volume */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#4a5568] mb-1.5">
                <span>Master Volume</span>
                <span className="text-[11px] text-[#718096] font-mono font-medium">
                  {Math.round(masterVolume * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={masterVolume}
                onChange={(e) => setMasterVolume(parseFloat(e.target.value))}
                className="w-full accent-[#2a5a46] h-1.5 bg-[#e8ded1] rounded-lg cursor-pointer"
              />
            </div>

            {/* Forest Birds & Wind Channel */}
            <div className="pl-2.5 border-l-2 border-[#2a5a46]/40">
              <div className="flex items-center justify-between text-xs text-[#4a5568] mb-1">
                <span>Forest Birds & Breeze</span>
                <span className="text-[11px] text-[#718096] font-mono font-medium">
                  {Math.round(birdsVolume * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={birdsVolume}
                onChange={(e) => setBirdsVolume(parseFloat(e.target.value))}
                className="w-full accent-[#2a5a46] h-1.5 bg-[#e8ded1] rounded-lg cursor-pointer"
              />
            </div>

            {/* Acoustic Ambient Music Channel */}
            <div className="pl-2.5 border-l-2 border-[#7c482b]/40">
              <div className="flex items-center justify-between text-xs text-[#4a5568] mb-1">
                <span>Acoustic Melody</span>
                <span className="text-[11px] text-[#718096] font-mono font-medium">
                  {Math.round(musicVolume * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={musicVolume}
                onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
                className="w-full accent-[#7c482b] h-1.5 bg-[#e8ded1] rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Quick toggle button inside panel */}
          <button
            onClick={togglePlay}
            className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer ${
              isPlaying
                ? 'bg-[#14365d] text-white hover:bg-[#0c2340]'
                : 'bg-[#2a5a46] text-white hover:bg-[#1b3d2f]'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Pause Soundscape</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Play Soundscape</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* 2. Floating Soundscape Pill (Always Visible at bottom right) */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 bg-[#faf8f5]/90 hover:bg-white/95 backdrop-blur-md p-1.5 pr-3 rounded-full border border-[#e8ded1] shadow-xl hover:shadow-2xl transition-all cursor-pointer"
        title="Audio settings"
      >
        {/* Play / Pause Round Icon Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          title={isPlaying ? "Pause audio" : "Play audio"}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm ${
            isPlaying
              ? 'bg-[#14365d] text-white shadow-emerald-500/20'
              : 'bg-white text-[#0c2340] border border-[#e8ded1] hover:border-[#2a5a46]'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5 text-[#2a5a46]" />
          )}
        </button>

        {/* Status Text & Interactive Equalizer Bar Indicator */}
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7c482b]">
              Forest Audio
            </span>
            <span className="text-xs font-semibold text-[#0c2340]">
              {isPlaying ? 'Playing Ambience' : 'Soundscape: Off'}
            </span>
          </div>

          {/* Dynamic Sound Equalizer Animation */}
          <div className="flex items-end gap-0.5 h-4 w-5 px-0.5">
            <span 
              className={`w-1 bg-[#2a5a46] rounded-full transition-all duration-300 ${
                isPlaying ? 'h-3 animate-sound-bar-1' : 'h-1 opacity-50'
              }`} 
            />
            <span 
              className={`w-1 bg-[#7c482b] rounded-full transition-all duration-300 ${
                isPlaying ? 'h-4 animate-sound-bar-2' : 'h-1.5 opacity-50'
              }`} 
            />
            <span 
              className={`w-1 bg-[#14365d] rounded-full transition-all duration-300 ${
                isPlaying ? 'h-2.5 animate-sound-bar-3' : 'h-1 opacity-50'
              }`} 
            />
          </div>

          {/* Expand Settings Icon */}
          <div className="p-1 rounded-full text-[#718096] hover:text-[#0c2340] transition-colors">
            {isExpanded ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <SlidersHorizontal className="w-3.5 h-3.5" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
