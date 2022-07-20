import React, { useState } from "react";
import AddUser from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (userName, userAge) => {
		setUsersList((prevUsers) => {
			return [
				...prevUsers,
				{ key: Math.random().toString(), name: userName, age: userAge },
			];
		});
	};

	return (
		<div>
			<AddUser onAddUser={addUserHandler}></AddUser>
			<UsersList users={usersList}></UsersList>
		</div>
	);
}

export default App;
