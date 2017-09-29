import React, { Component } from 'react'
import { HashRouter, Match } from 'react-router'
import 'normalize-css'
import styles from './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'

class App extends Component{
    constructor(){
        super()
        this.state = {
            user:null
        }
        this.handleOnauth = this.handleOnauth.bind(this)
    }

    handleOnauth(){
        console.log('Auth')
    }
    render(){
        return(
            <HashRouter>
                <div>
                    <Header />
                    <Match exactly pattern='/' render={() => {
                        if(this.state.user){
                            return (
                                <Main user = {this.state.user}/>
                            )
                        }else{
                            // Render login
                            return(
                                <Login onAuth={this.handleOnauth} />
                            )
                        }
                    }}/>

                    <Match pattern='/profile' render={() =>{
                        // Render profile
                        return(
                            <Profile 
                                picture={this.state.user.photoURL}
                                username={this.state.user.email.split('@')[0]}
                                displayName={this.state.user.displayName}
                                location={this.state.user.location}
                                emailAddress={this.state.user.email}
                            />
                        )
                    }}/>
                    <Match pattern='/user/:username' render={({ params }) =>{
                        // Render Profile  params: username
                        return(
                            <Profile
                                displayName={params.username}
                                username={params.username}
                            />
                        )
                    }}/>
                </div>
            </HashRouter>
        )
    }
}
export default App