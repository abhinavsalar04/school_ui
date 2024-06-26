import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/home';
import Login from '../../pages/login';

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
  ])

  export default appRouter;