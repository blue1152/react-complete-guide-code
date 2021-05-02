import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  }
  const [amount, setAmount] = useState('');
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  }
  const [date, setDate] = useState('');
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date)
    }
    //console.log(expenseData)
    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  }
  return <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' value={title} onChange={titleChangeHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' value={amount} onChange={amountChangeHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' value={date} onChange={dateChangeHandler} />
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </div>
  </form> 
}

export default ExpenseForm