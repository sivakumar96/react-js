import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import resList from "../utils/mockData1"
import Shimmer from "./Shimmer";
import { Link } from "react-router";
const Body = () => {
    // local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        fetchData();
    }, [])



    let listOfRestaurants2 = [{
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "16650",
                            "name": "Behrouz Biryani",
                            "cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
                            "locality": "Jayanagar Colony Kaman",
                            "areaName": "Venkat Nagar Colony",
                            "costForTwo": "₹500 for two",
                            "cuisines": [
                                "Biryani",
                                "Hyderabadi",
                            ],
                            "avgRating": 3.8,
                            "parentId": "1803",
                            "avgRatingString": "3.8",
                            "totalRatingsString": "9.9K+",
                            "promoted": true,
                            "adTrackingId": "cid=30318695~p=2~adgrpid=30318695#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=16650~plpr=COLLECTION~eid=ca943338-a399-45cb-ae7c-3a64d67955d8~srvts=1750589491057~collid=83639",
                            "sla": {
                                "deliveryTime": 31,
                                "lastMileTravel": 2.6,
                                "serviceability": "SERVICEABLE",
                                "slaString": "30-35 mins",
                                "lastMileTravelString": "2.6 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-06-22 23:59:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "newg.png",
                                        "description": "Gourmet"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "imageId": "newg.png",
                                                    "description": "Gourmet"
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹69"
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "30318695"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=16650&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
        {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1691",
                            "name": "Chaitanya Food Court",
                            "cloudinaryImageId": "y4nzvmpofaplssjzpghf",
                            "locality": "Kukatpally",
                            "areaName": "Kukatpally",
                            "costForTwo": "₹600 for two",
                            "cuisines": [
                                "Biryani",
                                "Chinese",
                                "Andhra",
                                "North Indian"
                            ],
                            "avgRating": 4.5,
                            "parentId": "1865",
                            "avgRatingString": "4.5",
                            "totalRatingsString": "241K+",
                            "sla": {
                                "deliveryTime": 12,
                                "lastMileTravel": 0.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "10-15 mins",
                                "lastMileTravelString": "0.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-06-23 00:45:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "bolt/big%20RX%20listing%2018px.png",
                                        "description": "bolt!"
                                    }
                                ],
                                "textExtendedBadges": [
                                    {
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available",
                                        "fontColor": "#7E808C"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "bolt!",
                                                    "imageId": "bolt/big%20RX%20listing%2018px.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "shortDescription": "options available",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "description": ""
                                                }
                                            }
                                        ]
                                    },
                                    "textBased": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "40% OFF",
                                "subHeader": "UPTO ₹80",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "25K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=1691&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            }]

const fetchData = async () => {
    const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
    const json = await data.json();
    const getRestaurants = json.data.cards.filter(item => {
        if(item.card?.card['@type'].includes("type.googleapis.com/swiggy.presentation.food.v2.Restaurant")){
            return true
        }
    })
    console.log("getRestaurants", getRestaurants) 
    // setListOfRestaurants(json.data.cards)
    setListOfRestaurants(getRestaurants)
    setFilteredRestaurant(getRestaurants)
}

// if(listOfRestaurants.length === 0){
//     return (<Shimmer />)
// }
    

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            <button onClick={() => {
                console.log(searchText)
                const filteredRestaurant = listOfRestaurants.filter((res) => res?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
               
                setFilteredRestaurant(filteredRestaurant)
            }}>search</button>
        </div>
        <button className="filter-btn" onClick={() => { 
            const filteredList = listOfRestaurants.filter((res) => res?.card?.card?.info.avgRating > 4)
            console.log("filteredList", filteredList)
            setFilteredRestaurant(filteredList)
            
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
            filteredRestaurant.map(restaurent => 
            <Link to={"/restaurants/"+restaurent.card.card.info.id} key={restaurent.card.card.info.id}><RestaurantCard resData={restaurent.card} /></Link>
        )
        }
      </div>
    </div>
  );
};

export default Body;