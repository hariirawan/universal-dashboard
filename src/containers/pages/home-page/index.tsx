import React, { useState } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { Card, Col, Row } from "antd";
import { MOCard } from "../../../components/molecules";

interface IDataChart {
  labels: Array<String>;
  datasets: Array<{ label: String; backgroundColor: String; data: any }>;
}

export default function HomePage(props: any) {
  const [dataChart, setdataChart] = useState<IDataChart>({
    labels: ["07 am", "08 am", "09 am", "10 am", "11 am", "12 am"],
    datasets: [
      {
        label: "Subcriptions",
        backgroundColor: "rgba(0, 255, 0, 0.75)",
        data: [35, 130, 80, 113, 60, 140, 45, 80, 120],
      },
    ],
  });
  const chartPie = {
    labels: ["completed", "unpaid", "pending", "canceled"],
    datasets: [
      {
        label: "My First dataset",
        data: [4100, 2500, 1800, 2300],
        backgroundColor: ["#4c84ff", "#29cc97", "#8061ef", "#fec402"],
        borderColor: ["#4c84ff", "#29cc97", "#8061ef", "#fec402"],
      },
    ],
  };

  function setGradientColor(canvas: any, color: any) {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 20, 0, 300);
    gradient.addColorStop(0, "rgba(255,224,178 ,1)");
    gradient.addColorStop(0.5, "rgba(255,243,224 ,.1)");
    return gradient;
  }

  function getChartData(canvas: any) {
    let data = dataChart;
    if (dataChart.datasets) {
      let colors = ["rgba(33, 212, 253,0.75)", "rgba(183, 33, 255, 0.75)"];
      data.datasets.forEach((set: any, key: any) => {
        set.backgroundColor = setGradientColor(canvas, colors[key]);
        set.borderColor = "rgba(255,152,0 ,1)";
        set.borderWidth = 3;
      });
    }
    return data;
  }

  let dataOverviewCard = [1, 2, 3, 4];

  return (
    <div>
      <Row gutter={[16, 20]}>
        {dataOverviewCard.map((data) => (
          <Col className="gutter-row" span={6}>
            <MOCard />
          </Col>
        ))}
      </Row>
      <Row gutter={16}>
        <Col span={16}>
          <Card title="Time Admitted" extra="Today" style={{ borderRadius: 8 }}>
            <Line
              height={100}
              options={{
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        borderDash: [3, 4],
                        color: "#e4e4e4",
                      },
                    },
                  ],
                },
                legend: {
                  display: false,
                },
                responsive: true,
              }}
              data={getChartData}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Doughnut
              data={chartPie}
              options={{
                plugins: {
                  id: "my-flugin",
                  beforeInit: () => {},
                },
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
