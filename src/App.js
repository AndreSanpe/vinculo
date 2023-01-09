import logo from './imagens/brincando.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" style={{height: '400px'}}/>
        <br></br>
        <br></br>

        <h3>
          Estamos montando nosso cantinho!!!
        </h3>
        <h1>
          
        <a
          className="App-link"
          href="https://www.instagram.com/vinculodesenvolvimentoinfantil/"
          target="_blank"
          rel="noopener noreferrer"
          >
          Vínculo Desenvolvimento Infantil
        </a>
          </h1>
          <a
          className="App-link"
          href="https://www.google.com/maps/dir/-21.7961111,-46.5682413/vinculo+desenvolvimento+infantil+belo+horizonte+mg/@-21.0632709,-46.3983822,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xa6917d845fc121:0x61cb3b99f6481460!2m2!1d-43.9965149!2d-19.8919642"
          target="_blank"
          rel="noopener noreferrer"
          >
          <p>Rua Romualdo Lopes Cançado, 19 - Castelo, Belo Horizonte - MG, 30840-460</p>
          </a>

      </header>
    </div>
  );
}

export default App;
