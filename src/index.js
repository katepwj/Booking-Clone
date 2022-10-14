import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import { BrowserRouter } from "react-router-dom";

import allReducers from './redux/reducers';
import { createStore } from 'redux';
import { Provider } from "react-redux"

const myStore = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>,
);
