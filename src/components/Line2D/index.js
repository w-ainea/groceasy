// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 2 - Chart Data
const chartData = [
  {
    label: "Mon",
    value: "15123",
  },
  {
    label: "Tue",
    value: "14233",
  },
  {
    label: "Wed",
    value: "23507",
  },
  {
    label: "Thu",
    value: "9110",
  },
  {
    label: "Fri",
    value: "15529",
  },
  {
    label: "Sat",
    value: "20803",
  },
  {
    label: "Sun",
    value: "19202",
  },
];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "line",
  renderAt: "chartContainer",
  width: "400", //width of the chart
  height: "400", //height of the chart
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Total footfall in Bakersfield Central",
      subCaption: "Last week",
      xAxisName: "Day",
      yAxisName: "No. of Visitors",
      lineThickness: "2",
      theme: "fusion",
    },
    data: chartData,
    trendlines: [
      {
        line: [
          {
            startvalue: "18500",
            color: "#1aaf5d",
            displayvalue: "Average{br}weekly{br}footfall",
            valueOnRight: "1",
            thickness: "2",
          },
        ],
      },
    ],
  },
};

const Line2D = () => {
  return (
    <div>
      <ReactFC {...chartConfigs} />
    </div>
  );
};

export default Line2D;
