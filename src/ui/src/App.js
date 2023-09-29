import './App.css';
import './css/Buttons.css';
import './css/Popup.css';
import ProductFactory from './components/factories/ProductFactory.js';
import Header from './components/header/Header.js';
import {useState, useEffect} from 'react';
import CartContext from './components/contexts/CartContext.js';
import ProductContext from './components/contexts/ProductContext.js';
import UserContext from './components/contexts/UserContext.js';
import PopupContext from './components/contexts/PopupContext.js';

function App() {

    var productList = [];

    const [products, setProducts] = useState(productList)
    const getProducts = async () => {
        const response = await fetch("http://localhost:8080/products", {method: "GET"});
        setProducts(await response.json());
    }
    useEffect(() => {
        getProducts();
    }, []);

    let productsInCart = [];

    const [shoppingCart, setShoppingCart] = useState(productsInCart)

    const [currentUser, setCurrentUser] = useState({id: 1, name: "guest", rights: "none"})
    useEffect(() => {
        let urlParamUser = window.location.search.split("user=")[1];
        if(!urlParamUser == "") {
            console.log(urlParamUser)
            if(urlParamUser === "admin") {
                setCurrentUser({id: 3, name: "admin", rights: "edit-all"})
            } else if (urlParamUser === "asus") {
                setCurrentUser({id: 4, name: "asus", rights: "edit"})
            } else if (urlParamUser === "sony") {
                setCurrentUser({id: 5, name: "sony", rights: "edit"})
            } else if (urlParamUser === "lg") {
                setCurrentUser({id: 6, name: "lg", rights: "edit"})
            } else {
                setCurrentUser({id: 2, name: "user", rights: "buy"})
            }
        }
    }, []);

    const [popupPlaceholder, setPopupPlaceholder] = useState(null)

    return (
        <div className="App">
            <PopupContext.Provider value={setPopupPlaceholder}>
                <UserContext.Provider value={{currentUser, setCurrentUser}}>
                    <CartContext.Provider value={{shoppingCart, setShoppingCart}}>
                        <ProductContext.Provider value={{products, setProducts}}>
                            {popupPlaceholder}
                            <Header/>
                            <ProductFactory/>
                        </ProductContext.Provider>
                    </CartContext.Provider>
                </UserContext.Provider>
            </PopupContext.Provider>
        </div>
    );
}

export default App;
