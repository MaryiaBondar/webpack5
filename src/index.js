console.log('hello webpack')

import React from 'react'
import {render} from 'react-dom'
import image from './img/img.jpeg'
import './style.less'

const App = () => {
    const [blure, setBlur] = React.useState(0)
    const changeGray = (event) => {
        setContrast(+event.currentTarget.value)

    }
    const [contrast, setContrast] = React.useState(0)
    const changeBlur = (event) => {
        setBlur(+event.currentTarget.value/10)

    }
    return (
        <div>
            <button>changeBlur</button>
            <input onChange={changeBlur} type='range' maxLength="1" />
            changeGray
            <input onChange={changeGray} type='range' maxLength="1" />
            Welcom to react from webpack
            <div style={{filter: `contrast(${contrast}%)`}}>
            <img style={{filter: `blur(${blure}px)`}} src={image}  />

            </div>
        </div>
    )
}

render(<App />, document.getElementById('root'))