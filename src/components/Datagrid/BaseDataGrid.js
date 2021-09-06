import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default class BaseDataGrid extends Component {
	render() {
		return (
			<Table striped bordered hover>
				<TableHeader />
				<TableBody />
			</Table>
		)
	}
}
