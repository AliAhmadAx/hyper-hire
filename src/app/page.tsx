import Image from "next/image";
import { HeroCard } from "@/components/HeroCard";
import { SlideshowCard } from "@/components/SlideshowCard";
import { MiniSlider } from "@/components/MiniSliders";
import { DotLoader } from "react-spinners";
import { Checkbox } from "@/components/Checkbox";

export default async function Home() {
  const res = await fetch(`${process.env.API_URL}/heroSection`);

  const data = await res.json();

  const heroData = data.headings;
  const advantagesData = data.advantages;
  const slideShowData = data.slideshow;
  const miniCardsData = data.miniCards;
  const checkboxesData = data.checkboxes;

  return (
    <div className="background w-screem overflow-x-hidden min-h-screen py-10 lg:py-20 lg:px-10 backdrop-blur-xl">
      {/* MAIN CENTERAL SECTION  */}
      <div className="w-full min-h-[60vh] flex flex-col lg:flex-row justify-center lg:items-center mt-20 ">
        {/* LEFT HAND SIDE WITH TITLE AND DESC  */}
        {!heroData ? (
          <div className="w-1/2 min-h-[60vh] flex flex-col justify-center items-center lg:pr-10 text-white font-extrabold z-10 ">
            <DotLoader color="#ffffff" />
            <h1 className="text-xl">Loading..</h1>
          </div>
        ) : (
          <div className="w-full lg:w-1/2 lg:min-h-[60vh] flex flex-col justify-center px-5 lg:px-0 lg:pr-10 text-white font-extrabold z-10 ">
            {/* BUBBLE  */}
            <Image
              src={heroData.tooltip}
              alt="bubble icon with text above main hero section heading"
              width={150}
              height={48}
              className={`${heroData ? "fade-in-3s" : ""} `}
            />

            {/* TITLE  */}
            <span className="text-[32px] lg:text-[48px] py-5 fade-in-up">
              <h1>{heroData.subtitle1}</h1>
              <h1>{heroData.title2}</h1>
            </span>

            {/* DESCRIPTION  */}
            <span className="text-[24px] text-white/90 fade-in-up">
              <h2 className="mt-0 lg:mt-5">{heroData.subtitle1}</h2>
              <h2>{heroData.subtitle2}</h2>
            </span>

            {/* CTA  */}
            <span className="hidden lg:block text-[18px] fade-in-up">
              <button className="underline mt-5">{heroData.cta}</button>
            </span>

            {/* 3 CARDS  */}
            <HeroCard advantages={advantagesData} />
          </div>
        )}

        {/* RIGHT HAND SIDE WITH SLIDE SHOW  */}
        <div className="w-full lg:w-1/2 h-[500px] flex flex-col items-center z-10">
          <SlideshowCard slideShowData={slideShowData} />
        </div>
      </div>

      {/* SLIDER SECTIONH  */}
      <div className="hidden lg:block w-full mt-20">
        <MiniSlider miniCardsData={miniCardsData} />
      </div>

      <div className="w-full h-full mt-24 block lg:hidden">
        <Checkbox checkboxesData={checkboxesData} />

        {/* CTA  */}
        <span className="lg:hidden text-[18px] fade-in-up px-3 text-[#FBFF23] font-extrabold">
          <button className="underline mt-5">{heroData && heroData.cta}</button>
        </span>
      </div>
    </div>
  );
}