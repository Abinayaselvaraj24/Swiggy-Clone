import ItemList from "./ItemList"
const ItemCategory =(props)=>{
    const category = props.category
    return(
        <div className="category-container" style={{color:"black"}}>
        <div >
            <div className="category-title" style={{color:"black",fontWeight:"bolder"}}>{category.card.card.title}</div>
        </div>
        <div>
        {category.card.card.itemCards.map((item)=>{
            return <ItemList item={item}/>
        })}
        </div>
        </div>
    )
}
export default ItemCategory