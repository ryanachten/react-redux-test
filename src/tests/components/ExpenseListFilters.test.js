import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('Should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});


test('Should handle text change', () => {
  const value = 'testing change';
  wrapper.find('input').simulate('change', {
    target: {value}
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});


test('Should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  const value = 'date';
  wrapper.find('select').simulate('change', {
    target: {value}
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: {value}
  });
  expect(sortByAmount).toHaveBeenCalled();
});


test('Should handle date changes', () => {
  const startDate = 1000;
  const endDate = 2000;
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate, endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus change', () => {
  const focused = 'startDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
  expect(wrapper.state('calendarFocused')).toBe(focused);
});
