import React, { useEffect } from "react"
import { GifState } from "../context/GifContext"
import Gif from "../components/Gif"

const Home = () => {
  const { giphy, gifs, filter, setGifs, favourites } = GifState()

  const fetchTrendingGIFs = async () => {
    const { data } = await giphy.trending({
      limit: 20,
      type: filter,
      rating: "g",
    })

    setGifs(data)
  }

  useEffect(() => {
    fetchTrendingGIFs()
  }, [filter])

  return (
    <div>
      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />
      {/* <FilterGif /> */}

      <div>
        {gifs.map((gif) => {
          return <Gif gif={gif} />
        })}
      </div>
    </div>
  )
}

export default Home
