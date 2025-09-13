import ItemCard from "./ItemCard.jsx"
import { defaultClothingItems } from "../utils/clothingItems.js"
import "../blocks/ClothesSection.css"

function ClothesSection( {handleCardPreview}) {
    return <div className="clothes">
        <div className="clothes__section">
            <p className="clothes__tag">Your items</p>
            <button className="clothes__button">+ Add New</button>
        </div>
         <ul className="clothes-section__items">
          {defaultClothingItems
            .map((item) => {
                return (
                <ItemCard
                  key={item._id}
                  item={item}
                  handleCardPreview={handleCardPreview}
                />
            )
            })}
        </ul>
    </div>
}

export default ClothesSection