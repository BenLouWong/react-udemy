import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

const ACTIONS = {
	ADD_ITEM: "add-item",
	REMOVE_ITEM: "remove-item",
};

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_ITEM:
			const updatedTotal =
				state.totalAmount + action.item.price * action.item.amount;

			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.item.id
			);
			const existingCartItem = state.items[existingCartItemIndex];
			let updatedItems;

			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount + action.item.amount,
				};
				updatedItems = [...state.items];
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				updatedItems = state.items.concat(action.item);
			}

			// const updatedItems = state.items.concat(action.item);
			return { items: updatedItems, totalAmount: updatedTotal };

		case ACTIONS.REMOVE_ITEM:
			// Recall that state is called on the cart-context file and that we have access to this file
			// Find index of existing item
			const existingCartItemIndexRemove = state.items.findIndex(
				(item) => item.id === action.id
			);
			// FInd item based on index found previously
			const existingItem = state.items[existingCartItemIndexRemove];
			const updatedTotalAmount = state.totalAmount - existingItem.price;
			let updatedItemsRemove;
			// Here we are saying that if the remaining amount for the item is equal to one, we remove the item. This is done by checking whether the item with existing.amount === 1 has an id that is equal to the action id
			if (existingItem.amount === 1) {
				updatedItemsRemove = state.items.filter(
					(item) => item.id !== action.id
				);
			} else {
				const updatedItemRemove = {
					...existingItem,
					amount: existingItem.amount - 1,
				};
				updatedItemsRemove = [...state.items];
				updatedItemsRemove[existingCartItemIndexRemove] =
					updatedItemRemove;
			}
			return {
				items: updatedItemsRemove,
				totalAmount: updatedTotalAmount,
			};
		default:
			return defaultCartState;
	}
};

export default function CartProvider(props) {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	// When this item is called, we get the item in the cart. If we already have the item in the cart, we want to update the amount. Else add a new item. We want to manage this as a reduccer
	const addItemToCartHandler = (item) => {
		// The item that is being called here refers to the item that is being added in the cartContext object
		// Item: item is forwarding the item we get on the function to the reducer
		dispatchCartAction({ type: ACTIONS.ADD_ITEM, item: item });
	};

	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({ type: ACTIONS.REMOVE_ITEM, id: id });
	};

	// This is where we are managing the cart data
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
}
