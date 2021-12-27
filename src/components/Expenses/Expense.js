import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expense.css';

const Expense = props => {
  const [filteredYear, setfilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setfilteredYear(selectedYear);
    // console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    item => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
