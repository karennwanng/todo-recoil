import Formulario from "./components/Formulario.jsx"
import ListaTarefas from "./components/ListaTarefas.jsx"
import Filtro from "./components/Filtro.jsx"
import './App.css'

function App() {

  return (
    <div className ="container">
      <Formulario />
      <Filtro />
      <ListaTarefas />
    </div>
  )
}

export default App
