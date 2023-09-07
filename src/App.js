import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import Basket from "./components/basket/Basket";
import Category from "./components/categories/Category";
import React from "react";
import Favorite from "./components/favorite/Favorite";

function App() {
    const [isBasket, setIsBasket] = React.useState(false)
    const [isFavorite, setIsFavorite] = React.useState(false)
    const [products, setProducts] = React.useState([])
    const [basketProducts, setBasketProducts] = React.useState([])
    const [favoriteProducts, setFavoriteProducts] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')


    const openBasket = () => {
        setIsBasket(!isBasket)
    }

    const openFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    // const onAddToBasket = (data) => {
    //     setBasketProducts(prev => [...prev, data])
    // }

    const onAddToFavorite = (data) => {
        const itemIndex = favoriteProducts.findIndex((item) => item.id === data.id);

        if (itemIndex !== -1) {
            // Item is already in the array, so remove it
            const updatedFavoriteProducts = [...favoriteProducts];
            updatedFavoriteProducts.splice(itemIndex, 1);
            setFavoriteProducts(updatedFavoriteProducts);
        } else {
            // Item is not in the array, so add it
            setFavoriteProducts((prev) => [...prev, data]);
        }
    }

    const onAddToBasket = (data) => {
        // setFavoriteProducts(prev => [...prev, data])
        const itemIndex = basketProducts.findIndex((item) => item.id === data.id);

        if (itemIndex !== -1) {
            // Item is already in the array, so remove it
            const updatedBasketProducts = [...basketProducts];
            updatedBasketProducts.splice(itemIndex, 1);
            setBasketProducts(updatedBasketProducts);
        } else {
            // Item is not in the array, so add it
            setBasketProducts((prev) => [...prev, data]);
        }
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
            {isBasket && <Basket onOpenClose={openBasket} products={basketProducts}/>}
            {isFavorite && <Favorite onOpenClose={openFavorite} products={favoriteProducts}/>}
            {/* You can use "openBasket" in Header but this is SECOND APPROACH and you can use BOTH */}
            <Header onClickBasket={() => setIsBasket(true)} onClickFavorite={openFavorite}/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>All Sneakers</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input
                            value={searchValue}
                            onChange={(event) => setSearchValue(event.target.value)}
                            placeholder="Search..."/>
                    </div>
                </div>
                <Category/>
                <div className="d-flex flex-wrap">
                    {products.length === 0 ? (<h2>No products for sale</h2>
                    ) : (
                        products.filter((obj) =>
                            obj.name.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((obj, index) => (
                            <Card
                                name={obj.name}
                                price={obj.price}
                                imgUrl={obj.img}
                                onClickFavorite={(product) => onAddToFavorite(product)}
                                onClickPlus={(product) => onAddToBasket(product)}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
