interface Props {
  type: 'income' | 'expense' | 'balance';
  amount: number;
}

const SummaryCard = ({ type, amount }: Props) => {
  let bg = '';
  let text = '';
  
  if (type === 'income') {
    bg = 'bg-green-50 dark:bg-green-900/20 hover:bg-green-900/80';
    text = 'text-green-700 dark:text-green-400';
  } else if (type === 'expense') {
    bg = 'bg-red-50 dark:bg-red-900/20 hover:bg-red-900/80';
    text = 'text-red-700 dark:text-red-400';
  } else if (type === 'balance') {
    bg = 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-900/80';
    text = 'text-blue-700 dark:text-blue-400';
  }
  
  return (
  <div className={`rounded-xl p-4 shadow-sm w-full transition duration-100 ${bg}`}>
    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
      {type}
    </p>
    <h2 className={`mt-1 text-lg font-bold ${text}`}>
      {amount.toLocaleString()} ฿
    </h2>
  </div>
  );
};

export default SummaryCard;
