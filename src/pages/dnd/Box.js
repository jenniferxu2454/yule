import React from 'react'
import { DragSource } from 'react-dnd'
import { ItemType } from './DndType'
import PropTypes from 'prop-types'

const style = {
	border: '1px dashed gray',
	backgroundColor: 'while',
	padding: '0.5rem 1rem',
	margin: '0 1.5rem 1.5rem 0 rem',
	cursor: 'move',
	float: 'left',
}

const boxSource = {
	// 开始拖拽时触发当前函数
	beginDrag(props) {
		//返回的对象可以在monitor.getItem()对象中获得
		return {
			name: props.name,
		}
	},
	// 结束拖拽时触发当前函数
	// props 当前组件的props
	// monitor DragSourceMonitor 对象
	endDrag(props, monitor) {
		const item = monitor.getItem()
		const dropResult = monitor.getDropResult()

		if (dropResult) {
			alert(`You dropped ${item.name} into ${dropResult.name}!`)
		}
	},
}

@DragSource(
	ItemType.BOX,
	// 拖拽事件对象
	boxSource,
	// 收集功能函数， 包含connect 和monitor 参数
	// connect 里面的函数 用来将 dom 节点与react-dnd 的backend建立联系 ？？ backend 是什么。。
	(connect, monitor) => ({
		// 包裹住dom 节点，使其可以进行拖拽操作
		connectDragSource: connect.dragSource(),
		//是否拖拽状态
		isDragging: monitor.isDragging(),
	})
)
class Box extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		isDragging: PropTypes.bool.isRequired,
		connectDragSource: PropTypes.func.isRequired,
	}

	render() {
		const { isDragging, connectDragSource } = this.props
		const { name } = this.props
		const opacity = isDragging ? 0.4 : 1

		return (
			connectDragSource &&
			connectDragSource(<div style={{ ...style, opacity }}>{name}</div>)
		)
	}
}

export default Box
