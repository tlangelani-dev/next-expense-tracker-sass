import ExpensesForm from '@/components/expenses-form';
import ExpensesList from '@/components/expenses-list';
import { prisma } from '@/lib/db';
import { Expense } from '@/types';

const DashboardPage = async () => {
  const expenses: Expense[] = await prisma.expense.findMany();

  return (
    <main>
      <h1 className="text-3xl font-bold text-white text-center mt-2">Dashboard</h1>
      <div className="w-full max-w-[600px] mx-auto">
        <ExpensesList expenses={expenses} />
        <ExpensesForm />
      </div>
    </main>
  );
};

export default DashboardPage;
