"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface MiniCard {
  icon: string;
  title: string;
}

export const MiniSlider = ({
  miniCardsData,
}: {
  miniCardsData: MiniCard[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Duplicate the miniCardsData to create a continuous loop
  const extendedCards = [...miniCardsData, ...miniCardsData];

  useEffect(() => {
    if (miniCardsData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % miniCardsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [miniCardsData]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * (332 + 20)
      }px)`;
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [currentIndex]);

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-hidden relative">
      <div
        ref={sliderRef}
        className="min-w-fit flex space-x-5 transition-transform duration-500"
      >
        {extendedCards.map((card: MiniCard, index: number) => (
          <div
            key={index}
            className={`px-5 flex items-center space-x-5 w-[332px] h-[88px] rounded-xl bg-white/20 ${
              miniCardsData ? "fade-in-5s" : ""
            }`}
          >
            <div className="w-14 h-14 rounded-lg bg-white/40 flex items-center justify-center">
              <Image src={card.icon} alt="card icon" width={32} height={32} />
            </div>

            <p className="font-extrabold text-white text-2xl">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
