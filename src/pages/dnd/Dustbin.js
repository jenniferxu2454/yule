import React from 'react'
import PropTypes from 'prop-types'

import { DropTarget } from 'react-dnd'
import { ItemType } from './DndType'

const style = {
	height: '12rem',
	width: '12rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
}

const boxTarget = {
	drop: () => ({ name: 'Dustbin' }),
}

@DropTarget(
	ItemType.BOX,
	// 接受拖拽的事件对象
	boxTarget,
	// 收集功能函数 包含connect 和monitor 参数
	// connect 里面的函数 用来将 dom 节点与react-dnd 的backend建立联系 ？？ backend 是什么。。
	(connect, monitor) => ({
		// 包裹住dom 节点， 使其可以接受对应的拖拽组件
		connectDropTarget: connect.dropTarget(),
		// drag source是否在drop target的区域
		isOver: monitor.isOver(),
		// 是否可以被放置
		canDrop: monitor.canDrop(),
	})
)
class Dustbin extends React.Component {
	static propTypes = {
		canDrop: PropTypes.bool.isRequired,
		isOver: PropTypes.bool.isRequired,
		connectDropTarget: PropTypes.func.isRequired,
	}

	render() {
		const { canDrop, isOver, connectDropTarget } = this.props
		const isActive = canDrop && isOver

		let backgroundColor = '#222'
		// 拖拽组件此时正处于 drag target 区域时，当前组件背景色变为 darkgreen
		if (isActive) {
			backgroundColor = 'darkgreen'
		}
		// 当前组件可以放置 drag source 时，背景色变为 pink
		else if (canDrop) {
			backgroundColor = 'darkkhaki'
		}

		// 使用 connectDropTarget 包裹住 DOM 节点，使其可以接收对应的 drag source 组件
		// connectDropTarget 包裹住的 DOM 节点才能接收 drag source 组件
		return (
			connectDropTarget &&
			connectDropTarget(
				<div style={{ ...style, backgroundColor }}>
					{isActive ? 'Release to drop' : 'Drag a box here'}
				</div>
			)
		)
	}
}

export default Dustbin
