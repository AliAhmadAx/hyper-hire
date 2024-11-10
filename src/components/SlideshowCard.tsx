"use client";
import Image from "next/image";
import { useState } from "react";
import { DotLoader } from "react-spinners";

interface slideCard {
  profileImageUrl: string;
  name: string;
  designation: string;
  exp: string;
  skills: string[];
}

export const SlideshowCard = ({
  slideShowData,
}: {
  slideShowData: slideCard[];
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  const handlePrevious = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slideShowData.length - 1 : prevIndex - 1
    );

    setFadeIn(true);
    setTimeout(() => {
      setFadeIn(false);
    }, 500);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slideShowData.length - 1 ? 0 : prevIndex + 1
    );

    setFadeIn(true);
    setTimeout(() => {
      setFadeIn(false);
    }, 500);
  };

  return (
    <div className="w-full flex flex-col mt-10 lg:mt-0">
      <div className="w-full h-[450px] flex items-center justify-end lg:space-x-5">
        <button onClick={handlePrevious}>
          <Image
            src="/assets/ArrowDown.svg"
            alt="Slides Arrow Left"
            width={32}
            height={32}
            className="rotate-90 fade-in-5s"
          />
        </button>

        <div className="relative w-full lg:w-[90%] xl:w-[60%] h-full flex items-center justify-center">
          {slideShowData.length === 0 && (
            <div className="w-full flex flex-col text-white items-center justify-center ">
              <DotLoader color="#ffffff" />
              <h1 className="text-xl">Loading..</h1>
            </div>
          )}

          {slideShowData.map((card: slideCard, index: number) => {
            const isActive = index === currentSlideIndex;
            const isLeft =
              index ===
              (currentSlideIndex - 1 + slideShowData.length) %
                slideShowData.length;
            const isRight =
              index === (currentSlideIndex + 1) % slideShowData.length;

            return (
              <div
                key={index}
                className={`absolute w-[85%] lg:w-[80%] xl:w-[70%] transition-transform duration-500 ${
                  isActive
                    ? "z-20 opacity-100 scale-100"
                    : isLeft || isRight
                    ? "z-10 opacity-80 scale-75 lg:scale-80"
                    : "hidden"
                } ${
                  isLeft
                    ? "-translate-x-[20%] lg:-translate-x-[30%] xl:-translate-x-[35%]"
                    : ""
                } ${
                  isRight
                    ? "translate-x-[20%] lg:translate-x-[30%]  xl:translate-x-[35%]"
                    : ""
                }`}
              >
                {slideShowData.length !== 0 && (
                  <div
                    className={`w-full lg:w-[100%] xl:w-[100%] h-fit flex justify-center fade-in-5s 
                      ${
                        fadeIn
                          ? "transition-opacity duration-500 ease-in-out opacity-0 "
                          : "transition-opacity duration-500 ease-in-out opacity-100"
                      }  
            `}
                  >
                    <Image
                      src={"/assets/SlideshowBubble.svg"}
                      alt="bubble icon with text above main hero section heading"
                      width={150}
                      height={48}
                      className={`mb-5 sm:mb-0 lg:mb-10 xl:mb-5 ${
                        isLeft || isRight ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  </div>
                )}

                <div className={`w-full transition-transform duration-500 `}>
                  <div className="w-full flex flex-col items-center justify-center bg-white px-5 lg:px-0 xl:px-5 py-10 rounded-[12px] shadow-lg fade-in-5s ">
                    <Image
                      src={card.profileImageUrl}
                      className="rounded-full w-[120px] h-[120px]"
                      alt="profile image"
                      width={120}
                      height={120}
                    />
                    <h3 className="w-fit text-[24px] font-extrabold mt-3 text-[#24252F] fade-in-5s">
                      {card.name}
                    </h3>

                    <span className="w-full flex items-center justify-center text-[#4A77FF] text-[16px] font-extrabold space-x-1">
                      <h4 className="">{card.designation}</h4>
                      <p className="mb-1">.</p>
                      <h4>{card.exp}</h4>
                    </span>

                    <div className="w-full flex flex-wrap items-center justify-center mt-10">
                      {card.skills.map((skill: string, i: number) => {
                        return (
                          <button
                            key={i}
                            className="text-[#5E626F] text-[16px] font-extrabold py-1 px-3 rounded-[6px] border border-[#C1C5CF]"
                          >
                            {skill}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={handleNext}>
          <Image
            src="/assets/ArrowDown.svg"
            alt="Slides Arrow Right"
            width={32}
            height={32}
            className="-rotate-90 fade-in-5s"
          />
        </button>
      </div>
    </div>
  );
};
