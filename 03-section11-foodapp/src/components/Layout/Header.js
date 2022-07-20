import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton
					onCartClick={props.onShowCart}
				></HeaderCartButton>
			</header>
			<div className={classes["main-image"]}>
				<img src={mealsImage} alt="Table of food" />
			</div>
		</Fragment>
	);
}
