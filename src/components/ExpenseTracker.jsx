import React, { useState } from 'react';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const addExpense = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { name, amount, date }]);
    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <form onSubmit={addExpense}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Expense Name"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name}: ${expense.amount} on {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;