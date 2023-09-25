import {useContext} from 'react';
import PopupContext from '../contexts/PopupContext.js';

function LoginPopup() {

    const setPopupPlaceholder = useContext(PopupContext)

    function closePopup() {
        setPopupPlaceholder(null)
    }

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
                    todo
                </div>
            </div>
        </div>
    );
}

export default LoginPopup;