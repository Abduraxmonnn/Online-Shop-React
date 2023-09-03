import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import Basket from "./components/basket/Basket";
import Category from "./components/categories/Category";
import React from "react";

function App() {
    const [isBasket, setIsBasket] = React.useState(false)
    const [products, setProducts] = React.useState([])

    const openBasket = () => {
        setIsBasket(!isBasket)
    }

    React.useEffect(() => {
        fetch("https://64ef25df219b3e2873c404c5.mockapi.io/api/v1/products")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setProducts(data)
            })
    }, [])

    return (
        <div className="wrapper clear">
            {isBasket && <Basket onClose={openBasket}/>}
            {/* You can use "openBasket" in Header but this is SECOND APPROACH and you can use BOTH */}
            <Header onClickBasket={() => setIsBasket(true)}/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>All Sneakers</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="Search..."/>
                    </div>
                </div>
                <Category/>
                <div className="d-flex flex-wrap">
                    {products.length === 0 ? (<h2>No products for sale</h2>
                    ) : (
                        products.map((obj) => (
                            <Card
                                title={obj.name}
                                price={obj.price}
                                imgUrl={obj.img}
                                onClickFavorite={() => console.log("FAVORITE")}
                                onClickPlus={() => console.log("PLUS")}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
