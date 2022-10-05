import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addNewExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const negateEditing = () => setIsEditing(!isEditing);

  return (
    <div className="new-expense">
      {(!isEditing && (
        <button onClick={negateEditing}>Add a new expense</button>
      )) || (
        <ExpenseForm
          addNewExpense={addNewExpense}
          negateEditing={negateEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
