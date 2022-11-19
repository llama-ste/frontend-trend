import Chart from "react-apexcharts";

const BarChart = ({ series, labels }) => {
  const newSeries = [{ data: series }];
  const chartOptions = {
    chart: {
      offsetY: -10,
      type: "bar",
      height: 420,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        barHeight: "85%",
        horizontal: true,
        borderRadius: 4,
        dataLabels: { position: "bottom" },
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: { color: "#fff", fontSize: "13px" },
      formatter: function (value, options) {
        return `${options.dataPointIndex + 1}. ${
          options.w.globals.labels[options.dataPointIndex]
        } (${value})`;
      },
      dropShadow: { enabled: true },
    },
    stroke: { show: false },
    xaxis: {
      categories: labels,
      labels: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
    tooltip: {
      theme: "dark",
      followCursor: true,
      x: { show: false },
      y: {
        formatter(value, options) {
          const {
            dataPointIndex,
            w: {
              globals: { labels },
            },
          } = options;
          const findLabel = labels[dataPointIndex];

          return `${findLabel}: ${value}`;
        },
        title: {
          formatter: () => "",
        },
      },
    },
    legend: { show: false },
    grid: { show: false },
    colors: [
      "#ff6633",
      "#525356",
      "#525356",
      "#525356",
      "#525356",
      "#525356",
      "#525356",
      "#525356",
      "#525356",
      "#525356",
    ],
  };
  return (
    <Chart
      options={chartOptions}
      series={newSeries}
      type="bar"
      height={420}
      width={600}
    />
  );
};

export default BarChart;
