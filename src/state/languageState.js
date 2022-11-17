import { atom } from "recoil";

export const languageState = atom({
  key: "languageState",
  default: "english",
});

export const textState = atom({
  key: "textState",
  default: {
    english: {
      title: "New Frontend Developer Skill Preference by Company",
      subTitle: "with.Wanted (Korea job site)",
      // frontTitle: "Frontend framework preference by company",
      frontTitle: "React, Vue, Angular 🤔",
      frontSubTitle:
        "What frameworks do companies prefer these days? Check out the results below!",
      topTenTitle: "Top 10 most matched skill in job openings",
      topTenSubTitle: "This is the result filtered by new frontend developer.",
    },
    korean: {
      title: "회사별 신입 프론트엔드 개발자 기술 선호도",
      subTitle: "with.원티드",
      // frontTitle: "회사별 프론트엔드 프레임워크 선호도",
      frontTitle: "React, Vue, Angular 🤔",
      frontSubTitle:
        "요즘 회사들은 어떤 프레임워크를 선호할까? 아래의 결과로 확인해보세요!",
      topTenTitle: "채용공고에서 가장 많이 매칭된 기술 Top 10",
      topTenSubTitle: "신입 프론트엔드 개발자로 필터된 결과입니다.",
    },
  },
});
