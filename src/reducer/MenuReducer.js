import * as actions from '../actions/constant'
const initData = {
	router: ['11'],
}

export default function menuReducer(state = initData, action) {
	switch (action.type) {
		case actions.MENU_GET_ALL_ROUTE:
			return {
				...state,
				router: action.payload.data,
			}
		default:
			return state
	}
}
