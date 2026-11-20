import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Leaf } from 'lucide-react';

function AnimatedScore({ targetScore, active, isMobile }) {
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    if (isMobile) {
      setCurrentScore(targetScore);
      return;
    }

    if (!active) {
      setCurrentScore(0);
      return;
    }

    let startTime = null;
    const duration = 650; // ms
    let frameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCurrentScore(Math.round(ease * targetScore));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCurrentScore(targetScore);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [targetScore, active, isMobile]);

  return <span>{isMobile ? targetScore : currentScore}/100</span>;
}

export default function SpeciesDirectoryCard({ 
  material, 
  isHovered, 
  isDimmed, 
  onHover, 
  onLeave 
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      onMouseEnter={isMobile ? undefined : onHover}
      onMouseLeave={isMobile ? undefined : onLeave}
      className={`relative rounded-2xl bg-white transition-all duration-500 ease-out flex flex-col justify-between ${
        !isMobile && isHovered
          ? 'scale-[1.10] z-30 shadow-2xl ring-2 ring-[#2a5a46]/40 border-transparent bg-white'
          : !isMobile && isDimmed
          ? 'opacity-40 scale-[0.98] blur-[0.4px] grayscale-[15%] border border-[#e8ded1] z-10'
          : 'border border-[#e8ded1] shadow-xs z-10'
      }`}
    >
      <div>
        {/* Botanical Specimen Thumbnail */}
        <div className="relative aspect-16/9 w-full overflow-hidden rounded-t-2xl bg-[#e8ded1]/50">
          {material.imageUrl ? (
            <img
              src={material.imageUrl}
              alt={material.name}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                !isMobile && isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#14365d]/10 via-[#7c482b]/10 to-[#2a5a46]/10 flex items-center justify-center">
              <Leaf className="w-8 h-8 text-[#2a5a46]/40" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-70" />
          
          <div className="absolute top-3 left-3">
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs ${material.badgeColor}`}>
              {material.category}
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/60 text-white/90 border border-white/10 backdrop-blur-md shadow-xs">
              Cycle: {material.harvestCycle}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="font-serif text-2xl font-bold text-[#0c2340] transition-colors mb-1">
            {material.name}
          </h3>
          <p className="text-xs font-mono text-[#718096] italic mb-3">
            {material.botanicalName} ({material.family})
          </p>
          <p className="text-xs text-[#4a5568] leading-relaxed">
            {material.shortDesc}
          </p>

          {/* Metrics Section: Always visible on Mobile; Collapsible hover-reveal on Desktop */}
          <div
            className={`transition-all duration-500 ease-out ${
              isMobile
                ? 'pt-3.5 pb-3.5 my-3.5 border-t border-b border-[#e8ded1] opacity-100 max-h-none'
                : isHovered
                ? 'max-h-56 opacity-100 pt-3.5 pb-3.5 my-3.5 border-t border-b border-[#e8ded1] overflow-hidden'
                : 'max-h-0 opacity-0 pt-0 pb-0 my-0 border-t-0 border-b-0 border-transparent overflow-hidden'
            }`}
          >
            <div className="space-y-3 text-xs">
              {/* Tensile Durability */}
              <div>
                <div className="flex justify-between text-[#2d3748] mb-1.5 font-medium">
                  <span className="text-[#0c2340] font-semibold">Tensile Durability:</span>
                  <span className="font-bold text-[#0c2340]">
                    <AnimatedScore 
                      targetScore={material.durabilityScore} 
                      active={isHovered} 
                      isMobile={isMobile}
                    />
                  </span>
                </div>
                <div className="w-full h-2 bg-[#e8ded1] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#14365d] via-[#7c482b] to-[#2a5a46] transition-all duration-800 ease-out rounded-full"
                    style={{ width: isMobile || isHovered ? `${material.durabilityScore}%` : '0%' }}
                  />
                </div>
              </div>

              {/* Moisture Profile */}
              <div className="flex justify-between items-center">
                <span className="text-[#718096]">Moisture Profile:</span>
                <span className="font-semibold text-[#0c2340]">{material.moistureTolerance}</span>
              </div>

              {/* Carbon Metric */}
              <div className="flex justify-between items-center">
                <span className="text-[#718096]">Carbon Metric:</span>
                <span className="font-semibold text-[#2a5a46]">{material.carbonRating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="px-6 pb-6 pt-0">
        <Link
          to={`/blog`}
          className="water-ripple w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-lg text-xs font-bold text-[#0c2340] bg-[#faf8f5] hover:bg-[#14365d] hover:text-white transition-all shadow-2xs"
        >
          <span>Read Research on {material.name}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
