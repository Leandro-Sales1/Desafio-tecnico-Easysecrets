import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import data from '../db/sales.json';

interface ChartSeries {
  name: string;
  data: number[];
}

export type ChartType = 'line' | 'bar' | 'area';

interface ChartState {
  categories: string[];
  series: ChartSeries[];
  type: ChartType;
}

const initialState: ChartState = {
  categories: data[0]?.sales.map((sale) => sale.month),
  series: data.map((product) => ({
    name: product.product,
    data: product.sales.map((sale) => sale.quantity)
  })),
  type: 'line',
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setChartType(state, action: PayloadAction<ChartState['type']>) {
      state.type = action.payload;
    },
  },
});

export const { setChartType } = chartSlice.actions;
export default chartSlice.reducer;
