import ItemList from './itemTemplates/ItemList.js'
import './CartFactory.css';
import {useContext} from 'react';
import CartContext from '../contexts/CartContext.js'

function CartFactory() {

    const {shoppingCart, setShoppingCart} = useContext(CartContext)

    let monitorsInCart = shoppingCart

    let totalPrice = 0;
    let productsInCart = 0
    for(let index = 0; index < monitorsInCart.length; index++) {
        let priceTimesAmount = monitorsInCart[index].price * monitorsInCart[index].amount
        totalPrice += priceTimesAmount
        productsInCart += monitorsInCart[index].amount
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
        <div>
            <div className="cart-title">
                Cart
            </div>
            {monitorsInCart.map(monitor=> <ItemList key={monitor.id} values={monitor} removeFromCart={removeFromCart} />)}
            <div className="cart-total">
                Total Items: {productsInCart}
                <button className="remove-all-from-cart" onClick={clearCart}>
                    remove all
                </button>
                <p className="cart-total-price">Total Price: {totalPrice} €</p>
            </div>
            <button className="buy-cart">
                to checkout
            </button>
        </div>
   );
}

export default CartFactory;