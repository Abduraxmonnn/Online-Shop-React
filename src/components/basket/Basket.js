import "./Basket.scss"

function Basket() {
    return (
        <div className="overlay">
            <div className="basket">
                <h2 className="mb-30">Basket</h2>

                <div className="items">
                    <div className="basketItem d-flex align-center mb-20">
                        {/*<img className="mr-20" width={70} height={70} src="/img/products_img/image%205-10.png" alt="Sneaker" />*/}
                        <div style={{backgroundImage: 'url(/img/products_img/image%205-10.png)'}}
                             className="basketItemImg">

                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 RUB</b>
                        </div>
                        <img className="cancel-basket-item" src="/img/cancel-from-basket.svg" alt="Cancel"/>
                    </div>

                    <div className="basketItem d-flex align-center mb-20">
                        {/*<img className="mr-20" width={70} height={70} src="/img/products_img/image%205-10.png" alt="Sneaker" />*/}
                        <div style={{backgroundImage: 'url(/img/products_img/image%205.png)'}}
                             className="basketItemImg">

                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 RUB</b>
                        </div>
                        <img className="cancel-basket-item" src="/img/cancel-from-basket.svg" alt="Cancel"/>
                    </div>
                </div>
                <div className="basketTotalBlock">
                    <ul>
                        <li>
                            <span>Total Price</span>
                            <div></div>
                            <b>21 498 RUB</b>
                        </li>
                        <li>
                            <span>Tax 5%:</span>
                            <div></div>
                            <b>1 074 RUB</b>
                        </li>
                    </ul>
                    <button className="greenBtn">Checkout <img src="/img/checkout-btn-arrow.svg" alt="arrow"/></button>
                </div>
            </div>
        </div>
    )
}

export default Basket