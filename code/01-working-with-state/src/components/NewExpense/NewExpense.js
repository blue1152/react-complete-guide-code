import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = () => {
  const saveExpenseDataHandler = (data) => {
    console.log(data)
  }
  return <div className='new-expense'><ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /></div>
}

export default NewExpense