import React, { Component } from 'react'
import { HashRouter, Match } from 'react-router'
import 'normalize-css'
import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component{
    constructor(){
        super()
        this.state = {
            user:{
                photoURL: '',
                email: 'test@test',
                onOpenText: false,
                displayName: 'Carlos'

            }
        }
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
                        }
                    }}/>

                    <Match pattern='/profile' render={() =>{
                        // Render profile
                    }}/>
                    <Match pattern='/user/:username' render={({ params }) =>{
                        // Render Profile  params: username
                    }}/>
                </div>
            </HashRouter>
        )
    }
}
export default App