import { useState } from 'react'
import './AddTransaction.css'

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text.trim() || !amount) {
      alert('Please enter transaction details')
      return
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: type === 'expense' ? -Math.abs(+amount) : +amount
    }

    addTransaction(newTransaction)
    setText('')
    setAmount('')
    setType('income')
  }

  return (
    <div className="add-transaction-container">
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            step="0.01"
          />
        </div>
        <div className="type-selector">
          <label className={`type-option ${type === 'income' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="type"
              value="income"
              checked={type === 'income'}
              onChange={(e) => setType(e.target.value)}
            />
            Income
          </label>
          <label className={`type-option ${type === 'expense' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="type"
              value="expense"
              checked={type === 'expense'}
              onChange={(e) => setType(e.target.value)}
            />
            Expense
          </label>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction