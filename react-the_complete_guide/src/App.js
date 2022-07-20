import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "New TV",
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	// This is triggered everytime a new expense is added
	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses]; //updating array based on older snapshot of array
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler}></NewExpense>
			<Expenses items={expenses}></Expenses>
		</div>
	);
	// Items is forwarding the expenses array data to the Expenses.js file, and is also renaming the array to be items in the expenses.js file
}

export default App;

// Need to have Capital Letters for the start of each custom component