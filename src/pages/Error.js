import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '@actions/MenuActions'

@connect(
	(state) => ({
		router: state.MenuReducer.router,
	}),
	(dispatch) => bindActionCreators(actions, dispatch)
)
class Error extends React.Component {
	render() {
		console.log('router', this.props.router)
		return <div>error</div>
	}
}

export default Error
