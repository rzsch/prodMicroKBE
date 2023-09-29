import {useContext} from 'react';
import PopupContext from '../contexts/PopupContext.js';
import UserContext from '../contexts/UserContext.js';
import LoginPopup from '../popups/LoginPopup.js';
import EditPopup from '../popups/EditPopup.js';

function ProfileArea() {

    const {currentUser, setCurrentUser} = useContext(UserContext)
    const setPopupPlaceholder = useContext(PopupContext)

    function addProduct() {
        const noValidId = -1
        setPopupPlaceholder(<EditPopup idOfProductToEdit={noValidId}/>)
    }


    function isNotLoggedIn() {
        let rightsIfNotLoggedIn = "none"
        return currentUser.rights === rightsIfNotLoggedIn
    }

    function getGreeting() {
        if(isNotLoggedIn()) {
            return "Currently not logged in."
        } else {
            let returnVariable = "Welcome, " + currentUser.name + "!"
            return returnVariable
        }
    }

    function login() {
        window.location.replace("http://localhost:8080/react")
        setPopupPlaceholder(<LoginPopup/>)
    }

    function logout() {
        window.location.replace("http://localhost:3000")
        setCurrentUser({id: 1, name: "guest", rights: "none"})
    }

    function getProfileContent() {
        if(isNotLoggedIn()) {
            return (
                <button className="big-green-button sidebar-button" onClick={login}>
                    Login
                </button>
            );
        } else {
            return (
                <div>
                    {currentUser.rights !=="none" && (
                        <div className='gif-container'>
                        <img src="https://media.giphy.com/media/11shDO8NnZDYpa/giphy.gif" alt="admin-hello" />
                        </div>
                    )}
                    {currentUser.rights ==="none" && (
                        <div className='gif-container'>
                        <img src="https://media.giphy.com/media/fTI9mBoWLef8k/giphy.gif" alt="user-hello" />
                        </div>
                    )}
                    <button className="small-green-button" onClick={addProduct}>
                        Add Item to Product List
                    </button>
                    <button className="big-yellow-button sidebar-button" onClick={logout}>
                        Logout
                    </button>
                </div>
            );
        }
    }

    let greeting = getGreeting()
    let profileContent = getProfileContent()

    return (
        <div className="profile-container">
            <p>{greeting}</p>
            {profileContent}
        </div>
    );
}

export default ProfileArea;