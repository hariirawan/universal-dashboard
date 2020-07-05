import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Card } from "antd";

interface IDataChart {
  labels: Array<String>;
  datasets: Array<{ label: String; backgroundColor: String; data: any }>;
}

export default function Reports(props: any) {
  const [dataChart, setdataChart] = useState<IDataChart>({
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Videos Mades",
        backgroundColor: "rgba(255, 0, 255, 0.75)",
        data: [0, 10, 5, 10, 18, 10, 12, 20],
      },
      {
        label: "Subcriptions",
        backgroundColor: "rgba(0, 255, 0, 0.75)",
        data: [14, 15, 21, 25, 15, 24, 32, 25],
      },
    ],
  });

  function setGradientColor(canvas: any, color: any) {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 600, 600);
    gradient.addColorStop(0, color);
    return gradient;
  }

  function getChartData(canvas: any) {
    let data = dataChart;
    if (dataChart.datasets) {
      let colors = ["rgba(33, 212, 253,0.75)", "rgba(183, 33, 255, 0.75)"];
      data.datasets.forEach((set: any, key: any) => {
        set.backgroundColor = setGradientColor(canvas, colors[key]);
        set.borderColor = "white";
        set.borderWidth = 2;
      });
    }
    return data;
  }

  return (
    <Card style={{ position: "relative", width: 600, borderRadius: "5px" }}>
      <Line
        options={{
          responsive: true,
        }}
        data={getChartData}
      />
    </Card>
  );
}
