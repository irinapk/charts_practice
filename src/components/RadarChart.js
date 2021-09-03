import React from "react";
import { Radar, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

Chart.defaults.font.size = 25;
Chart.defaults.font.family = "Bebas Neue";

const RadarChart = () => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    return {
      labels: ["Tom", "Helen", "Andrew", "Sarah", "Alex", "Anna"],
      datasets: [
        {
          label: "Age",
          data: [25, 28, 22, 15, 18, 10],
          backgroundColor: [
            "rgba(54, 162, 235, 0.5)",
            // "rgba(52,140,78, 0.8)",
            // "rgba(133, 92, 92, 0.8)",
            // "rgba(54, 162, 235, 0.8)",
            // "rgba(52,140,78, 0.8)",
            // "rgba(133, 92, 92, 0.8)",
          ],
          borderWidth: "0px",
          tension: 0.2,
        },
        {
          label: "Apples",
          data: [15, 20, 27, 12, 28, 23],
          backgroundColor: [
            // "rgba(54, 162, 235, 0.5)",
            "rgba(52,140,78, 0.3)",
            // "rgba(133, 92, 92, 0.8)",
            // "rgba(54, 162, 235, 0.8)",
            // "rgba(52,140,78, 0.8)",
            // "rgba(133, 92, 92, 0.8)",
          ],
          borderWidth: "0px",
          tension: 0.2,
        },
        {
          label: "cookies",
          data: [24, 12, 17, 8, 22, 19],
          backgroundColor: [
            // "rgba(54, 162, 235, 0.5)",
            // "rgba(52,140,78, 0.3)",
            "rgba(133, 92, 92, 0.3)",
            // "rgba(54, 162, 235, 0.8)",
            // "rgba(52,140,78, 0.8)",
            // "rgba(133, 92, 92, 0.8)",
          ],
          borderWidth: "0px",
          tension: 0,
        },
      ],
    };
  };

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <h2
        style={{
          color: "black",
          fontFamily: "Bebas Neue",
          marginTop: "0",
        }}
      >
        <u>radar chart</u>
      </h2>
      <Radar
        data={data}
        height={100}
        width={100}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scale: {
            font: {
              size: 15,
            },
            stepSize: 5,
          },
          scales: {
            r: {
              pointLabels: {
                font: {
                  size: 25,
                },
              },
            },
          },

          plugins: {
            title: {
              display: true,
              text: "the real data",
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
                  size: 20,
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

export default RadarChart;
