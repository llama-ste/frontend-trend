import Chart from "react-apexcharts";
import { frontLabelObj } from "../../common/options";

const DonutChart = ({ labels, series, title = "", subTitle = "" }) => {
  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels,
    colors: [
      "#ff6633",
      "#525356",
      "#525356",
      "#525356",
      "#525356",
      "#525356",
      "#525356",
    ],
    stroke: { show: true, width: 3, colors: ["#27282c"] },
    legend: {
      show: true,
      width: 200,
      offsetY: 85,
      offsetX: -20,
      labels: {
        colors: "#ffffff",
      },
      formatter(value, options) {
        const {
          seriesIndex,
          w: {
            globals: { series },
          },
        } = options;
        return `${seriesIndex + 1}. ${frontLabelObj[value]} (${
          series[seriesIndex]
        }) `;
      },
    },
    title: {
      text: title,
      align: "left",
      margin: 30,
      style: {
        fontSize: "20px",
        color: "#ffffff",
      },
    },
    subtitle: {
      text: subTitle,
      floating: true,
      offsetY: 40,
      style: {
        color: "#fff",
        fontSize: "14px",
        fontWeight: "bold",
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          minAngleToShowLabel: 9,
        },
        offsetY: 20,
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              color: "#ff6633",
              fontSize: "22px",
              fontWeight: "bold",
              label: "Total Company",
            },
            name: {
              color: "#ff6633",
              formatter: (value) => {
                if (value === "isAll") return "All Select";
                return frontLabelObj[value];
              },
            },
            value: {
              color: "#fff",
              fontWeight: "600",
            },
          },
        },
      },
    },
    dataLabels: {
      formatter(value, options) {
        return value.toFixed(1) + "%";
      },
    },
    tooltip: {
      x: { show: false },
      y: {
        formatter(value, options) {
          return `${
            frontLabelObj[options.globals.labels[options.dataPointIndex]]
          }: ${value}`;
        },
        title: {
          formatter: () => "",
        },
      },
      fillSeriesColor: false,
    },
  };

  return (
    <Chart options={chartOptions} series={series} type="donut" width={600} />
  );
};

export default DonutChart;
