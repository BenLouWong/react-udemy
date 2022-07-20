import React from "react";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
	const [amountIsValid, setAmountIsValid] = useState(true);

	// This is created with a useRef() hook so that we can refer to it in the below Input form
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNum = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNum < 1 ||
			enteredAmountNum > 5
		) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmountNum);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount",
					type: "number",
					min: "0",
					max: "5",
					step: "1",
					defaultValue: "0",
				}}
			></Input>
			<button>+Add</button>
			{!amountIsValid && <p>Please enter a valid amount</p>}
		</form>
	);
}
