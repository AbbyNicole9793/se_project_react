import { useContext } from "react"
import avatar from "../images/avatar.svg"
import "../blocks/SideBar.css"
import CurrentUserContext from "../contexts/CurrentUserContext"

function SideBar({setActiveModal, handleLogout}) {
    const currentUser = useContext(CurrentUserContext)

    return (<div className="sidebar">
        <div className="sidebar__first-block">
        <img className="sidebar__avatar" src={currentUser?.avatar || avatar} alt={currentUser?.name || "User avatar"} />
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
    </div>)
}

export default SideBar