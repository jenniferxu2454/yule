import Container from './Container'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { allReducer } from '../reducer/index'
import { BrowserRouter, Route } from 'react-router-dom'

const rootStore = createStore(allReducer)

function App() {
	return (
		<Provider store={rootStore}>
			<BrowserRouter basename="mywebsite">
				<Route key="/" path="/" component={Container}></Route>
			</BrowserRouter>
		</Provider>
	)
}

export default App
