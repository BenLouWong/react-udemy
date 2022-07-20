import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	const cartCtx = useContext(CartContext);
	console.log(cartCtx);
	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		console.log(item);
		// This amount is coming from MealItem.js
		return curNumber + item.amount;
	}, 0);

	const { items } = cartCtx;

	const btnClasses = `${classes.button} ${
		btnIsHighlighted ? classes.bump : ""
	}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnIsHighlighted(true);

		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onCartClick}>
			<span className={classes.icon}>
				<CartIcon></CartIcon>
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
}
