import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function SentimentGraph({ props }) {
  //create a line chart of the last 8 sentiment scores
  //using rechart
  //https://recharts.org/en-US/api/LineChart

  const sampleData = [
    {
      name: "Score 1",
      score: props[0]
    },
    {
      name: "Score 2",
      score: props[1]
    },
    {
      name: "Score 3",
      score: props[2]
    },
    {
      name: "Score 4",
      score: props[3]
    },
    {
      name: "Score 5",
      score: props[4]
    },
    {
      name: "Score 6",
      score: props[5]
    },
    {
      name: "Score 7",
      score: props[6]
    },
    {
      name: "Score 8",
      score: props[7]
    }
  ];

  return (
    // <ResponsiveContainer>
    <LineChart
      width={730}
      height={250}
      data={sampleData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="score" stroke="#8884d8" />
    </LineChart>
    // </ResponsiveContainer>
  );
}
