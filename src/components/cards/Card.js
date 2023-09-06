import "./Card.scss"
import React from "react";

function Card({name, imgUrl, price, onClickFavorite, onClickPlus}) {
    const [isAdded, setIsAdded] = React.useState(false)
    const [isLiked, setIsLiked] = React.useState(false)

    const onAddedBasket = () => {
        onClickPlus({name, imgUrl, price})
        setIsAdded(!isAdded)
    }

    const onAddedFavorite = () => {
        onClickFavorite({name, imgUrl, price})
        setIsLiked(!isLiked)
    }

    return (
        <div className="d-flex">
            <div className="card">
                <div className="favorite-btn">
                    <img
                        onClick={onAddedFavorite}
                        src={isLiked ? "/img/like-button.svg" : "/img/unlike-button.svg"}
                        alt="like"/>
                </div>
                <img width={133} height={112} src={imgUrl} alt="Sneaker-1"/>
                <h5>{name}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Price: </span>
                        <b>{price} RUB</b>
                    </div>
                    <img
                        className="plus"
                        onClick={onAddedBasket}
                        src={isAdded ? "/img/plus-confirm-botton.svg" : "/img/plus.svg"}
                        alt="plus"/>
                </div>
            </div>
        </div>
    )
}

export default Card;