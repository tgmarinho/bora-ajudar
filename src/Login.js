import React, { Component } from 'react'
import { auth } from './base'

class Login extends Component {

    constructor(props) {
        super(props)
        this.email = null
        this.passwd = null
    }

    handleLogin = () => {
        console.log('login', this.email.value, this.passwd.value)
        auth
            .signInWithEmailAndPassword(this.email.value, this.passwd.value)
            .then((user) => {
                console.log('logged in', user)
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    render() {
        return (
            <div>
                <input type='email' ref={ref => this.email = ref} />
                <input type='passwd' ref={ref => this.passwd = ref} />
                <button onClick={this.handleLogin} >
                    Entrar
                </button>
            </div>
        )
    }
}

export default Login