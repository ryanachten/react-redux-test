import filtersReducer from '../../reducers/filters';
import moment from 'moment';

const currentState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

test('Should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});


test('Should setup sort by to amount', () => {
  const _tempState = {
    ...currentState,
    sortBy: 'date'
  }
  const state = filtersReducer(_tempState, { type: 'SORT_BY', sortBy: 'amount' });
  expect(state.sortBy).toBe('amount');
});

test('Should setup sort by to date', () => {
  const _tempState = {
    ...currentState,
    sortBy: 'amount'
  }
  const state = filtersReducer(_tempState, { type: 'SORT_BY', sortBy: 'date' });
  expect(state.sortBy).toBe('date');
});


test('Should setup text filter', () => {
  const _tempState = {
    ...currentState,
    text: 'testttting'
  }
  const state = filtersReducer(_tempState, { type: 'SET_TEXT_FILTER', text: 'meow' });
  expect(state.text).toBe('meow');
});


test('Should setup start date', () => {
  const _tempState = {
    ...currentState,
    startDate: moment().add(1, 'years')
  }
  const date = moment(0);
  const state = filtersReducer(_tempState, { type: 'SET_START_DATE', startDate: date });
  expect(state.startDate).toBe(date);
});

test('Should setup end date', () => {
  const _tempState = {
    ...currentState,
    endDate: moment().add(1, 'years')
  }
  const date = moment(0);
  const state = filtersReducer(_tempState, { type: 'SET_END_DATE', endDate: date });
  expect(state.endDate).toBe(date);
});
