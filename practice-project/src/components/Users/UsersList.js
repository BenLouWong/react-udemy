import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = function (props) {
	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map((users) => (
					<li key={users.key}>
						{users.name} {users.age}
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UsersList;
