import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import './Expense.css';

const Expense = props => {
  const [filteredYear, setfilteredYear] = useState('2021');

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

        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
