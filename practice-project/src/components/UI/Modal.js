import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = function (props) {
	return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = function (props) {
	return (
		<Card className={classes.modal}>
			<div className={classes.header}>
				<h2>{props.title}</h2>
			</div>
			<div className={classes.content}>{props.message}</div>
			<footer className={classes.actions}>
				<Button onClick={props.onConfirm}>Okay</Button>
			</footer>
		</Card>
	);
};

const Modal = function (props) {
	return (
		<React.Fragment>
			{ReactDom.createPortal(
				<Backdrop onConfirm={props.onConfirm}></Backdrop>,
				document.getElementById("backdrop-root")
			)}
			{ReactDom.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				></ModalOverlay>,
				document.getElementById("overlay-root")
			)}
		</React.Fragment>
	);
};

export default Modal;
