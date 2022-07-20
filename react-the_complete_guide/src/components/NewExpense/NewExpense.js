import React, { useState } from "react";
import "../NewExpense/NewExpense.scss";
import ExpenseForm from "./ExpenseForm";
import "../Expenses/ExpenseInitial.scss";
import ExpenseInitial from "../Expenses/ExpenseInitial";

function NewExpense(props) {
	const [initFormValue, setFormValue] = useState(0);

	// Here the enteredExpenseData parameter will be the expenseData parameters set in the ExpensForm component.
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setFormValue(0);
	};

	const cancelFormHandler = (value) => {
		setFormValue(0);
	};

	const initFormHandler = () => {
		setFormValue(1);
	};

	return (
		<div className="new-expense">
			{/* Add new expense button */}
			{initFormValue === 0 ? (
				<ExpenseInitial onInitFormClick={initFormHandler} />
			) : (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancelForm={cancelFormHandler}
				/>
			)}
		</div>
	);
}

export default NewExpense;

// We want the NewExpense component to store the data. However the data is within the ExpenseForm component. How do we get access to the data created in the ExpenseForm component?

// 1. Create a function that simply logs the expenseData for now
// 2. Point to said created function within the desired custom tag. In this case we point to teh saveExpenseDataHandler function within an onSaveExpenseData tag.
// 3. Within the ExpenseForm component, we now have access to any and all data from the saveExpenseDataHandler function as a props data keyword.
// 4. When we submit the form with new data entries, we want to log and render an ExpenseItem with the new data entry stored in the expenseData object in ExpenseForm. So we will pass the expenseData object back into the onSaveExpenseData tag.
// 5. We now have access to the expenseData object in the saveExpenseDataHandler function.

// Flow chart:
// Create function --> point to function within desired component tag --> return desired data into the function --> carry out original function using the data retrieved
