import { GiphyFetch } from "@giphy/js-fetch-api"
import { createContext, useContext, useEffect, useState } from "react"

export const GifContext = createContext()

const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([])
  const [filter, setFilter] = useState("gifs")
  const [favourites, setFavourites] = useState([])

   const addToFavourites = (id) => {
     console.log(id)
     if (favourites.includes(id)) {
       // If the item is already in favorites, remove it
       const updatedFavourites = favourites.filter((itemId) => itemId !== id)
       localStorage.setItem("favouriteGIFs", JSON.stringify(updatedFavourites))
       setFavourites(updatedFavourites)
     } else {
       // If the item is not in favorites, add it
       const updatedFavourites = [...favourites]
       updatedFavourites.push(id)
       localStorage.setItem("favouriteGIFs", JSON.stringify(updatedFavourites))
       setFavourites(updatedFavourites)
     }
   }
  
    useEffect(() => {
      const favourites = JSON.parse(localStorage.getItem("favouriteGIFs")) || []
      setFavourites(favourites)
    }, [])



  const giphy = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY)

  return (
    <GifContext.Provider
      value={{ giphy, gifs, setGifs, filter, setFilter, favourites,addToFavourites }}
    >
      {children}
    </GifContext.Provider>
  )
}

export const GifState = () => {
  return useContext(GifContext)
}

export default GifProvider
