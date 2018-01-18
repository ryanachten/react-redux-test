import moment from 'moment';

// Get visible expenses
export default (expenses,
  {
    text,
    sortBy,
    startDate,
    endDate
  }
) => {
  return expenses.filter( (expense) => {
    // Stores whether or not the expense aligns with the filter
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch; // if all are true, filter will return true for this expense
  }).sort( (a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    }else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  });
};
