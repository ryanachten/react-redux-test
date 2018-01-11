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

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByDate = () => ({
  type: 'SORT_BY',
  sortBy: 'date'
});

const sortByAmount = () => ({
  type: 'SORT_BY',
  sortBy: 'amount'
});

const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate: startDate
});

const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate: endDate
});


const expensesReducerDefaultState = [];
const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
  switch (action.type) {

    case 'ADD_EXPENSE':
      return [...state, action.expense];

    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map( (expense) => {
        if (expense.id === action.id) {
          expense = {
            ...expense,
            ...action.updates
          };
          return expense;
        }
        else{
          return expense;
        }
      } );

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

    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };

    case 'SORT_BY':
    return{
      ...state,
      sortBy: action.sortBy
    }

    case 'SET_START_DATE':
    return{
      ...state,
      startDate: action.startDate
    }

    case 'SET_END_DATE':
    return{
      ...state,
      endDate: action.endDate
    }

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


// store.dispatch( setTextFilter("rent") );
// store.dispatch( setTextFilter("meow") );
// store.dispatch( sortByAmount() );
// store.dispatch( sortByDate() );
store.dispatch( setStartDate(125) );
store.dispatch( setEndDate(245) );


// const expense1 = store.dispatch(addExpense({
//   description: 'Jan Rent',
//   note: 'Final payment to this address',
//   amount: 54500,
//   createdAt: 0
// }));
//
// const expense2 = store.dispatch(addExpense({
//   description: 'Jan Rent',
//   note: 'Final payment to this address',
//   amount: 54500,
//   createdAt: 0
// }));

// store.dispatch(removeExpense({
//   id: expense1.expense.id
// }));
//
// store.dispatch( editExpense(expense2.expense.id, { amount: 33300 } ));




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
