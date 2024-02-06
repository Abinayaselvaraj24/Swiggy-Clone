// const  useResDetails=()=>{
//     const params = useParams()
//     const[details,setDetails]=useState({})
//     const[categories,setCategories]=useState([])
//     console.log(params)

//     useEffect(() => {
//         FetchDetails();
//     }, [])

//     const FetchDetails = async () => {
//         const res = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=331001');
//         const json = await res.json()
//         // setRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
//         // setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

//         const details = json.data.cards[0].card.card.info
//         const categories = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
//         setDetails(details);
//         console.log(categories);
//         const filteredCategories = categories.filter((item)=>{
//             return item.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
//         })
//         setCategories(filteredCategories)

//     }
// }
// export default useResDetails