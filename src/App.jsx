import Header from "./pages/header"
import {RouterProvider} from "react-router-dom"
import {Provider} from "react-redux"
import appRouter from "./components/appRouter/routes"

import appStore from "../../../MakeHomeFurnishing/frontend/src/components/store/appStore"
import Home from "./pages/home"
function App() {
  return (
    <>
      <Provider store={appStore}>
          <Header />
          <RouterProvider router={appRouter} >
            <Home></Home>
          </RouterProvider>
      </Provider>
    </>
  )
}

export default App
