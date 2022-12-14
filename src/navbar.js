import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img
						src="/docs/5.1/assets/brand/bootstrap-logo.svg"
						alt=""
						width="30"
						height="24"
						className="d-inline-block align-text-top"></img>
					Bootstrap
				</a>
				<a>home</a>
				<a>contact</a>
				<a>about</a>
				<a>services</a>
			</div>
		</nav>
	);
};