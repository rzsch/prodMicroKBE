import './App.css';
import ProductArea from './components/factories/productFactory.js'
import Header from './components/header/header.js'

function App() {
  return (
    <div className="App">
        <Header/>
        <ProductArea/>
    </div>
  );
}

export default App;
