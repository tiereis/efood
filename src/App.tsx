import Home from './pages/Home'
import PerfilLoja from './pages/PerfilLoja'
import { GlobalStyles } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurante',
    element: <PerfilLoja />
  }
])

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
