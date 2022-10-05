import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({addNewExpense,negateEditing}) => {
  const defaultUserInputValue = {
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  };
  const [userInput, setUserInput] = useState(defaultUserInputValue);
  const inputChangeHandler = (event) =>
    setUserInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewExpense(userInput);
    setUserInput(defaultUserInputValue);
    negateEditing();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={inputChangeHandler}
            name="enteredTitle"
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.1"
            name="enteredAmount"
            onChange={inputChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-32"
            name="enteredDate"
            onChange={inputChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={negateEditing}>Cancel</button>
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
