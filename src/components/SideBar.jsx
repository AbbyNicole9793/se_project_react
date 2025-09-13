import avatar from "../images/avatar.svg"
import "../blocks/SideBar.css"

function SideBar() {
    return <div className="sidebar">
        <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
        <p className="sidebar__username">Terrence Tegegne</p>
    </div>
}

export default SideBar