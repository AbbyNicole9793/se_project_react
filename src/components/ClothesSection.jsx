import { useContext } from "react"

import ItemCard from "./ItemCard.jsx"
import "../blocks/ClothesSection.css"
import CurrentUserContext from "../contexts/CurrentUserContext.jsx"

function ClothesSection( {handleCardPreview, clothingItems, handleAddGarment}) {
    const currentUser = useContext(CurrentUserContext);

    return (<div className="clothes">
        <div className="clothes__section">
            <p className="clothes__tag">Your items</p>
            <button className="clothes__button" onClick={handleAddGarment}>+ Add New</button>
            
        </div>
         <ul className="clothes-section__items">
          {clothingItems
            .filter((item) => item.owner === currentUser?._id)
            .map((item) => {
                console.log(item)
                return (
                <ItemCard
                  key={item._id}
                  item={item}
                  handleCardPreview={handleCardPreview}
                />
            )
            })}
        </ul>
    </div>)
}

export default ClothesSection