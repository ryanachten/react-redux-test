import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should result default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});


test('Should remove expense by id', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: 1
  });
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('Should not remove expense if id not found', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: -1
  });
  expect(state).toEqual(expenses);
});


test('Should add expense', () => {
  const state = expensesReducer(expenses,
    { type: 'ADD_EXPENSE',
      expense: {
        ...expenses[0]
      }
    });
    expect(state).toEqual([...expenses, expenses[0]]);
});


test('Should edit an expense by id', () => {
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: 1,
    updates: {
      text: 'banana'
    }
  });
  expect(state[0].text).toBe('banana');
});

test('Should not edit an expense by invalid id', () => {
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      text: 'banana'
    }
  });
  expect(state).toEqual(expenses);
});
