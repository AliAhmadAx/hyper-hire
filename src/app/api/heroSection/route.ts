import { NextResponse } from "next/server";

interface Cards {
  profileImageUrl: string;
  name: string;
  designation: string;
  exp: string;
  skills: string[];
}

type advantages = {
  title: string;
  desc: string;
};

type checkbox = {
  checked: boolean;
  text: string;
};

interface HeroSectionData {
  tooltip: string;
  title1: string;
  title2: string;
  subtitle1: string;
  subtitle2: string;
  cta: string;
}

type miniCards = {
  icon: string;
  title: string;
};

export async function GET() {
  const slideshowData: Cards[] = [
    {
      profileImageUrl:
        "https://images.unsplash.com/photo-1730882884953-378e5349a0a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Dmo 1",
      designation: "마케팅",
      exp: "2y+",
      skills: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
    {
      profileImageUrl:
        "https://images.unsplash.com/photo-1730882884953-378e5349a0a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Demo 2",
      designation: "마케팅",
      exp: "2y+",
      skills: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
    {
      profileImageUrl:
        "https://images.unsplash.com/photo-1730882884953-378e5349a0a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Demo 3",
      designation: "마케팅",
      exp: "2y+",
      skills: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
  ];

  const advantagesCards: advantages[] = [
    {
      title: "평균 월 120만원",
      desc: "임금을 해당 국가를 기준으로 계산합니다.",
    },
    {
      title: "최대 3회 인력교체",
      desc: "막상 채용해보니 맞지 않아도 걱정하지 마세요.",
    },
    {
      title: "평균 3일, 최대 10일",
      desc: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
    },
  ];

  const checkboxesData: checkbox[] = [
    {
      checked: true,
      text: "한국어 능력",
    },
    {
      checked: true,
      text: "업무 수행 능력",
    },
    {
      checked: true,
      text: "겸업 여부",
    },
    {
      checked: true,
      text: "평판 조회",
    },
  ];

  const heroHeadings: HeroSectionData = {
    tooltip: "/assets/HeroTitleBubble.svg",
    title1: "최고의 실력을 가진",
    title2: "외국인 인재를 찾고 계신가요?",
    subtitle1: "법률 및 인사관리 부담없이",
    subtitle2: "1주일 이내에 원격으로 채용해보세요.",
    cta: "개발자가 필요하신가요?",
  };

  const miniCardsData: miniCards[] = [
    {
      icon: "/assets/Marketing.svg",
      title: "해외 마케팅",
    },
    {
      icon: "/assets/ImageIcon.svg",
      title: "퍼블리셔",
    },
    {
      icon: "/assets/BoxIcon.svg",
      title: "캐드원(제도사)",
    },
    {
      icon: "/assets/Target.svg",
      title: "해외 세일즈",
    },
    {
      icon: "/assets/Call.svg",
      title: "해외 CS",
    },
    {
      icon: "/assets/Presentation.svg",
      title: "해외 마케팅",
    },
  ];

  return NextResponse.json({
    slideshow: slideshowData,
    advantages: advantagesCards,
    checkboxes: checkboxesData,
    headings: heroHeadings,
    miniCards: miniCardsData,
  });
}
