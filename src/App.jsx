import './App.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import PublicHome from './pages/PublicHome'
import Root from './pages/Root'
import List from './pages/List'
import Login from './pages/Login'
import Register from './pages/Register'
import ErrorPage from './pages/ErrorPage'

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element />
  </Route>
)

const router = createBrowserRouter([
  { path: '/', 
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/',
        element: <PublicHome />
      },
      {path: '/liste',
        element: <List />
      },
      {path: '/login',
        element: <Login />
      },
      {path: '/register',
        element: <Register/>
      }
      
    ]
  },
  
])
function App() {


  return <RouterProvider router={router} />
}

export default App
