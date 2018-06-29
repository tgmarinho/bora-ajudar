import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Sobre from './Sobre'
import Campanhas from './Campanhas'
import Contato from './Contato'
import Footer from './Footer'

import Admin from './Admin';

import base from './base'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/campanhas' component={Campanhas} />
          <Route path='/contato' component={Contato} />
          <Route path='/admin' component={Admin} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
