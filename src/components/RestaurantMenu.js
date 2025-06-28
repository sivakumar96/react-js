import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants.js";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams();
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId)
        const json = await data.json();


        const getRes = json.data.cards.filter(item => {
        if(item.card?.card['@type'].includes("type.googleapis.com/swiggy.presentation.food.v2.Restaurant")){
            return true
        }
    })

        console.log("getRes", getRes)

        setResInfo(getRes)
    }

    if(resInfo === null) {
        return <Shimmer />
    }

    const {name, costForTwoMessage, cuisines} = resInfo[0]?.card?.card?.info
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <h3>{costForTwoMessage}</h3>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;