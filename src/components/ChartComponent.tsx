import { useSelector } from "react-redux";
import Chart from 'react-apexcharts';
import type { RootState } from "../main";
import deepClone from "../utils/deepClone";

const ChartComponent = () => {
  const { categories, series, type } = useSelector((state: RootState) => state.chart);

  const options: ApexCharts.ApexOptions = {
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories,
    },
    dataLabels: {
      enabled: true,
    },
    title: {
      text: 'Vendas por Produto (Mensal)',
      align: 'center',
    }
  };

  const mutableSeries = deepClone(series);

  return <Chart key={type} options={options} type={type} series={mutableSeries} height={400} />;

}

export default ChartComponent;