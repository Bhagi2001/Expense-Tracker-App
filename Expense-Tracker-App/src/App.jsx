import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Balance from './components/Balance/Balance'
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses'
import TransactionList from './components/TransactionList/TransactionList'
import AddTransaction from './components/AddTransaction/AddTransaction'
import { sampleTransactions } from './data/sampleData'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions')
    return savedTransactions ? JSON.parse(savedTransactions) : []
  })

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions])
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  }

  const loadSampleData = () => {
    setTransactions(sampleTransactions)
  }

  const clearAllTransactions = () => {
    if (window.confirm('Are you sure you want to clear all transactions?')) {
      setTransactions([])
    }
  }

  return (
    <div className="container">
      <Header />
      {transactions.length === 0 && (
        <div className="sample-data-btn-container">
          <button onClick={loadSampleData} className="sample-data-btn">
            Load Sample Data
          </button>
        </div>
      )}
      <div className="app-wrapper">
        <div className="left-section">
          <Balance transactions={transactions} />
          <IncomeExpenses transactions={transactions} />
          <TransactionList 
            transactions={transactions} 
            deleteTransaction={deleteTransaction} 
          />
          {transactions.length > 0 && (
            <button onClick={clearAllTransactions} className="clear-btn">
              Clear All Transactions
            </button>
          )}
        </div>
        <div className="right-section">
          <AddTransaction addTransaction={addTransaction} />
        </div>
      </div>
    </div>
  )
}

export default App