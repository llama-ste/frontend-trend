import { atom } from "recoil";

export const languageState = atom({
  key: "languageState",
  default: "english",
});

export const textState = atom({
  key: "textState",
  default: {
    english: {
      title: "The stats for newbie frontend developers in South Korea",
      subTitle: "All of stats based on wanted.co.kr",
      frontTitle: "React, Vue, Angular 🤔",
      frontSubTitle:
        "How the company does require three of most popular framework/library? \nFollowing is based on 120 of job position requires at least one of these skills.",
      topTenTitle: "The most mentioned tech stack🔥",
      topTenSubTitle:
        "What of tech stack mostly mentioned on the job description? \nFollowing is based on 274 of frontend developer job positions.",
    },
    korean: {
      title: "국내 신입 프론트엔드 개발자를 위한 통계",
      subTitle: "wanted.co.kr에 기반하여 집계됨",
      frontTitle: "React, Vue, Angular 🤔",
      frontSubTitle:
        "채용공고에서는 위의 3가지 기술이 얼마나 언급되고 있을까요? \n아래의 결과는 이 기술을 언급한 채용공고 120개를 분석한 결과입니다.",
      topTenTitle: "가장 많이 언급된 기술스택🔥",
      topTenSubTitle:
        "어떤 기술이 채용 공고에 가장 많이 언급되고 있을까요? \n아래의 결과는 프론트엔드 개발자 채용공고 274개를 분석한 결과입니다.",
    },
  },
});
