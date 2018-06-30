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

    handleRemoveCampanha = key => {
        base.remove('campanhas/' + key, err => {
            console.log(err)
        })
    }

    handleRenderCampanha = (key, campanha) => {
        return (
            <li key={key}>
                {campanha.nome}
                &nbsp;
            <button className="btn btn-success" onClick={() => 1}>Editar</button>
                <button className="btn btn-danger" onClick={() => this.handleRemoveCampanha(key)}>Remover</button>
            </li>)
    }

    handleSave = () => {
        const nome = this.nome.value
        const descricao = this.descricao.value

        base.push('campanhas', {
            data: { nome, descricao },
            then: err => {
                if (!err) {
                    this.nome.value = ''
                    this.descricao.value = ''
                }
            }
        })
    }


    render() {
        return (
            <div>
                <h1>Campanhas</h1>
                <h2>Nova Campanha</h2>
                Campanha: <input className="form-control" type="text" ref={ref => this.nome = ref} /> <br />
                Descrição: <textarea className="form-control" type="text" ref={ref => this.descricao = ref} /> <br />
                <button className="btn btn-primary" onClick={this.handleSave}>Salvar nova campanha</button>
                <ul>
                    {Object.keys(this.state.campanhas).map(key => this.handleRenderCampanha(key, this.state.campanhas[key]))}

                </ul>
            </div>
        )
    }
}

export default AdminCampanhas