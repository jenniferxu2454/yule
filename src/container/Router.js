import ReadonlyTable from '../pages/table/ReadonlyTable'
import EditTable from '../pages/table/EditTable'
import DndDemo from '../pages/dnd'

export const routers = [
	{
		path: '/readonly_table',
		key: '/readonly_table',
		component: ReadonlyTable,
	},
	{
		path: '/edit_table',
		key: '/edit_table',
		component: EditTable,
	},
	{
		path: '/form',
		key: '/form',
		component: EditTable,
	},
	{
		path: '/dnd',
		key: '/dnd',
		component: DndDemo,
	},
]
