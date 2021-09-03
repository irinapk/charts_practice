import React from "react";
import { Bar, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

Chart.defaults.font.size = 25;
Chart.defaults.font.family = "Bebas Neue";

const MixedChart = () => {
  // creating gradient colors and datasets
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    function getGradientColor(ctx, colorTop, colorBottom) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 600);
      gradient.addColorStop(0.3, colorTop);
      gradient.addColorStop(1, colorBottom);
      return gradient;
    }
    return {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Quantity",
          type: "line",
          data: [10, 5, 7, 4, 4, 6, 5],
          cubicInterpolationMode: "monotone",
          backgroundColor: "#801818",
          borderColor: "#801818",
          borderWidth: 2,
        },
        {
          label: "Price",
          type: "bar",
          fill: true,
          data: [8, 3, 6, 11, 4, 7, 9],
          backgroundColor: getGradientColor(
            ctx,
            "rgb(242,162,24,1)",
            "rgb(240,242,215, 0.3)"
          ),
          borderWidth: 0,
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(52,140,78, 1)",
            "rgba(133, 92, 92, 1)",
          ],
        },
        {
          label: "Quality",
          type: "line",
          fill: false,
          data: [9, 7, -3, 12, 6, 7, 10],
          cubicInterpolationMode: "default",
          backgroundColor: "rgb(31,89,76, 0.5)",
          borderColor: "#1f594c",
          borderWidth: 2,
          borderDash: [9, 2],
        },
      ],
    };
  };

  return (
    <div
      style={{
        width: "1400px",
        height: "600px",
      }}
    >
      <h2 style={{ color: "black", fontFamily: "Bebas Neue" }}>
        <u>Mixed Chart</u>
      </h2>
      <Bar
        data={data}
        height={500}
        width={1400}
        options={{
          responsive: true,
          //   maintainAspectRatio: true,
          scales: {
            y: {
              title: {
                display: true,
                text: "Values",
              },
              min: -6,
              max: 15,
              beginWithZero: false,
              ticks: {
                stepSize: 3,
              },
            },
            x: {
              min: -5,

              grid: {
                display: true,
              },
              ticks: {
                color: "black",
                font: {
                  size: 14,
                  weight: "bold",
                  lineHeight: 1.2,
                },
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "mysterious data",
              color: "#041e40",
              font: {
                size: 40,
                lineHeight: 1.2,
              },
            },
            legend: {
              labels: {
                font: {
                  size: 16,
                  lineHeight: 1.2,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default MixedChart;
