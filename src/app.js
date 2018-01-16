import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouters.js';

// Redux imports
import configureStore from './store/configureStore.js';
import {addExpense, removeExpense, editExpense} from './actions/expenses.js';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js'

import 'normalize.css/normalize.css';
import './styles/style.scss';


const store = configureStore();

store.subscribe( () => {
  const state = store.getState();
  const visisbleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visisbleExpenses);
} );


const expense1 = store.dispatch(addExpense({
  description: 'Water bill',
  note: 'Water bill',
  amount: 200,
  createdAt: 1000
}));

const expense2 = store.dispatch(addExpense({
  description: 'Gas bill',
  note: 'Gas bill',
  amount: 500,
  createdAt: 500
}));

const expense3 = store.dispatch(addExpense({
  description: 'Rent',
  note: 'Gas bill',
  amount: 1500,
  createdAt: -1000
}));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render( jsx, document.getElementById('app') );
