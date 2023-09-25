import {useContext} from 'react';
import UserContext from '../contexts/UserContext.js';
import PopupContext from '../contexts/PopupContext.js';

function LoginPopup() {

    const setPopupPlaceholder = useContext(PopupContext)
    const {setCurrentUser} = useContext(UserContext)

    const login = (event) => {
        event.preventDefault()
        const username = event.target.username.value
        if(username === "admin") {
            setCurrentUser({id: 3, name: "admin", rights: "edit-all"})
        } else if (username === "asus") {
            setCurrentUser({id: 4, name: "asus", rights: "edit"})
        } else if (username === "sony") {
            setCurrentUser({id: 5, name: "sony", rights: "edit"})
        } else if (username === "lg") {
            setCurrentUser({id: 6, name: "lg", rights: "edit"})
        } else {
            setCurrentUser({id: 2, name: "user", rights: "buy"})
        }
        setPopupPlaceholder(null)

    }

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
                    <form onSubmit={login}>
                        <label htmlFor="username">Username:</label><br/>
                        <input className="popup-input" type="text" id="username" name="username" placeholder="Username"/><br/><br/>
                        <label htmlFor="password">Password:</label><br/>
                        <input className="popup-input" type="password" id="password" name="password" placeholder="Password"/><br/><br/>
                        <input className="big-green-button" type="submit" value="Login"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPopup;