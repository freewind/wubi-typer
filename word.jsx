import React,{Component} from 'react';

class Word extends Component {
	render() {
		return <span>
		  {this.props.content}
		</span>;
	}
}

export default Word;