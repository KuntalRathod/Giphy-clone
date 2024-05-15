import { GiphyFetch } from "@giphy/js-fetch-api"
import { createContext, useContext, useState } from "react"

export const GifContext = createContext()

const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([])
  const [filter, setFilter] = useState("gifs")
  const [favourites, setFavourites] = useState([])

   const addToFavorites = (id) => {
     console.log(id)
     if (favourites.includes(id)) {
       // If the item is already in favorites, remove it
       const updatedFavourites = favourites.filter((itemId) => itemId !== id)
       localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavourites))
       setFavourites(updatedFavourites)
     } else {
       // If the item is not in favorites, add it
       const updatedFavourites = [...favourites]
       updatedFavourites.push(id)
       localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavourites))
       setFavourites(updatedFavourites)
     }
   }


  const giphy = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY)

  return (
    <GifContext.Provider
      value={{ giphy, gifs, setGifs, filter, setFilter, favourites }}
    >
      {children}
    </GifContext.Provider>
  )
}

export const GifState = () => {
  return useContext(GifContext)
}

export default GifProvider
