import './ProfileArea.css'
import {useContext} from 'react';
import userContext from '../contexts/UserContext.js'

function Menu() {

    const {currentUser, setCurrentUser} = useContext(userContext)

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
        setCurrentUser({id: 2, name: "user", rights: "buy"})
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

    let greeting = getGreeting()
    let button = getButton()

    return (
        <div className="profile-container">
            <p>{greeting}</p>
            {button}
        </div>
    );
}

export default Menu;