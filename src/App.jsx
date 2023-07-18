import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import EncounterCalculatorApp from "./pages/EncounterCalculatorApp"

import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: LandingPage()
  },
  {
    path: "encounter-calculator",
    element: EncounterCalculatorApp()
  }
])

function App() {
  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
