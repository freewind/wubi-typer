"use strict";
import GridContainer from "./containers/grid-container.jsx";
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <GridContainer rows={25} columns={25}/>
  </Provider>,
  document.getElementById("content")
);

