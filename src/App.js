import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Sobre from './Sobre'
import Campanhas from './Campanhas'
import Contato from './Contato'
import Footer from './Footer'

import base from './base'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contador: 1
    }
  }

  componentDidMount() {
    base.syncState('contador', {
      context: this,
      state: 'contador',
      asArray: false
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
        <div><h1>Contador: {this.state.contador}</h1></div>
          <Route exact path='/' component={Home} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/campanhas' component={Campanhas} />
          <Route path='/contato' component={Contato} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
