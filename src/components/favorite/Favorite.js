import "./Favorite.scss"
import React from "react";

function Favorite({onOpenClose, onClickRemoveFavoriteItem, products = []}) {
    const onRemoveItem = (data) => {
        onClickRemoveFavoriteItem(data)
    }

    return (
        <div className="overlay">
            <div className="favorite">
                <h2 className="d-flex justify-between mb-30">My Favorite Products
                    <img onClick={onOpenClose} className="cancel-favorite-item" src="/img/cancel-from-basket.svg"
                         alt="Cancel"/>
                </h2>

                <div className="items">
                    {
                        products.map((obj) => (
                            <div key={obj.id} className="favoritetItem d-flex align-center mb-20">
                                <div style={{backgroundImage: `url(${obj.image})`}}
                                     className="favoriteItemImg">

                                </div>
                                <div className="mr-20 flex">
                                    <p className="mb-5">{obj.name}</p>
                                    {/*<b>{obj.price} RUB</b>*/}
                                </div>
                                <img
                                    className="cancel-favorite-item"
                                    onClick={() => onRemoveItem(obj)}
                                    src="/img/cancel-from-basket.svg"
                                    alt="Cancel"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Favorite;