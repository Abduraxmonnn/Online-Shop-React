import "./ProductDetail.scss"
import {useState} from "react";

function ProductDetail({productDetail}) {
    const [isLiked, setIsLiked] = useState(false)

    const onClickIsLiked = () => {
        setIsLiked(!isLiked)
    }

    return (
        <div className="product-detail p-40">
            <div className="d-flex flex-row">
                <div className="product-image">
                    <img src={`${productDetail.image}`} alt="product_image"/>
                </div>
                <div className="product-info">
                    <h1>{productDetail.name}</h1>
                    <div className="d-flex flex-wrap sub-title">
                        <div className="d-flex flex-column">
                            <span>Price: </span>
                            <b>{productDetail.price} <p>₽</p></b>
                        </div>
                        <div className="d-flex wishlist-button">
                            <p>
                                {
                                    !isLiked ?
                                        <img src="/img/heart-regular.svg" alt="unlike"
                                             onClick={onClickIsLiked}/> :
                                        <img src="/img/heart-solid.svg" alt="liked" onClick={onClickIsLiked}/>
                                }
                            </p>
                        </div>
                    </div>
                    <div className="product-description">
                        <p>
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="add-to d-flex flex-wrap">
                        <div className="add-to-basket">
                            <button type="button" className="basket-button">Add to Basket</button>
                        </div>
                        <div className="one-click-buy">
                            <button type="button" className="one-click-buy-button">buy in 1 click</button>
                        </div>
                    </div>
                    <div className="block__motivation-badge d-flex flex-wrap">
                        <img className="d-flex flex-wrap" src="/img/basket-shopping-solid.svg" alt="basket"/>
                        <p className="d-flex flex-wrap">36 people bought this week</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail;
