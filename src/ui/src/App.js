import './App.css';
import ProductFactory from './components/factories/productFactory.js'
import Header from './components/header/header.js'
import {useState} from 'react';

function App() {
    const products = [
        {id: 1, name: 'ASUS ExpertCenter C2223HE', price: 270, brand: 'Asus', size: 21.45, hdmi: 1, dp: 0, vga: 0, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/displays-desktops/monitors/business/asus-expertcenter-c2223he/"},
        {id: 2, name: 'Designo MX279HS', price: 240, brand: 'Asus', size: 27, hdmi: 2, dp: 0, vga: 1, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/displays-desktops/monitors/designo/designo-mx279hs/"},
        {id: 3, name: 'ASUS VZ279HEG1R', price: 200, brand: 'Asus', size: 27, hdmi: 1, dp: 0, vga: 1, dvi: 0, usb: 0, aux: 0, link: "https://www.asus.com/de/displays-desktops/monitors/gaming/vz279heg1r/"},
        {id: 4, name: 'TUF Gaming VG32UQA1A', price: 670, brand: 'Asus', size: 31.5, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 2, aux: 1, link:"https://www.asus.com/de/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg32uqa1a/"},
        {id: 5, name: 'TUF Gaming VG258QM', price: 515, brand: 'Asus', size: 24.5, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/de/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg258qm/"},
        {id: 6, name: 'INZONE M9', price: 1000, brand: 'Sony', size: 27, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 3, aux: 1, link: "https://www.sony.de/electronics/gaming-monitore/inzone-m9"},
        {id: 7, name: 'LG 27GP850P-B', price: 320, brand: 'LG', size: 27, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 2, aux: 1, link: "https://www.lg.com/de/monitore/lg-27gp850p-b"},
    ];

    let productsInCart = [];

    const [shoppingCart, setShoppingCart] = useState(productsInCart)

    function addNewProductToCart(idToAdd) {
        let indexOfProductToAdd = products.findIndex(product => product.id === idToAdd)
        let itemToAddToCart = products[indexOfProductToAdd]
        itemToAddToCart.amount = 1
        return itemToAddToCart
    }

    function isProductAlreadyInCart(indexInCart) {
        const notInCart = -1
        return indexInCart === notInCart
    }

    function addToCart(idToAdd) {
        let newShoppingCart = shoppingCart.slice(0)
        let indexInCart = shoppingCart.findIndex(product => product.id === idToAdd)
        if (isProductAlreadyInCart(indexInCart)) {
            let itemToAddToCart = addNewProductToCart(idToAdd)
            newShoppingCart.push(itemToAddToCart)
        } else {
            let newAmount = shoppingCart[indexInCart].amount + 1
            newShoppingCart[indexInCart].amount = newAmount
        }
        setShoppingCart(newShoppingCart)
    }

    function isAmountOne(amount) {
        return amount === 1
    }

    function removeFromCart(idToRemove) {
        let indexInCart = shoppingCart.findIndex(product => product.id === idToRemove)
        let amountInCart = shoppingCart[indexInCart].amount
        if(isAmountOne(amountInCart)) {
            setShoppingCart(shoppingCart.filter(product => product.id !== idToRemove))
        } else {
            let newShoppingCart = shoppingCart.slice(0)
            newShoppingCart[indexInCart].amount = amountInCart - 1
            setShoppingCart(newShoppingCart)
        }

    }

    function clearCart() {
        let emptyList = [];
        setShoppingCart(emptyList)
    }

  return (
    <div className="App">
        <Header
            inCart={shoppingCart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
        />
        <ProductFactory
            products={products}
            addToCart={addToCart}
        />
    </div>
  );
}

export default App;
