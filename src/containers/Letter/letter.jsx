import React, { Component } from "react";

import "./letter.scss";

class Letter extends Component {
	render() {
		return(
			<div className="letter">
				<div className='content'>{this.props.content}</div>
			</div>
		)
	}
}

export default Letter;