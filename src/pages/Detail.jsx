import {useParams} from "react-router-dom";
import Header from "../components/header/Header";
import {useEffect, useState} from "react";
import axios from "axios";
import ProductDetail from "../components/detail/ProductDetail";

const Detail = () => {
    const {productId} = useParams()

    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/${productId}`,
        ).then((response) => {
            setProductDetail(response.data)
        })
            .catch((error) => console.log(error))
    }, [productId])


    return (
        <div className="wrapper clear">
            {/* You can use "openBasket" in Header but this is SECOND APPROACH and you can use BOTH */}
            <Header/>
            <div className="content p-40">
                <ProductDetail productDetail={productDetail} />
            </div>
        </div>
    )
}

export default Detail;
