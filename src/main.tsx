import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './store/chartSlice.ts';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
