import './ProfileArea.css'
import {useState, useContext} from 'react';
import UserContext from '../contexts/UserContext.js'
import LoginContext from '../contexts/LoginContext.js'
import LoginPopup from './LoginPopup.js'

function ProfileArea() {

    const {currentUser, setCurrentUser} = useContext(UserContext)
    const [loginPopupHidden, setLoginPopupHidden] = useState(true)

    function isNotLoggedIn() {
        let rightsIfNotLoggedIn = "none"
        return currentUser.rights === rightsIfNotLoggedIn
    }

    function getGreeting() {
        if(isNotLoggedIn()) {
            return "Currently not logged in."
        } else {
            let returnVariable = "Welcome " + currentUser.name + "!"
            return returnVariable
        }
    }

    function login() {
        setLoginPopupHidden(false)
        /*setCurrentUser({id: 2, name: "user", rights: "buy"})*/
    }

    function logout() {
        setCurrentUser({id: 1, name: "guest", rights: "none"})
    }

    function getButton() {
        if(isNotLoggedIn()) {
            return (
                <button className="login-button" onClick={login}>
                    Login
                </button>
            );
        } else {
            return (
                <button className="logout-button" onClick={logout}>
                    Logout
                </button>
            );
        }
    }

    function getLoginPopup() {
        if(loginPopupHidden) {
            return null
        } else {
            return (
                <LoginContext.Provider value={{setCurrentUser, setLoginPopupHidden}}>
                    <LoginPopup exit={setLoginPopupHidden}/>
                </LoginContext.Provider>
            );
        }
    }

    let greeting = getGreeting()
    let button = getButton()
    let loginPopupPlaceholder = getLoginPopup()

    return (
        <div className="profile-container">
            <p>{greeting}</p>
            {button}
            {loginPopupPlaceholder}
        </div>
    );
}

export default ProfileArea;