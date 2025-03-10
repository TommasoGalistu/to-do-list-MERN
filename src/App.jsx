import './App.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import Home from './pages/Home'
import Root from './pages/Root'
import List from './pages/List'

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element />
  </Route>
)

const router = createBrowserRouter([
  { path: '/', 
    element: <Root />,
    children: [
      {path: '/',
        element: <Home />
      },
      {path: '/liste',
        element: <List />
      }
    ]
  },
  {}
])
function App() {


  return <RouterProvider router={router} />
}

export default App
