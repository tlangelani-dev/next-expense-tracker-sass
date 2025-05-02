import { Expense } from '@/types';

interface Props {
  expenses: Expense[];
}

const ExpensesList = async ({ expenses }: Props) => {
  return (
    <ul className="h-[300px] bg-white rounded mt-4 shadow-md">
      {expenses.map((expense) => (
        <li key={expense.id} className="flex items-center px-4 py-2 border-b">
          <p>{expense.description}</p>
          <p className="ml-auto font-semibold mr-[15px]">R{expense.amount}</p>
          <button className="text-[10px] h-[20px] w-[20px] bg-red-500 text-white rounded-full hover:bg-red-600">
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
