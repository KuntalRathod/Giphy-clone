import React, { useEffect, useState } from "react"
import { GifState } from "../context/GifContext"
import Gif from "../components/Gif"

const Favourites = () => {
  const { giphy, favourites } = GifState()

  const [favouriteGIFs, setFavouriteGIFs] = useState([])

  const fetchFavouriteGIFs = async () => {
    const { data: gifs } = await giphy.gifs(favourites)
    setFavouriteGIFs(gifs)
  }

  useEffect(() => {
    fetchFavouriteGIFs()
  }, [])
  return (
    <div className="mt-2">
      <span className="faded-text">My Favourites</span>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2">
        {favouriteGIFs.map((gif) => (
          <Gif gif={gif} key={gif.id} />
        ))}
      </div>
    </div>
  )
}

export default Favourites
