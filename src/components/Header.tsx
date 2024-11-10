"use client";
import Image from "next/image";
import ArrowDown from "../../public/assets/ArrowDown.svg";
import { useState } from "react";
export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="w-screen flex items-center justify-center">
      <div
        className={`w-full lg:w-5/6 px-5 lg:px-0 py-10 lg:py-5 flex items-center justify-between absolute top-0 text-lg text-white font-semibold z-10 
      `}
      >
        {/* LOGO  */}
        <div className="w-1/3 flex items-center">
          <Image
            src={"/assets/Logo.svg"}
            alt="hyper hire logo"
            width={114}
            height={21}
          />
        </div>

        {/* TOGGLE MENU AND TITLE  */}
        <div className="w-1/3 hidden lg:flex justify-center items-center space-x-10   ">
          {/* TOGGLE  */}
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="relative flex items-center justify-center space-x-2 cursor-pointer hover:bg-white/20 py-2 px-5 rounded-lg"
          >
            <h3>채용</h3>
            <Image
              src={ArrowDown}
              alt="arrow down icon"
              className={`${showDropdown ? "rotate-180" : ""}`}
            />

            {showDropdown && (
              <div className="w-72 bg-white rounded-lg shadow-lg flex flex-col justify-center text-black text-sm font-bold absolute top-14 left-0">
                <button className="hover:bg-blue-300/20 py-2 px-5 my-3 rounded-lg text-start">
                  채용
                </button>

                <button className="hover:bg-blue-300/20 py-2 px-5 mb-3 rounded-lg text-start">
                  해외 개발자 원격 채용
                </button>

                <button className="hover:bg-blue-300/20 py-2 px-5 mb-3 rounded-lg text-start">
                  외국인 원격 채용 (비개발 직군)
                </button>

                <button className="hover:bg-blue-300/20 py-2 px-5 mb-3 rounded-lg text-start">
                  한국어 가능 외국인 채용
                </button>
              </div>
            )}
          </div>

          {/* TITLE  */}
          <div>
            <h1>해외 개발자 활용 서비스</h1>
          </div>
        </div>

        {/* CTA BUTTON  */}
        <div className="w-1/3 hidden lg:flex items-center justify-end ">
          <button className="bg-white rounded-lg text-[#4A77FF] px-10 py-3">
            문의하기
          </button>
        </div>
      </div>
    </header>
  );
}
