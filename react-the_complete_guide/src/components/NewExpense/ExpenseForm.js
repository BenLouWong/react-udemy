import "../NewExpense/ExpenseForm.scss";
import React, { useState } from "react";

function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	const [enteredValue, setEnteredValue] = useState("");

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};
	const amountChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: +enteredValue,
			date: new Date(enteredDate),
		};

		// Here we are executing the saveExpenseDataHandler function wtihin NewExpense with expenseData as the data being passed into the function. We are able to do this because we have linked the function in the NewExpense component
		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredDate("");
		setEnteredValue("");
	};
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						onChange={titleChangeHandler}
						value={enteredTitle}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
						value={enteredValue}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
						value={enteredDate}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancelForm}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
