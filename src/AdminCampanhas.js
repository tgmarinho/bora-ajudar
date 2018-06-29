import React, { Component } from 'react'
import base from './base'

class AdminCampanhas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            campanhas: {}
        }
    }

    componentDidMount() {
        base.syncState('campanhas', {
            context: this,
            state: 'campanhas',
            asArray: false
        })
    }

    renderCampanha(campanha) {
        return <li>{campanha.nome}</li>
    }

    render() {
        return (
            <div>
                <h1>Campanhas</h1>
                <ul>
                    {Object.keys(this.state.campanhas).map(key => this.renderCampanha(this.state.campanhas[key]))}

                </ul>
            </div>
        )
    }
}

export default AdminCampanhas