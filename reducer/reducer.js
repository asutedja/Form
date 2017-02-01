//Actions
export function loading(fname,lname) {
	return {
		type: 'loading',
		fname: fname,
		lname: lname,
		load: true
	}
}

export function complete() {
	return {
		type:'complete',
		load:false
	}
}


//Initial State for SimpleForm
const initialState = {
	fname:'',
	lname:'',
	load: false
}

//Reducer
export default function reducer(state = initialState, action) {
	let newState = {};
	switch(action.type) {
		case 'loading' :
		state = {...state,
			fname: action.fname,
			lname: action.lname,
			load: action.load
		}
		break;

		case 'complete' :
		state = {...state,
			load: action.load
		}
		break;

	}
	console.log('store',state)
	return state;

}