import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider }from 'react-redux'
import SimpleForm from './components/SimpleForm.js'
import reducer from './reducer/reducer'

const store = createStore(reducer)

render(
  <Provider store={store}> 
  	<SimpleForm />
  </Provider>,
  document.getElementById('app')
)