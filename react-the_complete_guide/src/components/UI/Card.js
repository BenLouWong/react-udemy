import "../UI/Card.scss";
// import "./Card.css";

function Card(props) {
	// children is a special property of React components which contains any child elements defined within the component, e.g. the divs inside

	const classes = "card " + props.className; //necessary if we want to add classes onto custom defined tags. 'card ' is always applied
	return <div className={classes}>{props.children}</div>;
}

export default Card;
