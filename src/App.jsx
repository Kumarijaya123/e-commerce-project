import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import "./App.css";
import Home from "./pages/Home"
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import RoutLayout from "./pages/layouts/RoutLayout";
import Profile from "./pages/Profile";

const router = createBrowserRouter(createRoutesFromElements(
<Route element={<RoutLayout/>}>
    <Route path="/" element={<Home />}/>
    <Route path="cart" element={<Cart />}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>
</Route>))
function App() {

    return (
      <RouterProvider router={router}/>
    )
}

export default App;