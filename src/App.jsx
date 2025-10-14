import { useState } from 'react';
import Lista from './components/Lista';
import './App.css';
 
function App() {
  const [itens, setItens] = useState(['Rudies Flacko', 'Dessiiik', 'Diviza', 'BigRush', 'OffShino', 'M Dep', 'Derek', 'Pluglip', 'Virgingod', 'Neckklace']);
  const [novoItem, setNovoItem] = useState('');
  const [buscarItem, setBuscarItem ] = useState('')
 
 
  function adicionarItem() {
    if (novoItem.trim() !== '') {
      setItens([...itens, novoItem]);
      setNovoItem('');
    }

  }
 
  function excluirItem(index) {
 
    const novosItens = itens.filter((_, i) => i !== index);
    setItens(novosItens);
 
  }

    function busca() {
    return itens.filter(item =>
    item.toLowerCase().includes(buscarItem.toLowerCase())
    );
  }

 
  return (
    <div className='App'>
      <h1>Lista</h1>
 
      <input
        type="text"
        placeholder='Digite um novo item'
        className='campo'
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
 
      />
      <button className='adicionar' onClick={adicionarItem}>Adicionar</button>

        <input
        type="text"
        placeholder="Buscar item"
        className='campo'
        value={busca}
        onChange={(e) => setBuscarItem(e.target.value)}
      />
  
 
         <Lista itens={itens} busca={busca} onExcluir={excluirItem} />
    </div>
  )
}
 
export default App