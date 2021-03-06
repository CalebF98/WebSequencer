import React from 'react';
let Naturals = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

class Key extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
		}
	}

	startPlaying = (event) => {
		this.props.noteDownHandler({
			id: this.props.id,
			frequency: this.props.frequency
		});
		this.setState({isPlaying: true})
	}
	stopPlaying = (event) => {
		if (this.state.isPlaying) {
			this.props.noteUpHandler({
				id: this.props.id,
				frequency: this.props.frequency
			});
			this.setState({isPlaying: false})
		}
	}
	
	render() {
		// If its not an Natural key, itll have an index of -1
		let	isAnAccidental = Naturals.indexOf(this.props.note) == -1
		let props = {
			className    : 'key ' + (isAnAccidental ? 'black' : 'ivory'),
			id           : this.props.id,
			onMouseDown  : this.startPlaying,
			onMouseUp    : this.stopPlaying,
			onMouseLeave : this.stopPlaying,
			onTouchStart : this.startPlaying,
			onTouchEnd   : this.stopPlaying
		}
		return <button {...props}/>
	}
}

export default Key;