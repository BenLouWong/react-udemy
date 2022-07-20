import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const AddUser = function (props) {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState();

	const errorHandler = () => {
		setError(null);
	};

	const addUserHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;

		if (
			enteredName.trim().length === 0 ||
			parseInt(enteredUserAge, 0) < 0 ||
			enteredUserAge.trim().length === 0
		) {
			setError({
				title: "Invalid Input",
				message: "Please enter a valid input",
			});
			return;
		}

		props.onAddUser(enteredName, enteredUserAge);
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	};

	return (
		<div>
			{error && (
				<Modal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				></Modal>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" ref={nameInputRef} />
					<label htmlFor="age">Age</label>
					<input id="age" type="number" ref={ageInputRef} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
