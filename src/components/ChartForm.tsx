import React from 'react';
import { useDispatch } from 'react-redux';
import { setChartType, type ChartType } from '../store/chartSlice';

const ChartForm = () => {
  const dispatch = useDispatch();

  const handleChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setChartType(e.target.value as ChartType));
  };

  return (
    <form id='ChartForm' >
      <label htmlFor='FormSelect'>Tipo de Gráfico:</label>
      <select id='FormSelect' onChange={handleChangeType}>
        <option value="line">Linha</option>
        <option value="bar">Barra</option>
        <option value="area">Área</option>
      </select>
    </form>
  );
};

export default ChartForm;
