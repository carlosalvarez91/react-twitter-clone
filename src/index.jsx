import React from 'react'
import {render} from 'react-dom'

class Test extends React.Component{
    render(){
        return(
            <h1>Twitter Clone with React</h1>
        )
    }
}
render(<Test />, document.getElementById('root'))