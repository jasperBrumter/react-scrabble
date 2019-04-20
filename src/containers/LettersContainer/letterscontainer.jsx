// React and Redux imports
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./letterscontainer.scss";

// import actions
import { setLetters } from "../../actions";

// import components
import Letter from "../Letter/letter.jsx"

class LettersContainer extends Component {

	componentWillMount() {
		this.props.setLetters();
	}

	render() {
		return(
			<div className="letters-container">
				{this.props.letters.map((item, index) => {
					return <Letter content={item} key={index} />
				})}
			</div>
		)
	}
} 


function mapStateToProps(state) {
	return {
		letters: state.letters
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({setLetters}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LettersContainer);