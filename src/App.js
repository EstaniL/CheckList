import './App.css';
import tareasLogo from './imagenes/tareas.png'
import Tarea from './componentes/Tarea';
import './hojas-de-estilo/Tarea.css'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img src={tareasLogo}
             className='logo' />
      </div>
      <div className='tareas-lista-ppal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );/*texto='Aprender React' , Aprende React es el valor pasado*/
}

export default App;
