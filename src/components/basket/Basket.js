import "./Basket.scss"
import React from "react";

function Basket({onOpenClose, products = []}) {
    // const {onClose} = props
    const totalPrice = products.reduce((a, value) => a = a + value.price, 0)
    const tax = totalPrice * 0.05
    return (
        <div className="overlay">
            <div className="basket">
                <h2 className="d-flex justify-between mb-30">Basket
                    <img onClick={onOpenClose} className="cancel-basket-item" src="/img/cancel-from-basket.svg"
                         alt="Cancel"/>
                </h2>

                <div className="items">
                    {
                        products.map((obj) => (
                            <div className="basketItem d-flex align-center mb-20">
                                <div style={{backgroundImage: `url(${obj.imgUrl})`}}
                                     className="basketItemImg">

                                </div>
                                <div className="mr-20 flex">
                                    <p className="mb-5">{obj.name}</p>
                                    <b>{obj.price} RUB</b>
                                </div>
                                <img className="cancel-basket-item" src="/img/cancel-from-basket.svg" alt="Cancel"/>
                            </div>
                        ))
                    }
                </div>
                <div className="basketTotalBlock">
                    <ul>
                        <li>
                            <span>Total Price</span>
                            <div></div>
                            <b>{totalPrice} RUB</b>
                        </li>
                        <li>
                            <span>Tax 5%:</span>
                            <div></div>
                            <b>{tax} RUB</b>
                        </li>
                    </ul>
                    <button className="greenBtn">Checkout <img src="/img/checkout-btn-arrow.svg" alt="arrow"/></button>
                </div>
            </div>
        </div>
    )
}

export default Basket