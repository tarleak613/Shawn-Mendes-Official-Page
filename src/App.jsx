import{
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Music from './Pages/Music';
import MainLayout from './Layouts/MainLayout';
import NotFoundPage from './Pages/NotFoundPage';
import Merchandise from './Pages/Merchandise';
import ViewCart from './Pages/ViewCart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>} >
      <Route index element={<HomePage />} />
      <Route path='/albums' element={<Music/>} />
      <Route path='/merchandise' element={<Merchandise/>} />
      <Route path='/not-found-page' element={<NotFoundPage/>} />
      <Route path='/view-cart' element={<ViewCart/>} />
    </Route>
)
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};
export default App;