import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import Basket from "./components/basket/Basket";

function App() {
    return (
        <div className="wrapper clear">
            <Basket />
            <Header/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>All Sneakers</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="Search..."/>
                    </div>
                </div>
                <Cards/>
            </div>
        </div>
    );
}

export default App;
