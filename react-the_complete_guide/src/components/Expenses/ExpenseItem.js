// import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.scss";

// Props are the proprties that we have set on the app.js file for the expenseItem custom tags
function ExpenseItem(props) {
	// useState has to be called inside the component functions - this returns a function that we can call to assign a variable
	// useState returns array where the first value is itself and the second is the updating function
	// https://reactjs.org/docs/hooks-state.html
	// const [title, setTitle] = useState(props.title);

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">${props.amount}</div>
				</div>
			</Card>
		</li>
	);
}

export default ExpenseItem;
