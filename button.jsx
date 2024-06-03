import React from "react";
import './button.css'
const Button = (props) => {
	return <button className="glow-on-hover" onClick={props.callApi}>
		Click to generate a funny joke.
	</button>;
}
export default Button;
