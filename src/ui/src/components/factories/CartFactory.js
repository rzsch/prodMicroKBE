import ItemList from './itemTemplates/ItemList.js';
import {useContext} from 'react';
import PopupContext from '../contexts/PopupContext.js';
import CartContext from '../contexts/CartContext.js';
import CheckoutPopup from '../popups/CheckoutPopup.js';

function CartFactory() {

    const {shoppingCart, setShoppingCart} = useContext(CartContext)
    const setPopupPlaceholder = useContext(PopupContext)

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

    function checkout() {
        setPopupPlaceholder(<CheckoutPopup/>)
    }

    return (
        <div>
            <div className="cart-title">
                Cart
            </div>
            {monitorsInCart.map(monitor=> <ItemList key={monitor.id} values={monitor} removeFromCart={removeFromCart} />)}
            <div className="cart-total">
                Total Items: {productsInCart}
                <button className="small-button remove-all-from-cart" onClick={clearCart}>
                    remove all
                </button>
                <p className="cart-total-price">Total Price: {totalPrice} €</p>
            </div>
            <button className="big-yellow-button sidebar-button" onClick={checkout}>
                to checkout
            </button>
        </div>
   );
}

export default CartFactory;