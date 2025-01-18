"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Banner } from "@/types/banner";

interface BannerSliderProps {
  banners: Banner[];
  autoPlayInterval?: number;
}

export const BannerSlider: React.FC<BannerSliderProps> = ({
  banners,
  autoPlayInterval = 5000, // 5 segundos por padrão
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Filtra apenas banners ativos e dentro do período de exibição
  const activeBanners = banners.filter((banner) => {
    const now = new Date();
    const startDate = new Date(banner.startDate);
    const endDate = new Date(banner.endDate);
    return banner.isActive && now >= startDate && now <= endDate;
  });

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === activeBanners.length - 1 ? 0 : prevIndex + 1
    );
  }, [activeBanners.length]);

  const goToPreviousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? activeBanners.length - 1 : prevIndex - 1
    );
  }, [activeBanners.length]);

  // Controle do autoplay
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying && activeBanners.length > 1) {
      intervalId = setInterval(goToNextSlide, autoPlayInterval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, autoPlayInterval, goToNextSlide, activeBanners.length]);

  // Pausa o autoplay quando o mouse está sobre o banner
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  if (!activeBanners.length) return null;

  const currentBanner = activeBanners[currentIndex];

  return (
    <section
      className="relative w-full overflow-hidden bg-neutral-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Container do Banner */}
      <div className="relative w-full">
        {/* Imagem Desktop */}
        <div className="hidden md:block aspect-[1920/500] w-full">
          <img
            src={currentBanner.imageUrl.desktop}
            alt={currentBanner.altText}
            className="w-full h-full object-cover"
            loading="eager"
            draggable="false"
          />
        </div>
        {/* Imagem Mobile */}
        <div className="block md:hidden aspect-[768/400] w-full">
          <img
            src={currentBanner.imageUrl.mobile}
            alt={currentBanner.altText}
            className="w-full h-full object-cover"
            loading="eager"
            draggable="false"
          />
        </div>

        {/* Link envolvendo todo o banner */}
        <a
          href={currentBanner.link}
          className="absolute inset-0 z-10"
          aria-label={currentBanner.title}
        />
      </div>

      {/* Controles de Navegação */}
      {activeBanners.length > 1 && (
        <>
          {/* Botões de navegação */}
          <button
            onClick={(e) => {
              e.preventDefault();
              goToPreviousSlide();
            }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20
                     bg-white/80 hover:bg-white
                     rounded-full w-8 h-8 md:w-10 md:h-10
                     flex items-center justify-center
                     text-neutral-800 hover:text-accent-primary
                     transition-all duration-200 shadow-lg"
            aria-label="Banner anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              goToNextSlide();
            }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20
                     bg-white/80 hover:bg-white
                     rounded-full w-8 h-8 md:w-10 md:h-10
                     flex items-center justify-center
                     text-neutral-800 hover:text-accent-primary
                     transition-all duration-200 shadow-lg"
            aria-label="Próximo banner"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Indicadores de posição */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {activeBanners.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 
                         ${
                           index === currentIndex
                             ? "bg-accent-primary w-4"
                             : "bg-white/60 hover:bg-white/80"
                         }`}
                aria-label={`Ir para banner ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
