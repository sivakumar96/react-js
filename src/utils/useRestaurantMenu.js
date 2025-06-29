import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    //  fetch data

    useEffect(() => {
        fetchData();
    }, [])


    fetchData = async () => {
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
    return resInfo
}

export default useRestaurantMenu;