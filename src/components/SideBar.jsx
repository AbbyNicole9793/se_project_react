import { useContext } from "react"
import avatar from "../images/avatar.svg"
import "../blocks/SideBar.css"
import CurrentUserContext from "../contexts/CurrentUserContext"

function SideBar({ setActiveModal, handleLogout }) {
    const currentUser = useContext(CurrentUserContext)
    const userInitial = currentUser?.name
        ? currentUser.name.charAt(0).toUpperCase()
        : "";

    return (
        <div className="sidebar">
        <div className="sidebar__first-block">
            {currentUser?.avatar ? (
                <img className="sidebar__avatar" src={currentUser.avatar} alt={currentUser.name} />
            ) : (<div className="sidebar__avatar-placeholder">
                {userInitial}
            </div>)}
            <p className="sidebar__username">{currentUser?.name || "Anonymous User"}</p>
        </div>
        <button
            className="sidebar__edit-button"
            onClick={() => setActiveModal("edit-profile")}
        >
            Change profile data
        </button>
        <button className="sidebar__logout" onClick={handleLogout} >
            Log out
        </button>
    </div>
    )
}

export default SideBar