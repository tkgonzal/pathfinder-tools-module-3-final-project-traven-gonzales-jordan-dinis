import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import EncounterCalculatorApp from "./pages/EncounterCalculatorApp"

import "./App.css"

/**
 * @returns {ReactComponentElement} The main app component,
 * contains the logic for the multi-page routing
 */
function App() {
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

  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
