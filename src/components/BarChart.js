import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  // creating gradient colors and datasets
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    function getGradientColor(ctx, colorTop, colorBottom) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 450);
      gradient.addColorStop(0.7, colorTop);
      gradient.addColorStop(1, colorBottom);
      return gradient;
    }
    return {
      labels: ["One", "Two", "Three"],
      datasets: [
        // first dataset
        {
          label: "# of votes",
          data: [3, 6, 8],
          backgroundColor: [
            getGradientColor(
              ctx,
              "rgba(54, 162, 235, 0.7)",
              "rgba(242,254,255, 0.3)"
            ),
            getGradientColor(
              ctx,
              "rgba(52,140,78, 0.6)",
              "rgb(133,255,186, 0.3)"
            ),
            getGradientColor(
              ctx,
              "rgba(133, 92, 92, 0.6)",
              "rgb(255, 176, 176, 0.3)"
            ),
          ],
          borderWidth: 1,
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(52,140,78, 1)",
            "rgba(133, 92, 92, 1)",
          ],
        },
        // second dataset
        {
          label: "Quantity",
          data: [10, 5, 7],
          backgroundColor: ["#5c7785", "#5e856a", "#856076"],
        },
      ],
      //   options: {
      //     plugins: {
      //       maintainAspectRatio: false,
      //       scales: {
      //         yAxes: [
      //           {
      //             ticks: {
      //               beginAtZero: true,
      //             },
      //           },
      //         ],
      //       },
      //       legend: {
      //         labels: {
      //           fontColor: "red",
      //         },
      //       },
      //     },
      //   },
    };
  };

  return (
    <div>
      <h2>Bar Chart</h2>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 50,
            },
          },
        }}
        height={150}
        width={300}
      />
    </div>
  );
};

export default BarChart;
