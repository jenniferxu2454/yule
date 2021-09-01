import * as types from './constant'

export const setMenuRouter = (data) => ({
	type: types.MENU_GET_ALL_ROUTE,
	payload: { data },
})
