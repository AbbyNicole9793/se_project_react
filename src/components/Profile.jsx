import SideBar from "./SideBar"
import ClothesSection from "./ClothesSection"
import "../blocks/Profile.css"

function Profile({ handleCardPreview, clothingItems }) {
    return <div className="profile">
        <section className="profile__sidebar">
        <SideBar />
        </section>
        <section className="profile__clothing-items">
            <ClothesSection 
            handleCardPreview={handleCardPreview} 
            clothingItems={clothingItems}/>
        </section>
    </div>
}

export default Profile