// src/App.jsx
import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import NewHero from './components/NewHero';
import ContactPage from './pages/ContactPage';
import ProgramPage from './pages/ProgramPage';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<Homepage/>}/>
{/* <Route index element={<NewHero/>}/> */}
<Route path='/about' element={<AboutPage/>}/>
<Route path='/programs' element={<ProgramPage/>}/>
<Route path='/contact' element={<ContactPage/>}/>
<Route path='*' element={<NotFoundPage/>}/>



  </Route>
  

)


)

const App = () => {
  return <RouterProvider router={router}/>
};

export default App;
