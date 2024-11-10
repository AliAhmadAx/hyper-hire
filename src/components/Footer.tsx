import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center">
      <div className="w-full lg:w-5/6 bg-[#FBFBFB] py-14 lg:py-20 px-3 lg:px-0 text-sm text-[#343741] font-extrabold">
        {/* MAIN DIV 1  */}
        <div className="w-full flex flex-wrap">
          {/* INNER DIV 1 */}
          <div className="space-y-3 mb-10 lg:space-y-5 w-full lg:w-1/4 pr-20 lg:pr-28 ">
            <Image
              src="/assets/logoColored.svg"
              width={187}
              height={34}
              alt="logo colored"
            />

            <p>우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>

            <p>010-0000-0000</p>

            <p>aaaaa@naver.com</p>
          </div>

          {/* INNER DIV 2 */}
          <div className="w-1/2 lg:w-1/6 mb-10 lg:mb-0 space-y-5">
            <Image
              src="/assets/FooterIcons/code.svg"
              width={40}
              height={40}
              alt="logo colored"
            />

            <p>해외 개발자 원격 채용</p>

            <span className="flex space-x-1">
              <p>바로가기</p>
              <Image
                src="/assets/FooterIcons/Arrow.svg"
                width={20}
                height={20}
                alt="logo colored"
              />
            </span>
          </div>

          {/* INNER DIV 3 */}
          <div className="w-1/2 lg:w-1/6 space-y-5">
            <Image
              src="/assets/FooterIcons/code.svg"
              width={40}
              height={40}
              alt="logo colored"
            />

            <p>해외 개발자 원격 채용</p>

            <span className="flex space-x-1">
              <p>바로가기</p>
              <Image
                src="/assets/FooterIcons/Arrow.svg"
                width={20}
                height={20}
                alt="logo colored"
              />
            </span>
          </div>

          {/* INNER DIV 4 */}
          <div className="w-1/2 lg:w-1/6 mb-10 lg:mb-0 space-y-5">
            <Image
              src="/assets/FooterIcons/code.svg"
              width={40}
              height={40}
              alt="logo colored"
            />

            <p>해외 개발자 원격 채용</p>

            <span className="flex space-x-1">
              <p>바로가기</p>
              <Image
                src="/assets/FooterIcons/Arrow.svg"
                width={20}
                height={20}
                alt="logo colored"
              />
            </span>
          </div>

          {/* INNER DIV 5 */}
          <div className="w-1/2 lg:w-1/6 space-y-5">
            <Image
              src="/assets/FooterIcons/code.svg"
              width={40}
              height={40}
              alt="logo colored"
            />

            <p>해외 개발자 원격 채용</p>

            <span className="flex space-x-1">
              <p>바로가기</p>
              <Image
                src="/assets/FooterIcons/Arrow.svg"
                width={20}
                height={20}
                alt="logo colored"
              />
            </span>
          </div>
        </div>

        {/* MAIN DIV 2  */}
        <div className="w-full flex flex-wrap mt-10">
          {/* INNER DIV 1 */}
          <div className="space-y-3 w-1/2 lg:w-1/6 mb-10 lg:mb-0 ">
            <p>상호명</p>

            <p>하이퍼하이어</p>

            <p>Hyperhire India Private Limited</p>
          </div>

          {/* INNER DIV 2 */}
          <div className="w-1/2 lg:w-1/12 space-y-3">
            <p>대표 CEO</p>

            <p>김주현</p>

            <p>Juhyun Kim</p>
          </div>

          {/* INNER DIV 3 */}
          <div className="w-full lg:w-1/6 mb-10 lg:mb-0 space-y-3">
            <p>사업자등록번호 CIN</p>

            <p>427-86-01187</p>

            <p>U74110DL2016PTC290812</p>
          </div>

          {/* INNER DIV 4 */}
          <div className="w-full lg:w-1/4 space-y-3">
            <p>주소 ADDRESS</p>

            <p>서울특별시 강남대로 479, 지하 1층 238호</p>

            <p>
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
              Delhi, 110053 India{" "}
            </p>
          </div>
        </div>

        {/* MAIN DIV 3  */}
        <div className="mt-10">
          <p>ⓒ 2023 Hyperhire</p>
        </div>
      </div>
    </footer>
  );
}
