import { Bar } from "react-chartjs-2";
import React from "react";

export const Chart = ({ chartData }) => {
  return (
    <React.Fragment>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Cryptocurrency prices"
            },
            legend: {
              display: true,
              position: "bottom"
           }
          }
        }}
      />
    </React.Fragment>
  );
};