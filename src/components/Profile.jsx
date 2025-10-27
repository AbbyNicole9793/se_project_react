import SideBar from "./SideBar"
import ClothesSection from "./ClothesSection"
import "../blocks/Profile.css"

function Profile({ handleCardPreview, clothingItems, handleAddGarment, setActiveModal, handleLogout }) {
    return (<div className="profile">
        <section className="profile__sidebar">
        <SideBar setActiveModal={setActiveModal} handleLogout={handleLogout}/>
        </section>
        <section className="profile__clothing-items">
            <ClothesSection 
            handleCardPreview={handleCardPreview} 
            clothingItems={clothingItems}
            handleAddGarment={handleAddGarment}/>
        </section>
    </div>)
}

export default Profile