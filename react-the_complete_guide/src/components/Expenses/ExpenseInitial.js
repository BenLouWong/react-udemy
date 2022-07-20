function ExpenseInitial(props) {
	return (
		<button
			className="init-expense__actions"
			onClick={props.onInitFormClick}
		>
			Add New Expense
		</button>
	);
}

export default ExpenseInitial;
