import React, { useEffect, useState } from "react"
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2"
import { Link } from "react-router-dom"
import { GifState } from "../context/GifContext"

const Header = () => {
  const [categories, setCategories] = useState([])
  const [showCategories, setShowCategories] = useState(false)

  console.log(categories,setCategories);

  const { giphy, filter, setFilter, favourites } = GifState()

  const fetchGifCategories = async () => {
    const { data } = await giphy.categories()
    setCategories(data)
  }

  useEffect(() => {
    fetchGifCategories()
  }, [])

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" className="w-8" alt="Giphy Logo" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        <div className="font-bold text-md flex gap-1 items-center">
          {/* Render Categories */}

          {categories?.slice(0, 5)?.map((category) => {
            return (
              <Link
                key={category.name}
                to={`/${category.name_encoded}`}
                className="px-1 py-1 hover:gradient border-b-4 hidden lg:block"
              >
                {category.name}
              </Link>
            )
          })}

          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient ${showCategories ? "gradient" : ""} border-b-4 hidden lg:block`}
            />
          </button>
          <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to="/favourites"> Favourite GIFs</Link>
          </div>

          <button>
            <HiMiniBars3BottomRight
              size={35}
              className="text-sky-400 block lg:hidden"
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span>Categories</span>
            <hr />
            <div>
              <Link className="font-bold">Reactions</Link>
            </div>
          </div>
        )}
      </div>

      {/* search */}
    </nav>
  )
}

export default Header
