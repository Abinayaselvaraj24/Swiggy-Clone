import { useEffect, useState } from 'react';
import ResCard from './ResCard';
import './component.css';
const restaurants=[{
    "id": "324129",
    "name": "Hmr - Grand Kitchen",
    "cloudinaryImageId": "sxo9ssdzcunquvtrcvc6",
    "locality": "Dr Nanjappa Road",
    "areaName": "Gandhipuram",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Biryani",
      "South Indian",
      "North Indian",
      "Chinese",
      "Tandoor"
    ],
    "avgRating": 4.4,
    "parentId": "96262",
    "avgRatingString": "4.4",
    "totalRatingsString": "5K+",
},
{"id": "348158",
"name": "Covai Anganan Biriyani House",
"cloudinaryImageId": "riylxbx0j4kzeii1sef7",
"locality": "VCV Layout",
"areaName": "RS Puram",
"costForTwo": "₹300 for two",
"cuisines": [
"Biryani",
"South Indian",
"Chinese"
],
"avgRating": 4.3,
"parentId": "230662",
"avgRatingString": "4.3",
"totalRatingsString": "1K+"},{"id": "570239",
"name": "Hotel Vignesh",
"cloudinaryImageId": "qxhqhs4ugx7lztr0hoaf",
"locality": "Bodipalayam Road",
"areaName": "malumichampatti",
"costForTwo": "₹100 for two",
"cuisines": [
  "South Indian",
  "Indian",
  "Chinese"
],
"avgRating": 4.4,
"veg": true,
"parentId": "342337",
"avgRatingString": "4.4",
"totalRatingsString": "1K+",},{"id": "613261",
"name": "Srinika Home Made Foods",
"cloudinaryImageId": "bce3f5ebd3ae7496bd8ed91431baa06a",
"locality": "Seerapalayam",
"areaName": "Malumichampatti",
"costForTwo": "₹1000 for two",
"cuisines": [
  "South Indian",
  "North Indian"
],
"avgRating": 4.7,
"parentId": "456373",
"avgRatingString": "4.7",
"totalRatingsString": "100+"},{"id": "166194",
"name": "Night Eat",
"cloudinaryImageId": "ro0wg0kl0nnpxzotr4oc",
"locality": "Guruvayur Nagar",
"areaName": "Podanur",
"costForTwo": "₹200 for two",
"cuisines": [
  "Chinese",
  "South Indian",
  "Biryani"
],
"avgRating": 3.8,
"parentId": "4175",
"avgRatingString": "3.8",
"totalRatingsString": "1K+"},{"id": "618665",
"name": "JMG Restaurant",
"cloudinaryImageId": "wuqjbxexfakjxvuon2tu",
"locality": "Pollachi Main Road",
"areaName": "malumichampatti",
"costForTwo": "₹350 for two",
"cuisines": [
  "North Indian",
  "Chinese",
  "Beverages"
],
"avgRating": 4.3,
"parentId": "368686",
"avgRatingString": "4.3",
"totalRatingsString": "500+",}]
const ResContainer=()=>{
  const [restaurantsdata,setRestaurantsdata]=useState([]);
  const [searchText, setSearchText] = useState('');
  const [list,setlist]=useState()
  console.log(searchText)

  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=async()=>{
      const res=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const json= await res.json()
      // console.log(json)
      setRestaurantsdata(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      setlist(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  
  }
  if(restaurantsdata.length===0){
    return <div><h1>Loading....</h1></div>
  }
  const filterTopRes=()=>{
  const result=restaurantsdata.filter((res)=>{
    return res.info.avgRating > 4
  })
  console.log(result)
  setlist(result)
}
const updateSearchText=(e)=>{
  setSearchText(e.target.value)
  searchRestaurant(e.target.value)
}
const searchRestaurant=(val)=>{
  const result=restaurantsdata.filter((res)=>{
  return res.info.name.toLowerCase().includes(val.toLowerCase())
})
setlist(result)
}

    return(
      <>
      <div className='button-container'>
        <button  onClick={filterTopRes}>Top Restaurants</button>
      </div>
      <div className='button-container'>
  <input
  value={searchText} onChange={updateSearchText}
  />
  <button  onClick={searchRestaurant}>Search</button>
</div>
<div className='restaurant-container'>
          {list.map((res)=>{
            return <ResCard key={res.info.id} restaurant={res.info}/>
          })}
        
        </div>
      </>
    )
    

}

export default ResContainer
