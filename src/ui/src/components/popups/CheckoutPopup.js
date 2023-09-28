import React, { useContext, useState } from 'react';
import PopupContext from '../contexts/PopupContext.js';

function LoginPopup() {
    const setPopupPlaceholder = useContext(PopupContext);

    // State variables
    const [cardNumber, setCardNumber] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle card number input change
    const handleCardNumberChange = (event) => {
        const { value } = event.target;
        setCardNumber(value);
    };

    // Function to validate the card number
    const validateCardNumber = () => {
        if (cardNumber.length === 10 && /^\d+$/.test(cardNumber)) {
            setMessage('Bought');
        } else {
            setMessage('Card number doesn\'t exist');
        }
    };

    // Function to close the popup
    const closePopup = () => {
        setPopupPlaceholder(null);
    };

    return (
        <div className="blurred-background">
            <div className="form-container">
                <div className="form-header">
                    <button className="close-popup" onClick={closePopup}>
                        <div className="close-popup-x"></div>
                        <div className="close-popup-x"></div>
                    </button>
                </div>
                <div className="form-area">
                    <input
                        type="text"
                        placeholder="Enter card number"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                    />
                    <button className="buy-button" onClick={validateCardNumber}>
                        Buy
                    </button>
                    {message === 'Bought' && (
                    <><div className="gif-container">
                            <img src="https://i.imgur.com/L9zEGPq.gif" alt="money" />
                        </div><div className="message">{message}</div></>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginPopup;
