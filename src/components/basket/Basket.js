import "./Basket.scss"
import React from "react";

function Basket({onOpenClose, onClickRemoveBasketItem, products = []}) {
    const totalPrice = products.reduce((a, value) => a = a + value.price, 0)
    const tax = Math.round(totalPrice * 0.05)

    const onRemoveItem = (product_id) => {
        onClickRemoveBasketItem(product_id);
    };

    return (
        <div className="overlay">
            <div className="basket">
                <h2 className="d-flex justify-between mb-30">
                    Basket
                    <img onClick={onOpenClose} className="cancel-basket-item" src="/img/cancel-from-basket.svg"
                         alt="Cancel"/>
                </h2>

                {
                    products.length > 0 ?
                        <div className="items">
                            {
                                products.map((obj) => (
                                    <div key={obj.id} className="basketItem d-flex align-center mb-20">
                                        <div style={{backgroundImage: `url(${obj.image})`}}
                                             className="basketItemImg">

                                        </div>
                                        <div className="mr-20 flex">
                                            <p className="mb-5">{obj.name}</p>
                                            <b>{obj.price} RUB</b>
                                        </div>
                                        <img
                                            className="cancel-basket-item"
                                            onClick={() => onRemoveItem(obj.id)}
                                            src="/img/cancel-from-basket.svg"
                                            alt="Cancel"/>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div className="basketEmpty d-flex align-center justify-center flex-column flex">
                            <img className="basketEmpty__box mb-20" width="80" height="80" src="/img/empty-basket1.png"
                                 alt="empty-basket"/>
                            <h2>Basket is Empty</h2>
                            <p className="opacity-6">add at least one product to place an order</p>
                            <button className="greenBtn">
                                <img className="back_arrow" src="/img/checkout-btn-arrow.svg" alt="Arrow"/>
                                Back
                            </button>
                        </div>
                }

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