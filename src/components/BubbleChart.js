import React from "react";
import { Bubble, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

Chart.defaults.font.size = 25;
Chart.defaults.font.family = "Bebas Neue";

const BubbleChart = () => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    return {
      labels: ["One", "Two"],
      datasets: [
        {
          label: "Cats",
          data: [
            { x: 4, y: 5, r: 25 },
            { x: 8, y: 3, r: 36 },
          ],
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderWidth: 2,
        },
        {
          label: "Dogs",
          data: [
            { x: 5, y: 7, r: 20 },
            { x: 10, y: 5, r: 16 },
          ],
          backgroundColor: "rgba(52,140,78, 0.8)",
          borderWidth: 2,
        },
        {
          label: "Parrots",
          data: [
            { x: 2, y: 3, r: 10 },
            { x: 6, y: 6, r: 30 },
          ],
          backgroundColor: "rgba(107,36,36, 0.7)",
          borderWidth: 2,
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
        <u>Bubble Chart</u>
      </h2>
      <Bubble
        data={data}
        height={550}
        width={600}
        options={{
          responsive: true,

          scales: {
            y: {
              title: {
                display: true,
                text: "Some values",
              },
              min: 0,
              max: 12,
              ticks: {
                stepSize: 3,
                font: {
                  size: 20,
                },
              },
            },
            x: {
              min: 0,
              max: 12,

              grid: {
                display: true,
              },
              ticks: {
                stepSize: 4,

                font: {
                  size: 20,
                  weight: "bold",
                  lineHeight: 1.2,
                },
              },
            },
          },

          plugins: {
            title: {
              display: true,
              text: "wonderful data",
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
                  size: 19,
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

export default BubbleChart;
