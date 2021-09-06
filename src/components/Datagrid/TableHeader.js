import React, { Component } from 'react'

export default class TableHeader extends Component {
	render() {
		return (
			<thead>
				<tr>
					<th>#</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Username</th>
				</tr>
			</thead>
		)
	}
}
