import React from "react";
import { PolarArea, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

Chart.defaults.font.size = 25;
Chart.defaults.font.family = "Bebas Neue";

const PolarAreaChart = () => {
  // creating gradient colors and datasets
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    function getGradientColor(ctx, colorTop, colorBottom) {
      const gradient = ctx.createLinearGradient(0, 0, 600, 600);
      gradient.addColorStop(0.7, colorTop);
      gradient.addColorStop(1, colorBottom);
      return gradient;
    }
    return {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        // first dataset
        {
          label: "# of votes",
          data: [8, 3, 6, 11, 4, 7, 9],
          backgroundColor: [
            "rgba(54, 162, 235, 0.5)",
            "rgba(88,101,184, 0.5)",
            "rgba(52,140,78, 0.5)",
            "rgba(107,36,36, 0.5)",
            "rgb(86,107,86, 0.5)",
            "rgba(130,16,54, 0.5)",
            "rgba(255,230,0, 0.5)",
          ],
          borderWidth: 0,
          hoverBackgroundColor: "#041e40",
          hoverBorderColor: "#041e40",
          hoverBorderWidth: 2,
        },
      ],
    };
  };

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
      }}
    >
      <h2 style={{ color: "black", fontFamily: "Bebas Neue" }}>
        <u>Polar Area Chart</u>
      </h2>
      <PolarArea
        data={data}
        height={250}
        width={400}
        options={{
          responsive: true,
          //   maintainAspectRatio: true,
          scale: {
            ticks: {
              stepSize: 4,
              min: 0,
              max: 10,
            },
          },
          plugins: {
            title: {
              display: true,
              text: "some random data",
              color: "#041e40",
              font: {
                size: 40,
                lineHeight: 1.2,
              },
            },
            legend: {
              position: "bottom",
              labels: {
                font: {
                  size: 12,
                  lineHeight: 1.2,
                },
                boxWidth: 20,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PolarAreaChart;
