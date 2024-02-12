import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'styles/_globalmixins.module.scss';
import 'styles/_reset.scss';
import "styles/index.scss";
import 'styles/variables.scss';
import App from './App.tsx';
import store, { persistor } from './redux/store.ts';
import Spinner from './shared/components/Spinner/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Spinner />}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </Suspense>
);