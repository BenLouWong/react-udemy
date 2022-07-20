import React, { useState } from "react";
import ExpensesFilter from "../Filter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.scss";
import Card from "../UI/Card";

function Expenses(prop) {
	const [filterOption, setFilterOption] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilterOption(selectedYear);
	};

	const filterExpenses = prop.items.filter(function (expense) {
		return expense.date.getFullYear().toString() === filterOption;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					filterSelected={filterOption}
					onChangeFilter={filterChangeHandler}
				></ExpensesFilter>
				<ExpensesChart expenses={filterExpenses}></ExpensesChart>
				<ExpensesList items={filterExpenses}></ExpensesList>
			</Card>
		</div>
	);
}
// Whenever you want to use props, if the file is not the root App.js file, then you always need ot extend the file using prop.xxx

export default Expenses;
