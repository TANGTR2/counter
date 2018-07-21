import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import counter from './reducers'
import {increment, decrement, multiple} from "./actions";

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <App
        state={store.getState()}
        onIncrement={() => store.dispatch(increment())}
        onDecrement={() => store.dispatch(decrement())}
        onMultiple={(multiplier) => store.dispatch(multiple(multiplier))}
    />,
    rootEl
)

render()
store.subscribe(render)