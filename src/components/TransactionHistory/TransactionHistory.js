import s from '../TransactionHistory/TransactionHistory.module.css';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import PropTypes, { object } from 'prop-types';

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(object),
};

export default TransactionHistory;
