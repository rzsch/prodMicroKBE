import './LoginPopup.css'
import {useContext} from 'react';
import LoginContext from '../contexts/LoginContext.js'

function LoginPopup() {

    const {setCurrentUser, setLoginPopupHidden} = useContext(LoginContext)

    const login = (event) => {
        const username = event.target.username.value
        if(username === "admin") {
            setCurrentUser({id: 3, name: "admin", rights: "edit"})
        } else {
            setCurrentUser({id: 2, name: "user", rights: "buy"})
        }
        setLoginPopupHidden(true)
    }

    return (
        <div className="blurred-background">
            <div className="form-container">
                <div className="form-header">
                    <button className="close-popup" onClick={() => setLoginPopupHidden(true)} >
                        <div className="close-popup-x"></div>
                        <div className="close-popup-x"></div>
                    </button>
                </div>
                <div className="form-area">
                    <form onSubmit={login}>
                        <label htmlFor="username">Username:</label><br/>
                        <input className="login-input" type="text" id="username" name="username" placeholder="Username"/><br/><br/>
                        <label htmlFor="password">Password:</label><br/>
                        <input className="login-input" type="password" id="password" name="password" placeholder="Password"/><br/><br/>
                        <input className="submit-button" type="submit" value="Login"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPopup;