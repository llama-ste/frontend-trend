import Chart from "react-apexcharts";
import { frontLabelObj } from "../../common/options";

const DonutChart = ({ labels, series }) => {
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
      width: 210,
      offsetY: 20,
      offsetX: -30,
      fontSize: "14px",
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
    plotOptions: {
      pie: {
        dataLabels: {
          minAngleToShowLabel: 9,
        },
        offsetY: 10,
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              color: "#ff6633",
              fontSize: "22px",
              fontWeight: "bold",
              label: "Total",
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
      style: {
        fontSize: "13px",
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
