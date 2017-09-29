import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            userNameToReply: '',
            user: Object.assign({}, this.props.user, {retweets: []}, { favourites: []}),
            openText: false,
            messages: [{
                id: uuid.v4(), // random key number
                text: 'Tweet test',
                picture:'',
                displayName:'Carlos',
                username:'carlosalvarez',
                date: Date.now(),
                retweets: 0,
                favourites:2
            },
            {
                id: uuid.v4(),
                text: 'Tweet test 2',
                picture:'',
                displayName:'Carlos',
                username:'carlosalvarez',
                date: Date.now(),
                retweets: 3,
                favourites: 0

            }]
        }

        // .bind(): to avoid confusion about what 'this' is using
        this.handleSendText = this.handleSendText.bind(this);
        this.handleCloseText = this.handleCloseText.bind(this);
        this.handleOpenText = this.handleOpenText.bind(this);
        this.handleRetweet = this.handleRetweet.bind(this);
        this.handleFavourite = this.handleFavourite.bind(this);
        this.handleReplyTweet = this.handleReplyTweet.bind(this);
        
    }

    handleSendText(event){
        event.preventDefault()
        let newMessage = {
            id: uuid.v4(),
            username: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            picture: this.props.user.photoURL,
            date: Date.now(),
            text: event.target.text.value
        }
        this.setState({
            messages: this.state.messages.concat(newMessage),
            onOpenText: false
        })
    }
    handleCloseText(event){
        event.preventDefault()
        this.setState({onOpenText:false})
    }
    handleOpenText(event){
        event.preventDefault()
        this.setState({ onOpenText: true})
    }
    handleRetweet(msgId){
        let alreadyRetweeted = this.state.user.retweets.filter(rt => rt === msgId)
        if(alreadyRetweeted.length === 0){
            let messages = this.state.messages.map(msg =>{
                if(msg.id === msgId){
                    msg.retweets++
                }
                return msg
            })
            let user = Object.assign({}, this.state.user)
            user.retweets.push(msgId)
            this.setState({
                messages,  // in ES6 when the key and the value are called the same we can just write the key
                user
            })
        }

    }
    handleFavourite(msgId){
        let alreadyFavourited = this.state.user.favourites.filter(fav => fav === msgId)
        if(alreadyFavourited.length === 0){
            let messages = this.state.messages.map(msg =>{
                if(msg.id === msgId){
                    msg.favourites++
                }
                return msg
            })
            let user = Object.assign({}, this.state.user)
            user.favourites.push(msgId)

            this.setState({
                messages,
                user
            })
        }
    }
    handleReplyTweet(msgId, userNameToReply){
        this.setState({
            onOpenText: true,
            userNameToReply

        })

    }

    renderOpenText(){
        if(this.state.onOpenText){
            return (
                <InputText
                onSendText={this.handleSendText}
                onCloseText={this.handleCloseText}
                userNameToReply={this.state.userNameToReply}
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
                <MessageList 
                    messages={this.state.messages}
                    onRetweet={this.handleRetweet}
                    onFavourite={this.handleFavourite}
                    onReplyTweet={this.handleReplyTweet}
                />
            </div>
        )
    }
}
export default Main