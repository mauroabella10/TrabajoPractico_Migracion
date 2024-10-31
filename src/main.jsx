import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/App.jsx'
import Error from './components/layout/Error.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cards from './Cards.jsx';
import Galeria from './Galeria.jsx';
import Contacto from './Contacto.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/Cards",
    element: <Cards />,
    errorElement: <Error />,
  },
  {
    path: "/Galery",
    element: <Galeria />,
    errorElement: <Error />,
  },
  {
    path: "/Contact",
    element: <Contacto />,
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
)
