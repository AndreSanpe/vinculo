import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => (
  <Container>
    <Row>
      <Col xs={12} md={8} lg={6}>
        <h1>Bem-vindo ao site de psicologia</h1>
        <p>Aqui você encontrará informações sobre nossos serviços e nossos profissionais.</p>
      </Col>
    </Row>
  </Container>
);

const About = () => (
  <Container>
    <Row>
      <Col xs={12} md={8} lg={6}>
        <h1>Sobre Nós</h1>
        <p>Somos uma equipe de psicólogos especializados em diferentes áreas da saúde mental.</p>
      </Col>
    </Row>
  </Container>
);

const Contact = () => (
  <Container>
    <Row>
      <Col xs={12} md={8} lg={6}>
        <h1>Contato</h1>
        <p>Entre em contato conosco para agendar uma consulta ou tirar suas dúvidas.</p>
      </Col>
    </Row>
  </Container>
);

const Services = () => (
  <Container>
    <Row>
      <Col xs={12} md={8} lg={6}>
        <h1>Nossos Serviços</h1>
        <p>Oferecemos consultas individuais e em grupo, além de terapias online.</p>
      </Col>
    </Row>
  </Container>
);

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/services">Serviços</Link>
          </li>
        </ul>
      </nav>
      <Routes>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;