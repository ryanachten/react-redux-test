import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});


test('Should render ExpenseForm with data', () => {
  const expense = expenses[0];
  const wrapper = shallow(<ExpenseForm expense={expense}/>);
  expect(wrapper).toMatchSnapshot();
});
