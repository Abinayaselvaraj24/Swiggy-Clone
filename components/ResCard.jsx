import { Link } from "react-router-dom"
const ResCard=(props)=>{
    const{restaurant}=props
return(

<div className='res-card' style={{textDecoration:"none"}}>
    
            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+restaurant.cloudinaryImageId}></img>
            <Link to={"/restaurant/"+restaurant.id}>
            <div style={{textDecoration:"none",color:"black"}}>{restaurant.name}</div>
            <div style={{textDecoration:"none",color:"black"}}>🌟{restaurant.avgRatingString} | {restaurant.costForTwo}</div>
            <br></br>
            <div style={{textDecoration:"none",color:"black"}}>{restaurant.cuisines?.join(", ")}</div>
            </Link>
</div>
)
}

export default ResCard