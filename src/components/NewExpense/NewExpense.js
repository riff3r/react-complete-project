import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
// import App from '../../App';

const NewExpense = props => {
  const [expenseStatus, setExpenseStatus] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    stopEditingHandler();
  };

  const startEditingHandler = () => setExpenseStatus(true);
  const stopEditingHandler = () => setExpenseStatus(false);

  return (
    <div className="new-expense">
      {!expenseStatus && (
        <button onClick={startEditingHandler}>Add Expense</button>
      )}

      {expenseStatus && (
        <ExpenseForm
          onCancelAddExpense={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
