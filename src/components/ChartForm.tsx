import React from 'react';
import { useDispatch } from 'react-redux';
import { setChartType, type ChartType } from '../store/chartSlice';

const ChartForm = () => {
  const dispatch = useDispatch();

  const handleChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setChartType(e.target.value as ChartType));
  };

  return (
    <section className='flex flex-col justify-start ml-4 mt-4 gap-4'>
      <div>
        <h3 className='text-lg'>Modifique seu gráfico abaixo: 🚀</h3>
      </div>
      <div>
        <form id='ChartForm' >
          <label htmlFor='FormSelect'>Tipo de Gráfico:</label>
          <select id='FormSelect' className='ml-2 pl-1 w-18 h-7 border border-black rounded-lg' onChange={handleChangeType}>
            <option value="bar">Barra</option>
            <option value="line">Linha</option>
            <option value="area">Área</option>
          </select>
        </form>
      </div>
    </section>

  );
};

export default ChartForm;
