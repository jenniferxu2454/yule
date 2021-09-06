import react from 'react'
import { Button as Btn } from 'react-bootstrap'

export default class Button extends react.Component {
	render() {
		const { label } = this.props
		return <Btn>{label}</Btn>
	}
}
