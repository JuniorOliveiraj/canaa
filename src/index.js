import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { store, persistor } from './redux/store';
import './_apis_';
//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { AuthGoogle } from './autenticação';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';
import { SettingsProvider } from './contexts/SettingsContext';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LoadingScreen from './Portifolio/Carregamnetopage';
import './index.css'
// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <ReduxProvider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <CollapseDrawerProvider>
          <BrowserRouter>
            <SettingsProvider>
              <AuthGoogle>
                <App />
              </AuthGoogle>
            </SettingsProvider>
          </BrowserRouter>
        </CollapseDrawerProvider>
      </PersistGate>
    </ReduxProvider>
  </HelmetProvider>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();