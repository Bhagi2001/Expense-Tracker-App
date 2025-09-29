import './App.css'
import Header from './components/Header/Header'
import Balance from './components/Balance/Balance'
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses'
import TransactionList from './components/TransactionList/TransactionList'
import AddTransaction from './components/AddTransaction/AddTransaction'

function App() {
  return (
    <div className="container">
      <Header />
      <Balance transactions={[]} />
      <IncomeExpenses transactions={[]} />
      <TransactionList transactions={[]} deleteTransaction={() => {}} />
      <AddTransaction addTransaction={() => {}} />
    </div>
  )
} 

export default App