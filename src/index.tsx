import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import reportWebVitals from './reportWebVitals';
import TaskReducer from "./redux/reducers"
import thunk from "redux-thunk"

import {
  TaskState,
  TaskActionTypes,
  DispatchType
} from './redux/types'

const store: Store<TaskState,TaskActionTypes> & {
  dispatch: DispatchType
} = createStore(TaskReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
