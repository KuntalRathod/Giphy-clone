import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GifState } from "../context/GifContext"
import Gif from "../components/Gif"

const contentType = ["gifs", "stickers", "texts"]

const SingleGifPage = () => {
  const { type, slug } = useParams()

  //storing the current gif
  const [gif, setGif] = useState({})

  const [relatedGifs, setRelatedGifs] = useState([])

  const { giphy } = GifState()

  const fetchGif = async () => {
    const gifId = slug.split("-")
    const { data } = await giphy.gif(gifId[gifId.length - 1])
    const { data: related } = await giphy.related(gifId[gifId.length - 1], {
      limit: 10,
    })

    setGif(data)
    setRelatedGifs(related)
  }

  useEffect(() => {
    //provided type is valid or not?
    if (!contentType.includes(type)) {
      throw new Error("Invalid Content type")
    }
    fetchGif()
  }, [])

  return <div className="grid grid-cols-4 my-10 gap-4">
    {/* sm: bigger than smaller screens */}
    {/* Sidebar */}
    <div className="hidden sm:block ">
      sidebar

    </div>

    {/* Actual GIFs */}
    {/* col-span-4 => it will take all 4 columns when screen will be small */}
    <div className="col-span-4 sm:col-span-3">
      <div className="flex gap-6">
        <div className="w-full sm:w-3/4">
          <div className="faded-text truncate mb-2">
            {gif?.title}
          </div>
          <Gif gif={gif} hover={false } />
        </div>
        Favourites / embedded / share
      </div>

    </div>

  </div>
}

export default SingleGifPage
