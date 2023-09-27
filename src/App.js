import {Route, Routes} from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/detail/:productId" element={<Detail/>}/>
        </Routes>
    )
}

export default App;
