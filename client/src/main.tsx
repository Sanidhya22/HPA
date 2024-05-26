import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/app';
import { PersistLogin } from './features/PersistLogin';
import { ThemeProvider } from '@material-tailwind/react';
import { AppProvider } from './shared/AppReducer/app-reducer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <PersistLogin>
          <AppProvider>
            <App />
          </AppProvider>
        </PersistLogin>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
