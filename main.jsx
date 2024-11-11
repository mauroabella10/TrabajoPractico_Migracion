import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/components/Pages/App.jsx'
import Error from './src/components/layout/Error.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cards from './src/components/Pages/Cards.jsx';
import Galeria from './src/components/Pages/Galeria.jsx';
import Contacto from './src/components/Pages/Contacto.jsx';
import Login from './src/components/Pages/Login.jsx';
import Register from './src/components/Pages/Register.jsx';
import { UserProvider } from './src/components/contexts/UserContext.jsx';
import ProtectedRoute from './src/components/auth/ProtectedRoute.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/cards",
        element: <Cards />,
      },
      {
        path: "/galery",
        element: <Galeria />,
      },
      {
        path: "/contact",
        element: <Contacto />,
      },
    ],
  },
  
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <RouterProvider router={routes} />
    </UserProvider>
  </StrictMode>
)
