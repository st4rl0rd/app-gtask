import { Navigate } from 'react-router-dom';
import MainLayout from 'src/components/MainLayout';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;