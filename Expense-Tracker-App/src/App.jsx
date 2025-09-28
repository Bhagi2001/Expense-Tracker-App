import './App.css'
import Header from './components/Header/Header'
import Balance from './components/Balance/Balance'
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses'

function App() {
  return (
    <div className="container">
      <Header />
      <Balance transactions={[]} />
      <IncomeExpenses transactions={[]} />
    </div>
  )
} 

export default App