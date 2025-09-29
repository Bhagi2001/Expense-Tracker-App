import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Balance from './components/Balance/Balance'
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses'
import TransactionList from './components/TransactionList/TransactionList'
import AddTransaction from './components/AddTransaction/AddTransaction'
import './App.css'

function App() {
  // Get transactions from localStorage or set empty array
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions')
    return savedTransactions ? JSON.parse(savedTransactions) : []
  })

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  // Add transaction
  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions])
  }

  // Delete transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <div className="app-wrapper">
        <div className="left-section">
          <Balance transactions={transactions} />
          <IncomeExpenses transactions={transactions} />
          <TransactionList 
            transactions={transactions} 
            deleteTransaction={deleteTransaction} 
          />
        </div>
        <div className="right-section">
          <AddTransaction addTransaction={addTransaction} />
        </div>
      </div>
    </div>
  )
}

export default App