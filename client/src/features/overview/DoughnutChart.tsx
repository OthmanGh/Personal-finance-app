import { Doughnut } from 'react-chartjs-2';
import { Chart, Tooltip, Legend, ArcElement } from 'chart.js';

Chart.register(Tooltip, Legend, ArcElement);

const DoughnutChart = () => {
  const data = {
    labels: ['Blue', 'Grey'],
    datasets: [
      {
        label: 'Shop 1',
        data: [3, 6],
        backgroundColor: ['#61dbfb', 'grey'],
        borderColor: ['#61dbfb', 'grey'],
      },
    ],
  };

  const options = {
    cutout: '75%',
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const doughnutLabel = {
    id: 'doughntLabel',
    afterDatasetsDraw(chart, args, plugins) {
      const { ctx, data } = chart;
      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = 'bold 90px sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Budget', centerX, centerY);
    },
  };

  return (
    <div className="w-full h-full">
      <Doughnut data={data} options={options} plugins={[doughnutLabel]} />
    </div>
  );
};

export default DoughnutChart;
