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

const Doughnut3D = () => {

const chartConfigs = {
    type: "doughnut3d", // The chart type
    width: "400", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {

    "chart": {
        "caption": "Sales by Product Categories",
        "subCaption": "Last year",
        "numberPrefix": "$",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "Fruits",
            "value": "28504"
        },
        {
            "label": "Vegetables",
            "value": "14633"
        },
        {
            "label": "Spices",
            "value": "10507"
        },
        {
            "label": "Others",
            "value": "4910"
        }
    ]
}}

  return (
    <div>
      <ReactFC {...chartConfigs} />
    </div>
  )
}


export default Doughnut3D