import React from "react";
import { Doughnut, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

Chart.defaults.font.size = 25;
Chart.defaults.font.family = "Bebas Neue";

const DonutChart = () => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    function getGradientColor(ctx, colorTop, colorBottom) {
      const gradient = ctx.createLinearGradient(0, 300, 300, 0);
      gradient.addColorStop(0.3, colorTop);
      gradient.addColorStop(1, colorBottom);
      return gradient;
    }
    return {
      labels: ["Blue", "Green", "Brown", "Yellow", "Purple"],
      datasets: [
        {
          label: "# of votes",
          data: [3, 6, 8, 5, 7],
          backgroundColor: [
            getGradientColor(
              ctx,
              "rgba(54, 162, 235, 1)",
              "rgba(54, 162, 235, 0.2)"
            ),
            getGradientColor(ctx, "rgba(52,140,78, 1)", "rgba(52,140,78, 0.2)"),
            getGradientColor(
              ctx,
              "rgba(133, 92, 92, 1)",
              "rgba(133, 92, 92, 0.2)"
            ),
            getGradientColor(
              ctx,
              "rgba(212,198,13, 1)",
              "rgba(212,198,13, 0.2)"
            ),
            getGradientColor(
              ctx,
              "rgba(140, 138, 212, 1)",
              "rgba(140, 138, 212, 0.2)"
            ),
          ],
          borderWidth: 2,
          borderColor: "white",
          //   hoverBackgroundColor: "#041e40",
          //   hoverBorderColor: "#041e40",
          hoverBorderWidth: 3,
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
        <u>doughnut chart</u>
      </h2>
      <Doughnut
        data={data}
        height={100}
        width={100}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          cutout: 35,
          plugins: {
            title: {
              display: true,
              text: "suspicious data",
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
                boxWidth: 23,
              },
            },
            tooltip: {
              backgroundColor: "rgba(43,76,153, 0.6)",
              caretSize: 3,
              padding: 15,
              cornerRadius: 15,
              bodyFont: {
                size: 14,
              },
              boxWidth: 8,
              boxHeight: 8,
              displayColors: true,
            },
          },
        }}
      />
    </div>
  );
};

export default DonutChart;
