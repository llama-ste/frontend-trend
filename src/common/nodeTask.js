const axios = require("axios");
const fs = require("fs");

const baseUrl = `https://www.wanted.co.kr/api/v4/jobs`;

const frontSkillObj = {
  React: "React",
  "React.js": "React",
  VueJS: "Vue",
  AngularJS: "Angular",
  Svelte: "Svelte",
};

const allCompanySkillList = [];

const skillCountObj = {};

const frontSkillCountObj = {
  isOnlyReact: 0,
  isOnlyVue: 0,
  isOnlyAngular: 0,
  isReactAndVue: 0,
  isReactAndAngular: 0,
  isVueAndAngular: 0,
  isAll: 0,
};

const getJobList = async (offset = 0) => {
  const params = {
    country: "kr",
    job_sort: "company.response_rate_order",
    locations: "all",
    years: "0",
    limit: "100",
    offset,
  };

  const newParams = new URLSearchParams(params);

  newParams.append("tag_type_ids", "669");
  newParams.append("tag_type_ids", "873");

  try {
    return await axios.get(baseUrl, {
      params: newParams,
    });
  } catch (err) {
    console.log(err);
  }
};

const getDetailData = async (id) => {
  try {
    return axios.get(`${baseUrl}/${id}`);
  } catch (err) {
    console.log(err);
  }
};

const getIds = (arr) => {
  return arr.map((elem) => elem?.id);
};

const createFile = (data, fileName) => {
  const jsonData = JSON.stringify(data);

  fs.writeFile(`${fileName}.json`, jsonData, "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
  });
};

getJobList()
  .then(async ({ data: { data } }) => {
    const companyIds = [];

    companyIds.push(...getIds(data));

    let hasNextPage = data !== null && data.length === 100;
    let count = 100;

    while (hasNextPage) {
      const {
        data: { data },
      } = await getJobList(count);

      companyIds.push(...getIds(data));

      if (data !== null && data.length < 100) {
        hasNextPage = false;
      } else {
        count += 100;
      }
    }

    return companyIds;
  })
  .then(async (ids) => {
    const companySkillList = await Promise.all(
      ids.map(async (id) => {
        const {
          data: {
            job: { skill_tags },
          },
        } = await getDetailData(id);

        const skillTitleList = [
          ...new Set(
            skill_tags.map((tag) => {
              if (tag.title === "React.js") return "React";
              return tag.title;
            })
          ),
        ];

        allCompanySkillList.push(skillTitleList);

        const frontSkillList = skillTitleList.filter(
          (title) => frontSkillObj[title]
        );

        return frontSkillList;
      })
    );

    // e.g. [ ["Vue.js", "React"], ["Git", "C#"], [], ... ]
    const filteredCompanySkillList = companySkillList.filter(
      (arr) => arr.length > 0
    );

    filteredCompanySkillList.forEach((companySkills) => {
      let isReact = false;
      let isVue = false;
      let isAngular = false;

      companySkills.forEach((skill) => {
        switch (skill) {
          case "React":
            isReact = true;
            break;
          case "VueJS":
            isVue = true;
            break;
          case "AngularJS":
            isAngular = true;
            break;
          default:
        }
      });

      // only one value is true
      const obj = {
        isOnlyReact: isReact && !isVue && !isAngular,
        isOnlyVue: !isReact && isVue && !isAngular,
        isOnlyAngular: !isReact && !isVue && isAngular,
        isReactAndVue: isReact && isVue && !isAngular,
        isReactAndAngular: isReact && !isVue && isAngular,
        isVueAndAngular: !isReact && isVue && isAngular,
        isAll: isReact && isVue && isAngular,
      };

      const filteredObjKey = Object.keys(
        Object.fromEntries(Object.entries(obj).filter((elem) => elem[1]))
      )[0];

      frontSkillCountObj[filteredObjKey] += 1;
    });

    allCompanySkillList.forEach((skillList) => {
      skillList.forEach((title) => {
        title in skillCountObj
          ? (skillCountObj[title] += 1)
          : (skillCountObj[title] = 1);
      });
    });

    const topTenSkillCountObj = Object.fromEntries(
      Object.entries(skillCountObj)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)
    );

    const sortedFrontSkillCountObj = Object.fromEntries(
      Object.entries(frontSkillCountObj).sort(([, a], [, b]) => b - a)
    );

    createFile(topTenSkillCountObj, "topTenSkill");
    createFile(sortedFrontSkillCountObj, "frontSkill");
  });
