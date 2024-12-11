import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Importamos el Provider
import App from './App';
import './index.css';
import { store } from './redux/store'; // Importamos el store de Redux
import reportWebVitals from './reportWebVitals';

// Usamos ReactDOM.createRoot para React 18
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Envolvemos la aplicación en el Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

// Medir rendimiento
reportWebVitals();
