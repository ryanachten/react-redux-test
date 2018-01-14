import React from 'react';
import ReactDOM from 'react-dom';

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


store.dispatch( setTextFilter("water") );

const expense1 = store.dispatch(addExpense({
  description: 'Water bill',
  note: 'Water bill',
  amount: 54500,
  createdAt: 1000
}));

const expense2 = store.dispatch(addExpense({
  description: 'Gas bill',
  note: 'Gas bill',
  amount: 500,
  createdAt: -1000
}));



ReactDOM.render( <AppRouter />, document.getElementById('app') );
