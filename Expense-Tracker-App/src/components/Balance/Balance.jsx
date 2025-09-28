import './Balance.css'

const Balance = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className="balance-container">
      <h2>Your Balance</h2>
      <h3 className={`balance ${total >= 0 ? 'positive' : 'negative'}`}>
        ${total}
      </h3>
    </div>
  )
}

export default Balance