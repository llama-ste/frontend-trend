import styled from "styled-components";

const ChartTitleBox = ({ title = "", subTitle = "" }) => {
  return (
    <TitleBox>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </TitleBox>
  );
};

export default ChartTitleBox;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 6px;
`;

const Title = styled.h2`
  font-size: 22px;
  margin: 0px;
`;

const SubTitle = styled.h3`
  margin: 0px;
  font-size: 15px;
  white-space: pre-wrap;
`;
