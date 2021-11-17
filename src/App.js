import React, { useState } from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 58.21,
    date: new Date(2020, 7, 14),
  },

  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 632.57,
    date: new Date(2021, 6, 28),
  },

  {
    id: 'e3',
    title: 'Smart TV',
    amount: 899.11,
    date: new Date(2020, 2, 12),
  },

  {
    id: 'e4',
    title: 'Wooden Desk',
    amount: 540,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
