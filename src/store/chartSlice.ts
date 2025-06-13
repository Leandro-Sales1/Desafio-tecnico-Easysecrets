import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import data from '../db/sales.json';

interface ChartSeries {
  name: string;
  data: number[];
}

export type ChartType = 'line' | 'bar' | 'area';
export type StrokeType = "smooth" | "straight" | "stepline" | "linestep" | "monotoneCubic";

interface ChartState {
  series: ChartSeries[];
  type: ChartType;
  options: ApexCharts.ApexOptions
}

const categories = data[0]?.sales.map((sale) => sale.month)

const initialState: ChartState = {
  series: data.map((product) => ({
    name: product.product,
    data: product.sales.map((sale) => sale.quantity)
  })),
  type: 'bar',
  options: {
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
  }
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setChartType(state, action: PayloadAction<ChartState['type']>) {
      state.type = action.payload;
    },
    setChartOptions(state, action: PayloadAction<ChartState['options']>) {
      state.options = action.payload;
    },
  },
});

export const { setChartType, setChartOptions } = chartSlice.actions;
export default chartSlice.reducer;
