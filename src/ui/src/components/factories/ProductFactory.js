import ItemBox from './itemTemplates/ItemBox.js'
import {useContext} from 'react';
import CartContext from '../contexts/CartContext.js'
import ProductContext from '../contexts/ProductContext.js'


function ProductFactory() {

    const {shoppingCart, setShoppingCart} = useContext(CartContext)
    const {products, } = useContext(ProductContext)

    let monitors = products

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

    return (
        <div className="product-area">
            {monitors.map(monitor => <ItemBox key={monitor.id} values={monitor} addToCart={addToCart}/>)}
        </div>
    );
}

export default ProductFactory;