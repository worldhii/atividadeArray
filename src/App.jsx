import './App.css'
import Lista from './components/Lista'

function App(){

const meusItens =['React', 'Angular', 'Typescript']

return(
  <div className='App'>
    <h1>REDERIZÇÃO DE LISTA</h1>
    <h3>Lista das coisas</h3>
    <p>React</p>
    <p>Angular</p>
    <p>Typescript</p>
    <Lista itens = {meusItens}/>
     <Lista itens = {[]}/>
  </div>
)

}

export default App;