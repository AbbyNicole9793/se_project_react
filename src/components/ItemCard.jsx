import "../blocks/ItemCard.css"

function ItemCard({item, handleCardPreview}) {

    const cardPreview = () => {
        handleCardPreview(item)
    }
    return (
        <li className="card">
            <h2 className="card__name">{item.name}</h2>
            <img onClick={cardPreview} className="card__image" src={item.link} alt={item.name}></img>
        </li>
    )
}

export default ItemCard