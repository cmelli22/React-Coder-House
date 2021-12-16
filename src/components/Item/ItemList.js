import Item from "./Item"
const ItemList = ({items}) => {

    return(
        items.map((element, index) => {
            return <Item C tittle={element.tittle} precio={element.price} imagen={element.pictureUrl} />
        })
    )
}

export default ItemList