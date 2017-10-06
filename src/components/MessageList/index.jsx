import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message'
import styles from './message-list.css'

const propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRetweet: PropTypes.func.isRequired,
    onFavourite: PropTypes.func.isRequired,
    onReplyTweet: PropTypes.func.isRequired
}

function MessageList ({ messages, onRetweet, onFavourite, onReplyTweet }){

        return(
            <div className={styles.root}>
                {messages.map(msg =>{
                    return(
                        <Message 
                            key={msg.id}
                            text={msg.text}
                            picture={msg.picture}
                            displayName={msg.displayName}
                            username={msg.username}
                            date={msg.date} 
                            numRetweets={msg.retweets}
                            numFavourites={msg.favourites}
                            onRetweet={() => onRetweet(msg.id)}
                            onFavourite={() => onFavourite(msg.id)}
                            onReplyTweet={() => onReplyTweet(msg.id, msg.username)}
                            />
                    )
                }).reverse()}
            </div>
        )
}

MessageList.propTypes = propTypes

export default MessageList