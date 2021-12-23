import Item from "./Item"
const ItemList = ({items}) => {

    return(
        
        items.map((element, index) => {

            return (
                <Item id={element.id} tittle={element.tittle} precio={element.price} imagen={element.pictureUrl} />
            )
        })
    )
}

export default ItemList