import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
         <h1 class="site-heading text-center text-white d-none d-lg-block">
           <img src='img/logo.png' />
    </h1>

    {/* <!-- Navigation --> */}
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div class="container">
        <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Asilo Melhor Idade</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="index.html">Início
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="about.html">Sobre</a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="products.html">Campanhas</a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase text-expanded" href="store.html">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="page-section clearfix">
      <div class="container">
        <div class="intro">
          <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/intro-menor.jpg" alt="" />
          <div class="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">Ajudar</span>
              <span class="section-heading-lower">Faz Muito Bem</span>
            </h2>
            <p class="mb-3">Todos os trabalhos desenvolvidos pela Morada da Melhor Idade só é possível pela ajuda incansável de nossos voluntários.
            </p>
            <div class="intro-button mx-auto">
              <a class="btn btn-primary btn-xl" href="#">Veja o que estamos precisando no momento</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">Nosso Propósito</span>
                <span class="section-heading-lower">A Nossa Comunidade</span>
              </h2>
              <p class="mb-0">Cuidar de pessoas que estão em suas melhores idades assim como eles contribuiram para a nossa comunidade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer text-faded text-center py-5">
      <div class="container">
        <p class="m-0 small">
          <a href='https://www.devpleno.com/software-do-bem'><img src='img/software-do-bem-logo-320x128.png' /></a><br />
          Desenvolvido durante o Hands-on ReactJS do DevPleno por Tulio Faria. Saiba mais.
        </p>
      </div>
    </footer>
      </div>
    );
  }
}

export default App
