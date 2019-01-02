import React, {Component} from 'react';

export default class App extends Component {

  	state = {	};

	constructor(props) {
    	super(props);
    	this.state = {height: window.innerHeight, width: window.innerWidth};
    	console.log(this.state.height)
  	};

	mainBodyStyles = {
		"width" : this.state.height,
		"height" : this.state.width
	};

	render() {
		return ( 
			<React.Fragment>
				<div style={this.mainBodyStyles} className="bg-dark text-white">
					<p> Testing text </p>
				</div>
			</React.Fragment>
		);
	};

}


