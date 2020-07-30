import React, { useContext } from "react";
import toDay from "../toDay";
import Chart from "react-apexcharts";

import { GlobalContext } from "../context/GlobalState";

export const SleepAnalysis = () => {
  const { data } = useContext(GlobalContext);
  let week = data.slice(0, 7);
  week = week.map((element) => {
    let startDate = new Date(element.starts);
    let endDate = new Date(element.ends);
    const day = toDay(endDate.getDay());
    startDate.setMonth(0);
    endDate.setMonth(0);
    startDate.setDate(1);
    endDate.setDate(1);
    console.log(startDate.valueOf());
    console.log(endDate.valueOf());
    return {
      x: day,
      y: [startDate.getTime(), endDate.getTime()],
    };
  });
  week.reverse();
  console.log(week);

  return (
    <>
      <h3>Sleep Analysis</h3>
      <div className="chart-container">
        {week.length > 0 ? (
          <Chart
            type="rangeBar"
            series={[
              {
                data: week,
              },
            ]}
            width="350px"
            height="100%"
            options={{
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              xaxis: {
                type: "datetime",
                labels: {
                  datetimeUTC: false,
                  format: "h",
                },
              },
            }}
          />
        ) : (
          "No recorded data"
        )}
      </div>
    </>
  );
};
