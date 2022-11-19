import { useRecoilValue } from "recoil";
import { textState, languageState } from "./state/languageState";

import Layout from "./components/layout/Layout";
import BarChart from "./components/chart/BarChart";
import DonutChart from "./components/chart/DonutChart";
import frontSkill from "./common/frontSkill.json";
import topTenSkill from "./common/topTenSkill.json";
import ChartBox from "./components/chart/ChartBox";
import ChartTitleBox from "./components/chart/ChartTitleBox";

function App() {
  const language = useRecoilValue(languageState);
  const textObj = useRecoilValue(textState);

  const frontLabel = Object.keys(frontSkill);
  const frontSeries = Object.values(frontSkill);
  const topTenLabel = Object.keys(topTenSkill);
  const topTenSeries = Object.values(topTenSkill);

  return (
    <Layout>
      <ChartTitleBox
        title={
          language === "english"
            ? textObj.english.frontTitle
            : textObj.korean.frontTitle
        }
        subTitle={
          language === "english"
            ? textObj.english.frontSubTitle
            : textObj.korean.frontSubTitle
        }
      />
      <ChartBox marginBottom={30}>
        <DonutChart series={frontSeries} labels={frontLabel} />
      </ChartBox>
      <ChartTitleBox
        title={
          language === "english"
            ? textObj.english.topTenTitle
            : textObj.korean.topTenTitle
        }
        subTitle={
          language === "english"
            ? textObj.english.topTenSubTitle
            : textObj.korean.topTenSubTitle
        }
      />
      <ChartBox>
        <BarChart series={topTenSeries} labels={topTenLabel} />
      </ChartBox>
    </Layout>
  );
}

export default App;
