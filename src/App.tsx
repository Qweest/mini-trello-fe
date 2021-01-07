import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navigation from './navigation';
import store from './store';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
