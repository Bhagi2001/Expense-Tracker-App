import './App.css'
import Header from './components/Header/Header'
import Balance from './components/Balance/Balance'

function App() {
  return (
    <div className="container">
      <Header />
      <Balance transactions={[]} />
    </div>
  )
}

export default App