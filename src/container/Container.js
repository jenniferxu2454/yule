import React from 'react'
import SecondNavigation from '../components/SecondNavigation'

import GlobalNavigation from '../components/GlobalNavigation'
import * as actions from '../actions/MenuActions'
import { connect } from 'react-redux'
import { routers } from './Router'
import { Switch, Route } from 'react-router-dom'

class Container extends React.Component {
	onclickHeader = () => {
		this.props.setMenuRouter(['aaa'])
	}

	onClickMenu = (e) => {
		this.props.history.push(`${e.key}`)
	}

	returnRouter = () => {
		let tmp = routers.map((router) => {
			return (
				<Route
					exact={routers.path === '/' ? true : false}
					key={router.path}
					path={router.path}
					component={router.component}
				></Route>
			)
		})
		return <Switch>{tmp}</Switch>
	}

	render() {
		const allRouter = this.returnRouter()

		return (
			<div>
				<div id="header">
					<GlobalNavigation />
				</div>
				<div id="main">
					<div id="sidebar">
						<SecondNavigation onClick={this.onClickMenu} />
					</div>
					<div id="content">
						<div
							className="content-header"
							onClick={this.onclickHeader}
						>
							<header>本页标题</header>
						</div>
						<div className="content-table">{allRouter}</div>
					</div>
				</div>
				<div id="footer">
					this is footer and @2021， 版权归xu,zhenzhen 所有
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		router: state.MenuReducer.router,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setMenuRouter: (routers) => dispatch(actions.setMenuRouter(routers)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
