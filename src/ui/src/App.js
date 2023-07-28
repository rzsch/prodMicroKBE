import './App.css';
import ProductArea from './components/mainPage/ProductArea.js'
import BasketArea from './components/mainPage/BasketArea.js'

function App() {
  return (
    <div className="App">
        <BasketArea/>
        <ProductArea/>
    </div>
  );
}

export default App;
