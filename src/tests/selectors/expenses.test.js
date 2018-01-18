import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
  id: 1,
  description: 'apple',
  note: '',
  amount: 100,
  createdAt: moment(0).add(1, 'days').valueOf()
},
{
  id: 2,
  description: 'orange',
  note: '',
  amount: 2000,
  createdAt: moment(0).add(3, 'days').valueOf()
},
{
  id: 3,
  description: 'melon',
  note: '',
  amount: 300,
  createdAt: moment(0).add(7, 'days').valueOf()
}];



test('Should filter by text value', () => {
  const filters = {
    text: 'o',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});


test('Should filter by start date value', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0).add(5, 'days'),
    endDate: undefined,
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2]]);
});

test('Should filter by end date value', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days'),
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0]]);
});


test('Should sort by amount value', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});

test('Should sort by date value', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});
