import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header Skills'>
        <div className='Skill-nome'>Linguagens</div>
        <div className='Skill-container'>
          <div className='Skill-box'>
            <div className='Skill-box-top'>
              <img src='../html-logo.png' alt='HTML logo.' className='Skill-box-img'/>
            </div>
            <div className='Skill-box-bottom'>
              <p>HTML</p>
            </div>
          </div>
          <div className='Skill-box'>
            <div className='Skill-box-top'>
              <img src='../css-3-logo-1.png' alt='CSS logo.' className='Skill-box-img'/>
            </div>
            <div className='Skill-box-bottom'>
              <p>CSS</p>
            </div>
          </div>
          <div className='Skill-box'>
            <div className='Skill-box-top'>
              <img src='../JavaScript-logo.png' alt='JavaScript logo.' className='Skill-box-img'/>
            </div>
            <div className='Skill-box-bottom'>
              <p>JS</p>
            </div>
          </div>
          <div className='Skill-box'>
          <div className='Skill-box-top'>
            <img src='../c-logo.png' alt='C logo.' className='Skill-box-img'/>
          </div>
            <div className='Skill-box-bottom'>
              <p>C</p>
            </div>
          </div>
        </div>
      </header>
      <header className='App-header'>
        <span className='Profile'>
          <span className='Header-circle'>
            <img className='Header-mario-foto' src='../mario-foto.jpeg' alt='Uma foto do meu rostoo' />
          </span>
          <div className='Header-texto'>
            <p className='Header-nome' >Mário Xaxá</p>
            <p className='Header-posicao'>Desenvolvedor Front-End Junior</p>
          </div>
          <div className='Header-contatos'>
          </div>
        </span>
      </header>
      <header className='App-header Skills'>
        <div className='Skill-nome'>Conhecimentos</div>
        <div className='Skill-container'>
          <div className='Skill-box'>
            <div className='Skill-box-top'>
              <img src='../react-logo.png' alt='React logo.' className='Skill-box-img'/>
            </div>
            <div className='Skill-box-bottom'>
              <p>React</p>
            </div>
          </div>
          <div className='Skill-box'>
            <div className='Skill-box-top'>
              <img src='../Bootstrap_logo.png' alt='Bootstrap logo.' className='Skill-box-img'/>
            </div>
            <div className='Skill-box-bottom'>
              <p>BootStrap</p>
            </div>
          </div>
          <div className='Skill-box'>
            <div className='Skill-box-top'>
              <img src='../blender-logo.png' alt='Blender logo.' className='Skill-box-img'/>
            </div>
            <div className='Skill-box-bottom'>
              <p>Blender</p>
            </div>
          </div>
          <div className='Skill-box'>
          <div className='Skill-box-top'>
            <img src='../autocad-logo.png' alt='AutoCad logo.' className='Skill-box-img'/>
          </div>
            <div className='Skill-box-bottom'>
              <p>Autocad</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
