// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const dataset = [
  {
    seriesname: "Vegetables",
    data: [
      {
        value: "1000",
      },
      {
        value: "1150",
      },
      {
        value: "1500",
      },
      {
        value: "500",
      },
    ],
  },
  {
    seriesname: "Fruits",
    data: [
      {
        value: "2500",
      },
      {
        value: "1800",
      },
      {
        value: "2100",
      },
      {
        value: "2600",
      },
    ],
  },
  {
    seriesname: "Spices",
    data: [
      {
        value: "2400",
      },
      {
        value: "800",
      },
      {
        value: "1000",
      },
      {
        value: "2800",
      },
    ],
  },
];

const categories = [
  {
    category: [
      {
        label: "Monday",
      },
      {
        label: "Tuesday",
      },
      {
        label: "Wednesday",
      },
      {
        label: "Thursday",
      },
      {
        label: "Friday",
      },
    ],
  },
];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "mscolumn3d", // The chart type
  width: "600", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration

    chart: {
      caption: "This week's sales",
      subCaption: "Sales by categories",
      xAxisName: "Days",
      yAxisName: "Sales (In KES)",
      numberPrefix: "KES",
      theme: "fusion",
    },
    categories: categories,
    // Chart Data
    dataset: dataset,
  },
};

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const Multiseries3D = () => <ReactFC {...chartConfigs} />;

export default Multiseries3D;
