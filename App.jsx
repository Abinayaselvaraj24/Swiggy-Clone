import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import ResContainer from './components/ResContainer';
import ResDetails from './components/ResDetails';
import './index.css'

const Home=()=>{
  
      
  return (
    <>
    <Header/>
    {/* <ResContainer/> */}
    <Outlet/>
    {/* <div>This is the last div.</div> */}
    </>
    )
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[{
      path:"/",
      element:<ResContainer/>
    },{
      path:"/about",
      element:<About/>
    },{
      path:"/contact",
      element:<Contact/>
    },{
      path:"/restaurant/:id",
      element:<ResDetails/>
    }]
  },
  
])



const App=()=>{
  return(
    <RouterProvider router={router}/>
  )
}
export default App;