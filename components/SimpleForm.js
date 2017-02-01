import React from 'react'
import * as action from '../reducer/reducer'
import { connect } from 'react-redux'

class SimpleForm extends React.Component {

	constructor(props) {
		super(props)
	}

	submit() {

		const fname = document.getElementById('fname').value;
		const lname = document.getElementById('lname').value;
		const hobbies = document.getElementById('hobbies').value;
		//Dispatch states to store

		this.props.dispatch(action.loading(fname,lname));
		console.log(this.props)
		//setTimeout
		setTimeout(this.done.bind(this),3000);
	}

	done() {
		this.props.dispatch(action.complete());
		console.log('after',this.props)
	}

	render() {
		console.log('rendering')
		return(
			<div className='form'>
				<input id='fname' type='text' placeholder='First Name'/><br/>
				<input id='lname' type='text' placeholder='Last Name'/><br/>
				<input id = 'hobbies' type='text' placeholder= 'Hobbies'/><br/>
				<button onClick={this.submit.bind(this)}>Submit</button>
				{ this.props.fname ? 
					this.props.load ? 
							<div>Loading...</div> : 
							<div>
								<div> Done !</div>
								<textarea>{this.props.fname + ' ' +this.props.lname}</textarea>
							</div> 
				  : null}


			</div>

			)
	}
}

function mapStateToProps(state){
  return {
    fname: state.fname,
    lname: state.lname,
    load: state.load
  }
}

export default connect(mapStateToProps)(SimpleForm);