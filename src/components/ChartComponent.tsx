import { useSelector } from "react-redux";
import Chart from 'react-apexcharts';
import type { RootState } from "../main";
import deepClone from "../utils/deepClone";

const ChartComponent = () => {
  const { options, series, type } = useSelector((state: RootState) => state.chart);
  const mutableSeries = deepClone(series);
  const mutableOptions = deepClone(options);


  return (
    <section className="mt-8 md:mt-12">
      <Chart key={type} options={mutableOptions} type={type} series={mutableSeries} height={400} />
    </section>
  )
}

export default ChartComponent;