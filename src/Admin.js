import React, { Component } from 'react'
import { auth } from './base'
import { Redirect } from 'react-router-dom'

class Admin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isAuthing: true,
            isLoggedIn: false,
            user: null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                isAuthing: false,
                isLoggedIn: !!user,
                user: user
            })
        })
    }

    render() {

        if (this.state.isAuthing) {
            return <p>Aguarde...</p>
        }

        if (!this.state.isLoggedIn) {
            return <Redirect to='/login' />
        }

        return (
            <div>
                <h1>Admin {JSON.stringify(this.state)}</h1>
            </div>

        )
    }

}

export default Admin