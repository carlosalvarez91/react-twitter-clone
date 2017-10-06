import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import styles from './message.css'
import moment from 'moment'

const propTypes = {
    username: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    displayName: PropTypes.string,
    text: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    numRetweets: PropTypes.number,
    numFavourites: PropTypes.number,
    onReplyTweet: PropTypes.func.isRequired,
    onFavourite: PropTypes.func.isRequired,
    onRetweet: PropTypes.func.isRequired
}

class Message extends Component{
    constructor (props){
        super(props)
        this.state = {
            pressFavourite: false,
            pressRetweet: false
        }
        this.onPressRetweet = this.onPressRetweet.bind(this)
        this.onPressFavourite = this.onPressFavourite.bind(this)
    }
    onPressFavourite(){
        this.props.onFavourite()
        this.setState({
            pressFavourite: true
        })
    }
    onPressRetweet(){
        this.props.onRetweet()
        this.setState({
            pressRetweet: true
        })
    }
    render(){
        let dateFormat = moment(this.props.date).fromNow()
        return(
            <div className={styles.root}>
                <div className={styles.user}>
                    <Link to={`/user/${this.props.username}`}>
                        <figure>
                            <img className={styles.avatar} src={this.props.picture} />
                        </figure>
                    </Link>
                    <span className={styles.displayName}>{this.props.displayName}</span>
                    <span className={styles.username}>{this.props.username}</span>
                    <span className={styles.date}>{dateFormat}</span>
                </div>
                <h3>{this.props.text}</h3>
                <div className={styles.buttons}>
                    <div 
                        className={styles.icon}
                        onClick={this.props.onReplyTweet}
                    >
                        <span className='fa fa-reply'></span>
                    </div>
                    <div 
                        className={(this.state.pressRetweet) ? styles.rtGreen : ''}
                        onClick={this.onPressRetweet}
                    >
                        <span className='fa fa-retweet'></span>
                        <span className={styles.num}>{this.props.numRetweets}</span>
                    </div>
                    <div 
                        className={(this.state.pressFavourite) ? styles.favYellow : ''}
                        onClick={this.onPressFavourite}
                    >
                        <span className='fa fa-star'></span>
                        <span className={styles.num}>{this.props.numFavourites}</span>
                    </div>
                </div>
            </div>
        )
    }
}
Message.propTypes = propTypes

export default Message