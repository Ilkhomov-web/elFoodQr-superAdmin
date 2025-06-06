import React from "react";
import { Line, Doughnut, Pie } from "react-chartjs-2";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js komponentlarini ro‘yxatdan o‘tkazish
ChartJS.register(
  ArcElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

function Chart() {
  // Line Chart ma'lumotlari
  const lineData = {
    labels: ["Yan", "Fev", "Mar", "Apr", "May", "Iyun"],
    datasets: [
      {
        label: "Sales",
        data: [0, 1000, 3200, 2000, 4200, 6000],
        borderColor: "#2196f3",
        backgroundColor: "rgba(33, 150, 243, 0.3)",
        tension: 0.4,
        fill: true,
        pointBorderColor: "#fff",
        pointBackgroundColor: "#2196f3",
      },
    ],
  };

  const commonOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  // Doughnut va Pie uchun ma'lumotlar
  const circleData = {
    labels: ["Electronics", "Clothing", "Books"],
    datasets: [
      {
        label: "Categories",
        data: [3000, 1500, 1000],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 4,
        flexWrap: "wrap",
        mt: 4,
        background: "white",
        borderRadius: "12px",
        boxShadow: "5px 0px 10px 1px gray",
        padding: "20px",
        marginBottom: "30px",
      }}
    >
      {/* Doughnut & Pie charts */}
      <Box
        sx={{
          width: "35%",
          height: "350px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Doughnut data={circleData} options={commonOptions} />
      </Box>

      {/* Line chart */}
      <Box sx={{ width: "60%" }}>
        <Line data={lineData} options={commonOptions} />
      </Box>
    </Box>
  );
}

export default Chart;
