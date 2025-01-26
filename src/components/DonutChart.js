import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card, CardContent, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registrar los módulos de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({dataInfluencer}) => {
  // Datos para la gráfica
  const data = {
    labels: ["Verified", "Questionable", "Debunked"],
    datasets: [
      {
        label: "Nivel de Confianza",
        data: [dataInfluencer.verified, dataInfluencer.questionable, dataInfluencer.debunked], // Porcentajes
        backgroundColor: ["#4caf50", "#ff9800", "#f44336"], // Colores atractivos
        hoverBackgroundColor: ["#66bb6a", "#ffb74d", "#e57373"], // Colores al pasar el mouse
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: { size: 14 },
        },
      },
    },
  };

  return (
    <Card sx={{ maxWidth: 300, maxHeight:379,margin: "auto", mt: 4, p: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" align="center" gutterBottom>
          Nivel de Confianza <br/>General del Influencer
        </Typography>
        <Doughnut data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default DonutChart;
