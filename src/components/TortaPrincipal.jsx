import { Doughnut } from 'react-chartjs-2';
import React from 'react';

 export default function TortaPrincipal() {
  const graficoTorta = (
    <Doughnut
      data={{
        labels: ['Disponible', 'Gastado', 'Resto'],
        datasets: [
          {
            label: 'Presupuesto',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [22, 23, 25],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Estado actual del presupuesto` },
      }}
    />
  );

  return <div>{graficoTorta}</div>;
}

