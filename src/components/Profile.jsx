import SideBar from "./SideBar"
import ClothesSection from "./ClothesSection"
import "../blocks/profile.css"

function Profile({ handleCardPreview }) {
    return <div className="profile">
        <section className="profile__sidebar">
        <SideBar />
        </section>
        <section className="profile__clothing-items">
            <ClothesSection 
            handleCardPreview={handleCardPreview}/>
        </section>
    </div>
}

export default Profile