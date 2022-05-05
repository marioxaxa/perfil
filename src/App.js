import './App.css';
import Conhecimentos from './Components/conhecimentos';
import ProfileHeader from './Components/header';
import Linguagens from './Components/linguagens';

function App() {
  return (
    <div className="App">
      <header className='App-header Skills'>
        <div className='Skill-nome'>Linguagens</div>
        <Linguagens />
      </header>
      <ProfileHeader />
      <header className='App-header Skills'>
        <div className='Skill-nome'>Conhecimentos</div>
        <Conhecimentos />
      </header>
    </div>
  );
}

export default App;
