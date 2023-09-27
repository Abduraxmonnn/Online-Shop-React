import "./Detail.scss"
import {useParams} from "react-router-dom";
import Header from "../../components/header/Header";
import {useEffect, useState} from "react";
import axios from "axios";
import ProductDetail from "../../components/detail/ProductDetail";
import Card from "../../components/cards/Card";

const Detail = () => {
    const {productId} = useParams()

    const [productDetail, setProductDetail] = useState([])
    const [products, setProducts] = useState([])
    const [AddedBasket, setAddedBasket] = useState(false)
    const [AddedFavorite, setAddedFavorite] = useState(false)


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
            block: 'end',
            inline: 'nearest'
        })
        axios.get(`http://127.0.0.1:8000/api/products/${productId}`,
        ).then((response) => {
            setProductDetail(response.data)
        })
            .catch((error) => console.log(error))
    }, [productId])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/`,
        ).then((response) => {
            setProducts(response.data)
        })
            .catch((error) => console.log(error))
    }, [productId])


    const onAddToBasket = () => {
        setAddedBasket(!AddedBasket)
    }

    const onAddToFavorite = () => {
        setAddedFavorite(!AddedFavorite)
    }


    return (
        <div className="wrapper clear">
            {/* You can use "openBasket" in Header but this is SECOND APPROACH and you can use BOTH */}
            <Header onClickBasket={() => setAddedBasket(true)} onClickFavorite={onAddToFavorite}/>
            <div className="content p-40">
                <ProductDetail productDetail={productDetail} />
            </div>
            <div className="d-flex flex-wrap recommendation__cards">
                {(products.map((obj) =>
                    <Card
                        key={obj.id}
                        product={obj}
                        onClickFavorite={onAddToFavorite}
                        onClickPlus={onAddToBasket}
                    />
                ))}
            </div>
        </div>
    )
}

export default Detail;
