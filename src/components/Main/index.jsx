import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component{
    constructor(){
        super()
        this.state = {
            openText: false,
            messages: [{
                id: uuid.v4(), // random key number
                text: 'Tweet test',
                picture:'',
                displayName:'Carlos',
                username:'carlosalvarez',
                date: Date.now()
            },
            {
                id: uuid.v4(),
                text: 'Tweet test 2',
                picture:'',
                displayName:'Carlos',
                username:'carlosalvarez',
                date: Date.now()
            }]
        }
    }
    handleOpenText(event){
        event.preventDefault()
        this.setState({ onOpenText: true})
    }
    renderOpenText(){
        if(this.state.onOpenText){
            return <InputText />
        }
    }
    render(){
        return (
            <div>
                <ProfileBar
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText.bind(this)} // bind: to avoid confusion about what 'this' is using
                />
               {this.renderOpenText()}
                <MessageList messages={this.state.messages}/>
            </div>
        )
    }
}
export default Main