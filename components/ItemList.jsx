

const ItemList=(props)=>{
    const {item}=props
    // console.log(category)

    return(
        <div>
        <div className="">{item.card.info.name}-{item.card.info.price}</div>
        <div>{item.card.info.description}</div>
        </div>
    )
}
export default ItemList