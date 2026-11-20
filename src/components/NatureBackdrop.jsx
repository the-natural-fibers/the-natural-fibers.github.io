import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function NatureBackdrop() {
  const [offsetY, setOffsetY] = useState(0);
  const location = useLocation();

  // Specifically detect individual blog article content pages (/blog/:slug)
  const isBlogContentPage = Boolean(location.pathname.match(/^\/blog\/[^/]+/));

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY * 0.08); // gentle 0.08x parallax speed
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Extended Misty Mountain & Forest Earth Silhouette Layer (Faded 2x on blog content pages for high legibility) */}
      <div 
        className={`absolute inset-0 w-full h-[200%] transition-transform duration-100 ease-out will-change-transform transition-opacity duration-500 ${
          isBlogContentPage ? 'opacity-40' : 'opacity-85'
        }`}
        style={{ transform: `translateY(-${offsetY}px)` }}
      >
        <svg 
          viewBox="0 0 1440 1800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover preserve-3d"
          preserveAspectRatio="xMidYMin slice"
        >
          <defs>
            {/* Extended Sky Mist Gradient (Taller Sky) */}
            <linearGradient id="skyMist" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d2e4f2" stopOpacity="0.95" />
              <stop offset="14%" stopColor="#dbe8de" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#faf8f5" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#faf8f5" stopOpacity="0.5" />
            </linearGradient>

            {/* Distant Mountain Ridge Gradient */}
            <linearGradient id="farRidgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3c5a75" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#14365d" stopOpacity="0.4" />
            </linearGradient>

            {/* Mid Mountain Ridge Gradient */}
            <linearGradient id="midRidgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2a5a46" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#1c3e30" stopOpacity="0.55" />
            </linearGradient>

            {/* Near Forest Canopy Gradient */}
            <linearGradient id="nearCanopyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1b3d2f" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#132b21" stopOpacity="0.85" />
            </linearGradient>

            {/* Deep Forest Earth Ground Gradient */}
            <linearGradient id="deepEarthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#163124" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0f2219" stopOpacity="0.98" />
            </linearGradient>

            {/* Deep Bedrock Soil Foundation Gradient */}
            <linearGradient id="bedrockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d1e16" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#08140e" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Extended Sky Base */}
          <rect width="1440" height="1800" fill="url(#skyMist)" />

          {/* 2. Secondary Valley Wave Contour */}
          <path 
            d="M0 425 C220 400 420 445 640 425 C820 405 1020 440 1220 420 C1340 410 1400 425 1440 415" 
            stroke="#14365d" 
            strokeWidth="2" 
            strokeOpacity="0.4" 
            fill="none" 
          />

          {/* 3. Far Distant Mountain Ridges */}
          <path 
            d="M0 530 C180 500 360 560 540 520 C720 480 900 550 1080 510 C1240 470 1360 530 1440 500 L1440 1800 L0 1800 Z" 
            fill="url(#farRidgeGrad)" 
          />

          {/* 4. Mid Valley Wave Contours */}
          <path 
            d="M0 610 C200 575 400 635 600 595 C800 555 980 625 1180 585 C1300 560 1380 600 1440 580" 
            stroke="#2a5a46" 
            strokeWidth="3" 
            strokeOpacity="0.5" 
            fill="none" 
          />

          {/* 5. Mid Ridge with Rainforest Canopy Undulations */}
          <path 
            d="M0 690 C140 650 280 710 440 660 C600 610 780 700 960 640 C1140 585 1300 680 1440 630 L1440 1800 L0 1800 Z" 
            fill="url(#midRidgeGrad)" 
          />

          {/* Layer of Fog between Ridges */}
          <ellipse cx="720" cy="710" rx="900" ry="70" fill="#faf8f5" opacity="0.35" filter="blur(16px)" />

          {/* 6. Near Forest Canopy Ridges & Botanical Silhouettes */}
          <path 
            d="M0 820 Q100 790 200 810 Q300 770 400 800 Q500 780 600 830 Q700 790 800 810 Q900 760 1000 800 Q1100 770 1200 820 Q1300 780 1440 810 L1440 1800 L0 1800 Z" 
            fill="url(#nearCanopyGrad)" 
          />

          {/* Foreground Wave Contour Line on Near Ridge */}
          <path 
            d="M0 840 Q100 810 200 830 Q300 790 400 820 Q500 800 600 850 Q700 810 800 830 Q900 780 1000 820 Q1100 790 1200 840 Q1300 800 1440 830" 
            stroke="#2a5a46" 
            strokeWidth="3.5" 
            strokeOpacity="0.65" 
            fill="none" 
          />

          {/* Botanical Tree & Bamboo Silhouettes along Near Ridge */}
          <g fill="#1b3d2f" opacity="0.85">
            <path d="M60 815 L65 740 L70 815 Z M68 815 L72 755 L76 815 Z M78 815 L82 730 L86 815 Z" />
            <path d="M220 805 L225 730 L230 805 Z M228 805 L232 750 L236 805 Z" />
            <path d="M440 795 L445 720 L450 795 Z M448 795 L453 740 L458 795 Z M456 795 L460 710 L464 795 Z" />
            <path d="M780 805 L785 735 L790 805 Z M792 805 L796 720 L800 805 Z" />
            <path d="M1020 795 L1025 725 L1030 795 Z M1028 795 L1032 745 L1036 795 Z" />
            <path d="M1260 815 L1265 735 L1270 815 Z M1272 815 L1276 750 L1280 815 Z" />
          </g>

          {/* 7. Deep Forest Earth & Soil Stratum */}
          <path 
            d="M0 960 C180 930 380 990 580 950 C780 910 980 980 1180 940 C1300 920 1380 955 1440 935 L1440 1800 L0 1800 Z" 
            fill="url(#deepEarthGrad)" 
          />
          <path 
            d="M0 980 C180 950 380 1010 580 970 C780 930 980 1000 1180 960 C1300 940 1380 975 1440 955" 
            stroke="#2a5a46" 
            strokeWidth="3" 
            strokeOpacity="0.4" 
            fill="none" 
          />

          {/* 8. Deep Bedrock Soil Foundation */}
          <path 
            d="M0 1130 Q140 1100 280 1120 Q440 1080 620 1110 Q800 1070 980 1110 Q1160 1080 1300 1115 Q1380 1090 1440 1105 L1440 1800 L0 1800 Z" 
            fill="url(#bedrockGrad)" 
          />
          <path 
            d="M0 1150 Q140 1120 280 1140 Q440 1100 620 1130 Q800 1090 980 1130 Q1160 1100 1300 1135 Q1380 1110 1440 1125" 
            stroke="#163124" 
            strokeWidth="3.5" 
            strokeOpacity="0.5" 
            fill="none" 
          />
        </svg>
      </div>

      {/* 2. Soft Warm Linen Canvas Wash - Gentle on home, enhanced clean paper wash on blog content pages */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          isBlogContentPage
            ? 'bg-gradient-to-b from-[#faf8f5]/75 via-[#faf8f5]/82 to-[#faf8f5]/85'
            : 'bg-gradient-to-b from-[#faf8f5]/45 via-[#faf8f5]/55 via-45% to-[#0d1e16]/30'
        }`} 
      />

      {/* 3. Subtle Handmade Paper Fiber Grain Texture (SVG noise filter) */}
      <div 
        className="absolute inset-0 opacity-[0.032] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
