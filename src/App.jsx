import './App.css';
import ItemListContainter from './components/ItemListContainer';
import NavBar from './components/Title/NavBar';

function App() {
    return (
      <>
        <NavBar  />
        <ItemListContainter texto="Agustin" />
      </>
  );
}

export default App;
