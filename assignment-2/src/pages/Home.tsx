import SummaryCard from "../components/SummaryCard"
import TransactionList from "../components/TransactionList";
import { transaction } from "../mockData/transactionData";
import { calculate } from "../utils/calculate"

const Home = () => {
  const sum = calculate(transaction);

  return (
  <div className="mx-auto w-full max-w-screen-xl p-4 space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <SummaryCard type="income" amount={sum.income} />
      <SummaryCard type="expense" amount={sum.expense} />
      <SummaryCard type="balance" amount={sum.balance} />
    </div>
    <div className="w-full">
      <h2 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
        Transaction List
      </h2>
      <TransactionList transactions={transaction}/>
    </div>
  </div>
  )
}

export default Home
