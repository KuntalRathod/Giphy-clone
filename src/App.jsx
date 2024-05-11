import { createBrowserRouter } from "react-router-dom"
import "./App.css"
import AppLayout from "./layouts/AppLayout"

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
        path: '/',
        element: <Home />
      }
    ]
    
  }
])



function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  )
}

export default App
