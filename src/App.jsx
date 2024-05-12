import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import AppLayout from "./layouts/AppLayout"
import Home from "./pages/Home"
import Category from "./pages/Category"
import SearchPage from "./pages/Search"
import GifPage from "./pages/Single-gif"
import Favourites from "./pages/Favourites"
import GifProvider from "./context/GifContext"

//pages
//homepage
//categories
//search
//single gif
//favourites

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="user/:userid" element={<User />} />

//       <Route loader={githubInfoLoader}
//         path="github"
//         element={<Github />}
//       />
//     </Route>

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <GifProvider>
        <RouterProvider router={router} />
      </GifProvider>
    </>
  )
}

export default App
