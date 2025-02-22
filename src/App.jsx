import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "animate.css"
import LoginPage from "./pages/LOGIN";
import ErrorPage from "./pages/ErrorPage"
import Loader from "./components/Loader";
import { useLoader } from "./store";

export default function App(){
    const {index}=useLoader();

    return(
        <div className="App">
           
            {index &&  <Loader/> }
           <BrowserRouter>
             <Routes>
                <Route path="/" element= {<LoginPage/>} ></Route>
                <Route path="/Landing" element={<h1>welcom to Landing page page</h1>}>  </Route>
                <Route path="*" element={<ErrorPage/>}>  </Route>
             </Routes>
           </BrowserRouter>
           
        </div>
    )
}