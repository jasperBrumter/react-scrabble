import React, { Component } from "react";

import "./wordinput.scss"

class WordInput extends Component {

	render() {

		return(
			<div>
				<form className="form">
					<input type="text" className="wordinput" placeholder="click here"/>
				</form>
			</div>
		)
	}
}

export default WordInput;