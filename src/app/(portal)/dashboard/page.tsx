import ExpensesForm from '@/components/expenses-form';
import ExpensesList from '@/components/expenses-list';

const DashboardPage = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold text-white text-center mt-2">Dashboard</h1>
      <div className="w-full max-w-[600px] mx-auto">
        <ExpensesList />
        <ExpensesForm />
      </div>
    </main>
  );
};

export default DashboardPage;
