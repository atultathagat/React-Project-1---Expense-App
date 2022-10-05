import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [filterYear, setSelectedFilterYear] = useState("2020");

  const handleDateFilterChange = (year) => setSelectedFilterYear(year);

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        handleDateFilterChange={handleDateFilterChange}
        selectedYear={filterYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>
     <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
