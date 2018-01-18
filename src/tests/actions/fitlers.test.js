import moment from 'moment';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters'

test('Should setup text filter action object with provided value', () => {
  const action = setTextFilter('testing');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'testing'
  });
});

test('Should setup text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('Should setup sort by date action object', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY',
    sortBy: 'date'
  });
});

test('Should setup sort by amount action object', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY',
    sortBy: 'amount'
  });
});

test('Should setup set start date action object with values', () => {
  const now = moment();
  const action = setStartDate(now);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: now
  });
});

test('Should setup set start date action object with default', () => {
  const action = setStartDate();
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: undefined
  });
});

test('Should setup set end date action object with values', () => {
  const now = moment();
  const action = setEndDate(now);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: now
  });
});

test('Should setup set end date action object with default', () => {
  const action = setEndDate();
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: undefined
  });
});
