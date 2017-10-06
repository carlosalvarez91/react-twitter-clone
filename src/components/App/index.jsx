import React, { Component } from 'react'
import { HashRouter, Match } from 'react-router'
import 'normalize-css'
import styles from './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'
import firebase from 'firebase';


class App extends Component{
    constructor(){
        super()
        this.state = {
            user:null
        }
        this.handleOnauth = this.handleOnauth.bind(this)
    }
    componentWillMount () {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({ user })
            console.log(user)
          } else {
            this.setState({ user: null })
          }
        })
      }
    handleOnauth(){
        console.log('Auth')
        const provider = new firebase.auth.FacebookAuthProvider()

        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} you have logged in`))
        .catch(error => console.error(`Error: ${error.code}: ${error.message}`))
    }
    handleLogout () {
        firebase.auth().signOut()
          .then(() => console.log('You have logged out correctly'))
          .catch(() => console.error('An error happened'))
      }
    render(){
        return(
            <HashRouter>
                <div>
                    <Header />
                    <Match exactly pattern='/' render={() => {
                        if(this.state.user){
                            return (
                                <Main user = {this.state.user}
                                onLogout={this.handleLogout}/>
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