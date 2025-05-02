const ExpensesForm = () => {
  return (
    <form className="w-full mt-8 rounded overflow-hidden bg-white">
      <input type="text" name="description" placeholder="Description" className="w-full px-3 py-2 outline-none" />
      <input type="number" name="amount" placeholder="Amount" className="w-full px-3 py-2 outline-none" />
      <button className="w-full bg-violet-500 text-white px-2 py-2 font-bold">Add expense</button>
    </form>
  );
};

export default ExpensesForm;
