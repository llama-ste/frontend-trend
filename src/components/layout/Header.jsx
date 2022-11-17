import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import { languageState, textState } from "../../state/languageState";

const Header = () => {
  const [language, setLanguage] = useRecoilState(languageState);
  const textObj = useRecoilValue(textState);

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <StyledHeaderBox>
      <h1
        style={{
          margin: "0px 0px 5px 0px",
        }}
      >
        {language === "english" ? textObj.english.title : textObj.korean.title}
      </h1>
      <h3 style={{ margin: "0px", fontSize: "22px" }}>
        {language === "english"
          ? textObj.english.subTitle
          : textObj.korean.subTitle}
      </h3>
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          justifyContent: "end",
          paddingTop: "15px",
        }}
      >
        <StyledSpan
          onClick={() => changeLanguage("english")}
          currLanguage={language}
          defaultLanguage="english"
        >
          English
        </StyledSpan>
        <StyledSpan
          onClick={() => changeLanguage("korean")}
          currLanguage={language}
          defaultLanguage="korean"
        >
          한국어
        </StyledSpan>
      </div>
    </StyledHeaderBox>
  );
};

export default Header;

const StyledHeaderBox = styled.div`
  height: 120px;
  padding-top: 20px;
  list-style: none;
  display: flex;
  background: #27282c;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

const StyledSpan = styled.span`
  background: ${({ currLanguage, defaultLanguage }) =>
    currLanguage === defaultLanguage ? "rgb(255, 102, 51)" : "#fff"};
  display: block;
  border-radius: ${({ defaultLanguage }) =>
    defaultLanguage === "english" ? "4px 0 0 4px" : "0 4px 4px 0"};
  cursor: pointer;
  padding: 5px 12px;
  letter-spacing: 0.5px;
  color: ${({ currLanguage, defaultLanguage }) =>
    currLanguage === defaultLanguage ? "#fff" : "#525356"};
  text-align: center;
  transition: background-color 0.1s ease;
  font-weight: bold;
  :hover {
    background: ${({ currLanguage, defaultLanguage }) =>
      currLanguage === defaultLanguage
        ? "rgb(235, 90, 40)"
        : "rgb(233, 233, 233)"};
  }
`;
