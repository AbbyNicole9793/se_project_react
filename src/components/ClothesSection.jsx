import ItemCard from "./ItemCard.jsx"
import "../blocks/ClothesSection.css"

function ClothesSection( {handleCardPreview, clothingItems, handleAddGarment}) {
    return (<div className="clothes">
        <div className="clothes__section">
            <p className="clothes__tag">Your items</p>
            <button className="clothes__button" onClick={handleAddGarment}>+ Add New</button>
            
        </div>
         <ul className="clothes-section__items">
          {clothingItems
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