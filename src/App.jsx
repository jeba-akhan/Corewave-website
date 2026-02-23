import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./leyer/Root";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<Root/>}>
    <Route index element={<Home/>} />
   </Route>
  )
);


const App = () => {
  return (
    <div>
  <RouterProvider router={router}/>
    </div>
  )
}

export default App