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
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

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
