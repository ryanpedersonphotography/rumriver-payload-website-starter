"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Image from 'next/image';

import type { HistoryCarouselBlock } from '@/payload-types';

// Default historical data for testing/fallback using actual venue images
const defaultHistorySlides = [
  {
    id: 1,
    year: "1914",
    title: "Norwegian Settlers Arrive",
    description: "Sigvart and Helga Selmer, Norwegian immigrants, settled the land and built their first one-room house.",
    image: "/images/venue/property-field-wildflowers-natural.jpg",
  },
  {
    id: 2,
    year: "1932",
    title: "Discovery of the Giant White Pine",
    description: "Sigvart and his sons found a massive white pine that took seven horses to pull to the farm.",
    image: "/images/venue/property-field-wildflowers-natural.jpg",
  },
  {
    id: 3,
    year: "1942-1952",
    title: "White Barn Construction",
    description: "The iconic White Barn was built using lumber from the giant white pine, dried for 20 years.",
    image: "/images/venue/barn-interior-ceiling-beams-lighting.jpg",
  },
  {
    id: 4,
    year: "1959-2003",
    title: "Harold Selmer's Farming Legacy",
    description: "Harold transformed the farm into a successful dairy operation, maintaining family traditions.",
    image: "/images/venue/barn-exterior-full-deck-view-evening.jpg",
  },
  {
    id: 5,
    year: "2006",
    title: "First Wedding Event",
    description: "Rum River Barn hosted its first wedding, marking the beginning of a new era as an event venue.",
    image: "/wedding-photos/anthony-and-linnea/anthony-linnea-2024-001.jpg",
  },
  {
    id: 6,
    year: "Today",
    title: "Minnesota's Premier Barn Venue",
    description: "Operating as Minnesota's premier country and barn event venue for over 18 years.",
    image: "/wedding-photos/loria-and-jason-rolstad-agape/loria-jason-wedding-ceremony.jpg",
  },
];

type HistoryCarouselComponentProps = HistoryCarouselBlock & {
  disableInnerContainer?: boolean;
};

export const HistoryCarouselComponent: React.FC<HistoryCarouselComponentProps> = (props) => {
  const { sectionHeader, historySlides = defaultHistorySlides, autoplay: autoplayEnabled = true, slideInterval = 5000 } = props;

  const [isPlaying, setIsPlaying] = useState(autoplayEnabled);
  
  const autoplay = Autoplay({
    delay: slideInterval,
    stopOnInteraction: false,
    playOnInit: autoplayEnabled,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
    },
    autoplayEnabled ? [autoplay] : []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoplayInstance = emblaApi?.plugins()?.autoplay;
    if (!autoplayInstance) return;

    const isPlaying = autoplayInstance.isPlaying();
    if (isPlaying) autoplayInstance.stop();
    else autoplayInstance.play();
    setIsPlaying(!isPlaying);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFCF8] to-[#F8F5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-['Dancing_Script'] text-2xl text-[#9D6B7B] mb-4">
            {sectionHeader?.scriptAccent || "Through the Years"}
          </div>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl text-[#6B4E3D] mb-6">
            {sectionHeader?.title || "Our Story"}
          </h2>
          <p className="text-lg text-[#6B4E3D]/80 max-w-3xl mx-auto">
            {sectionHeader?.description || "Discover the rich history of Rum River Barn through authentic photographs spanning over 100 years"}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm border-2 border-[#7A8B7F] hover:bg-[#9D6B7B] hover:border-[#9D6B7B] hover:text-white transition-all duration-300 rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110"
            onClick={scrollPrev}
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm border-2 border-[#7A8B7F] hover:bg-[#9D6B7B] hover:border-[#9D6B7B] hover:text-white transition-all duration-300 rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110"
            onClick={scrollNext}
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Autoplay Toggle */}
          {autoplayEnabled && (
            <button
              className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-sm border-2 border-[#7A8B7F] hover:bg-[#9D6B7B] hover:border-[#9D6B7B] hover:text-white transition-all duration-300 rounded-full p-2 shadow-lg"
              onClick={toggleAutoplay}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
          )}

          {/* Embla Carousel */}
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {historySlides.map((slide, index) => (
                <div
                  key={slide.id || index}
                  className="flex-[0_0_100%] min-w-0 relative"
                >
                  <div className="relative mx-4">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                      <Image
                        src={slide.image}
                        alt={`${slide.title} (${slide.year})`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={800}
                        height={500}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Year Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-[#E4C896] text-[#6B4E3D] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          {slide.year}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-['Montserrat'] font-bold mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-lg leading-relaxed max-w-3xl">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-[#9D6B7B] scale-125 shadow-lg"
                    : "bg-[#9D6B7B]/40 hover:bg-[#9D6B7B]/60"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-[#6B4E3D]/60 text-sm">
              {selectedIndex + 1} of {historySlides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Block component version for CMS usage
export const HistoryCarouselBlockComponent: React.FC<HistoryCarouselComponentProps> = (props) => {
  return <HistoryCarouselComponent {...props} />;
};

// Direct component export for fallback usage
export const HistoryCarousel = HistoryCarouselComponent;