import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GifState } from "../context/GifContext"
import FilterGif from "../components/FilterGif"
import Gif from "../components/Gif"

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([])

  const { giphy, filter } = GifState()

  const { query } = useParams()

  const fetchSearchResults = async () => {
    const { data } = await giphy.search(query, {
      sort: "relevant",
      lang: "eng",
      type: filter,
      limit: 20,
    })
    console.log(data)

    setSearchResults(data)
  }

  useEffect(() => {
    fetchSearchResults()
  }, [filter])

  return (
    <div className="my-4 ">
      <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>
      <FilterGif alignLeft={true} />
      {searchResults.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {searchResults.map((gif) => (
            <Gif gif={gif} key={gif.id} />
          ))}
        </div>
      ) : (
        <span>
          No GIFs found for {query}. Try searching for Stickers Or Text instead?
        </span>
      )}
    </div>
  )
}

export default SearchPage
