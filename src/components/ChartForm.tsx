import React from 'react';
import { useDispatch } from 'react-redux';
import { setChartOptions, setChartType, type ChartType, type StrokeType } from '../store/chartSlice';
import { useSelector } from 'react-redux';
import type { RootState } from '../main';
import deepClone from '../utils/deepClone';

const ChartForm = () => {
  const { options } = useSelector((state: RootState) => state.chart);
  const dispatch = useDispatch();

  const handleChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setChartType(e.target.value as ChartType));
  };

  const handleChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOptions = deepClone(options);
    newOptions.stroke!.curve = e.target.value as StrokeType;
    dispatch(setChartOptions(newOptions));
  };

  return (
    <section className='flex flex-col justify-start ml-4 mt-8 gap-4'>
      <div>
        <h3 className='text-lg'>Modifique seu gráfico abaixo: 🚀</h3>
      </div>
      <form id='ChartForm' className='flex flex-col mt-3 gap-6'>
        <div>
          <label htmlFor='TypeSelect'>Tipo de Gráfico:</label>
          <select id='TypeSelect' className='ml-2 px-0.5 w-18 h-7 border border-black rounded-lg' onChange={handleChangeType}>
            <option value="bar">Barra</option>
            <option value="line">Linha</option>
            <option value="area">Área</option>
          </select>
        </div>
        <div>
          <label htmlFor='StrokeSelect'>Traço do Gráfico:</label>
          <select id='StrokeSelect' className='ml-2 px-0.5 w-30 h-7 border border-black rounded-lg' onChange={handleChangeOptions}>
            <option value="smooth">Suave</option>
            <option value="straight">Reto</option>
            <option value="stepline">Passo-Linha</option>
            <option value="linestep">Linha-Passo</option>
            <option value="monotoneCubic">Cúbico</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default ChartForm;
