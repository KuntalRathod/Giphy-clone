import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GifState } from "../context/GifContext"
import Gif from "../components/Gif"
import FollowOn from "../components/FollowOn"

const Category = () => {
  const { category } = useParams()

  const [results, setResults] = useState([])

  const { giphy } = GifState()

  const fetchResults = async () => {
    const { data } = await giphy.gifs(category, category)
    console.log(data)

    setResults(data)
  }

  useEffect(() => {
    fetchResults()
  }, [category])

  return (
    <div className="flex flex-col sm:flex-row gap-5 my-4">
      <div className="w-full sm:w-72">
        {results.length > 0 && <Gif gif={results[0]} hover={false} />}
        <span className="text-gray-400 text-sm pt-2">
          Don&apos;t tell it to me, GIF it to me!
        </span>

        <FollowOn />

      </div>
    </div> 
  )
}

export default Category
