import './TransactionList.css'

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="transaction-list-container">
      <h3>History</h3>
      <ul className="list">
        {transactions.length === 0 ? (
          <p className="no-transactions">No transactions yet</p>
        ) : (
          transactions.map(transaction => (
            <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
              <span>{transaction.text}</span>
              <span className="amount">
                {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
              </span>
              <button 
                className="delete-btn" 
                onClick={() => deleteTransaction(transaction.id)}
              >
                ×
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default TransactionList