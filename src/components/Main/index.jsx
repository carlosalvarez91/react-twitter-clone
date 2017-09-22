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

        // bind: to avoid confusion about what 'this' is using
        this.handleSendText = this.handleSendText.bind(this);
        this.handleCloseText = this.handleCloseText.bind(this);
        this.handleOpenText = this.handleOpenText.bind(this);
    }

    handleSendText(event){
        event.preventDefault()
        let newMessage = {
            id: uuid.v4(),
            username: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            date: Date.now(),
            text: event.target.text.value
        }
        console.log(newMessage)
    }
    handleCloseText(event){
        event.preventDefault()
        this.setState({onOpenText:false})
    }
    handleOpenText(event){
        event.preventDefault()
        this.setState({ onOpenText: true})
    }
    renderOpenText(){
        if(this.state.onOpenText){
            return (
                <InputText
                onSendText={this.handleSendText}
                onCloseText={this.handleCloseText}
                 />
            )
        }
    }
    render(){
        return (
            <div>
                <ProfileBar
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText}
                />
               {this.renderOpenText()}
                <MessageList messages={this.state.messages}/>
            </div>
        )
    }
}
export default Main