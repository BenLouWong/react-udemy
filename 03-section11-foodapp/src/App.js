import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
	const [cartState, setCartState] = useState(false);

	const showCartHandler = () => {
		setCartState(true);
	};

	const hideCartHandler = () => {
		setCartState(false);
	};

	return (
		<CartProvider>
			{cartState && <Cart onClose={hideCartHandler}></Cart>}
			{/* If cartState is true, render cart. Else, don't render Cart */}
			<Header onShowCart={showCartHandler}></Header>
			{/* This just points the showCartHandler function to the Header function as a props, as the button functionality will be impelemented in the Header.js file */}
			<main>
				<Meals></Meals>
			</main>
		</CartProvider>
	);
}

export default App;
