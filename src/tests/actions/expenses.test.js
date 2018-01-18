import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action  = removeExpense( {id: '123abc' } );
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Should setup edit expense action object', () => {
  const action = editExpense('123abc', {
    description: 'testing',
    amount: 20000
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'testing',
      amount: 20000
    }
  });
});

test('Should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: '109599',
    createdAt: 1000,
    note: 'rentingggggg'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
});


test('Should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});
