import TransactionItem from './TransactionItem';
import type { Transaction } from '../mockData/transactionData';

interface Props {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: Props) => {

  return (
  <div className="space-y-3 w-full">
    {transactions.map((t) => (
      <TransactionItem key={t.id} transaction={t} />
      ))}
  </div>
  );
};

export default TransactionList;