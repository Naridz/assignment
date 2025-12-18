import type { Transaction } from "../mockData/transactionData";

interface Props {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: Props) => {
    const isIncome = transaction.type === 'income';
    
    return (
    <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm w-full dark:bg-gray-800
    transition duration-200 hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-700">
        <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                {transaction.description}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(transaction.date).toLocaleDateString()}
            </span>
        </div>
        <div
        className={`text-sm font-semibold ${isIncome ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {isIncome ? '+' : '-'}
            {transaction.amount.toLocaleString()} ฿
        </div>
    </div>
  );
};

export default TransactionItem;
