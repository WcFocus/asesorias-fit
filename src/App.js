import './App.css';
import Contacto from './componentes/Contacto';
import Home from './componentes/Home';
import Nabvar from './componentes/Nabvar';
import Planes from './componentes/Planes';
import Quiensoy from './componentes/Quiensoy';

function App() {
  return (
    <div className="App">
      <Nabvar/>
      <Home/>
      <Planes/>
      <Quiensoy/>
      <Contacto/>
    </div>
  );
}

export default App;
