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
            <button className='btn btn-success' onClick={() => 1}>Editar</button>
                <button className='btn btn-danger' onClick={() => this.handleRemoveCampanha(key)}>Remover</button>
            </li>)
    }

    handleSave = () => {

        const nome = this.nome.value
        const subTitulo = this.subTitulo.value
        const descricao = this.descricao.value
        const tipo = this.state.tipo
        const comoDoar = this.state.tipo === 'produtos' ? this.comoDoar.value : null
        const meta = this.state.tipo === 'doacao' ? this.meta.value : null
        const doado = this.state.tipo === 'doacao' ? this.doado.value : null

        base.push('campanhas', {
            data: { nome, subTitulo, descricao, tipo, comoDoar, meta, doado },
            then: err => {
                if (!err) {
                    this.nome.value = ''
                    this.subTitulo.value = ''
                    this.descricao.value = ''
                    this.setState({tipo: ''})
                    if(this.meta){
                        this.meta.value = ''
                    }
                    if(this.doado){
                        this.doado.value = ''
                    }
                    if(this.comoDoar) {
                        this.comoDoar.value = ''
                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Campanhas</h1>
                <h2>Nova Campanha</h2>
                Campanha: <input className='form-control' type='text' ref={ref => this.nome = ref} /> <br />
                Sub-título: <input className='form-control' type='text' ref={ref => this.subTitulo = ref} /> <br />
                Descrição: <textarea className='form-control' type='text' ref={ref => this.descricao = ref} /> <br />
                Tipo: <br />
                <input type='radio' name='tipo' onClick={() => this.setState({ tipo: 'doacao' })} /> Doação
                     <br />
                <input type='radio' name='tipo' onClick={() => this.setState({ tipo: 'produtos' })} /> Produtos
                    {this.state.tipo === 'doacao' && <div>
                    <h4>Doação</h4>
                    Meta: <input type="text" ref={ref => this.meta = ref} /> <br />
                    Doado: <input type="text" ref={ref => this.doado = ref} defaultValue={0} />
                </div>
                }
                {this.state.tipo === 'produtos' &&
                    <div>
                        <h4>Produtos</h4>
                        Como doar: <input type="text" ref={ref => this.comoDoar = ref} />
                    </div>
                }

                <button className='btn btn-primary' onClick={this.handleSave}>Salvar nova campanha</button>
                <ul>
                    {Object.keys(this.state.campanhas).map(key => this.handleRenderCampanha(key, this.state.campanhas[key]))}

                </ul>
            </div>
        )
    }
}

export default AdminCampanhas