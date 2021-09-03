import React from "react";
import { Line, Chart } from "react-chartjs-2";

Chart.defaults.font.size = 25;
Chart.defaults.font.family = "Bebas Neue";

const LineChart = () => {
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
        // first dataset
        {
          label: "# of something",
          fill: true,
          data: [8, 3, 6, 11, 4, 7, 9],
          backgroundColor: getGradientColor(
            ctx,
            "rgba(54, 162, 235, 1)",
            "rgba(242,254,255, 0.3)"
          ),
          borderWidth: 0,
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(52,140,78, 1)",
            "rgba(133, 92, 92, 1)",
          ],
        },
        // second dataset
        {
          label: "Quantity",
          data: [10, 5, 7, 4, 4, 6, 5],
          cubicInterpolationMode: "monotone",
          backgroundColor: "#5e856a",
          borderColor: "#5e856a",
          borderWidth: 2,
          borderDash: [2, 2],
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
        <u>Line Chart</u>
      </h2>
      <Line
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
                text: "Value",
              },
              min: 0,
              max: 12,
              ticks: {
                stepSize: 3,
              },
            },
            x: {
              grid: {
                display: false,
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
              text: "new random data",
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

export default LineChart;
