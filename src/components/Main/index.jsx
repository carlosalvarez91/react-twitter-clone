import React, { Component } from 'react'
import MessageList from '../MessageList'

class Main extends Component{
    constructor(){
        super()
        this.state = {
            messages: [{
                text: 'Tweet test',
                picture:'',
                displayName:'Carlos',
                username:'carlosalvarez',
                date: Date.now()
            },
            {
                text: 'Tweet test 2',
                picture:'',
                displayName:'Carlos',
                username:'carlosalvarez',
                date: Date.now()
            }]
        }
    }
    render(){
        return (
            <MessageList messages={this.state.messages}/>
        )
    }
}
export default Main