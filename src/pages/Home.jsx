import Basket from "../components/basket/Basket";
import Favorite from "../components/favorite/Favorite";
import Header from "../components/header/Header";
import Category from "../components/categories/Category";
import Card from "../components/cards/Card";
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {
    const [isBasket, setIsBasket] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const [products, setProducts] = useState([])
    const [basketProducts, setBasketProducts] = useState([])
    const [favoriteProducts, setFavoriteProducts] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const openBasket = () => {
        setIsBasket(!isBasket)
    }

    const openFavorite = () => {
        setIsFavorite(!isFavorite)
    }

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

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }


    useEffect(() => {
        axios.get("https://64ef25df219b3e2873c404c5.mockapi.io/api/v1/products")
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => console.log(error))
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
                            onChange={onChangeSearchInput}
                            placeholder="Search..."/>
                        {searchValue && <img
                            className="clear cu-p"
                            onClick={() => setSearchValue('')}
                            src="/img/xmark-solid.svg" alt="Clear"/>}
                    </div>
                </div>
                <Category categoryData={products} />
                <div className="d-flex flex-wrap">
                    {!products.length ? (<h2>No products for sale</h2>) :
                        (products.filter((obj) =>
                            obj.name.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((obj) => (
                            <Card
                                key={obj.id}
                                product={obj}
                                onClickFavorite={(product) => onAddToFavorite(product)}
                                onClickPlus={(product) => onAddToBasket(product)}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;
