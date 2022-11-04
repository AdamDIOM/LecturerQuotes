import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Data from "../Data/Data";

export default function RouteOptions(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="data" element={<Data />} />
            </Routes>
        </BrowserRouter>
    )
}