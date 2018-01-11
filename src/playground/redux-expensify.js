import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'


const addExpense = (
  { description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});


const expensesReducerDefaultState = [];
const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
  switch (action.type) {

    case 'ADD_EXPENSE':
      return [...state, action.expense];

    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);

    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe( () => {
  console.log(store.getState());
} );


const expense1 = store.dispatch(addExpense({
  description: 'Jan Rent',
  note: 'Final payment to this address',
  amount: 54500,
  createdAt: 0
}));

const expense2 = store.dispatch(addExpense({
  description: 'Jan Rent',
  note: 'Final payment to this address',
  amount: 54500,
  createdAt: 0
}));

store.dispatch(removeExpense({
  id: expense2.expense.id
}));

const demoState = {
  expenses: [{
    id: 'sasdasdasdas',
    description: 'Jan Rent',
    note: 'Final payment to this address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
