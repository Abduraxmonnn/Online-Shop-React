import "./Card.scss"
import React from "react";

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false)
    const [isLiked, setIsLiked] = React.useState(false)

    const onClickAdded = () => {
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        setIsLiked(!isLiked)
    }

    return (
        <div className="d-flex">
            <div className="card">
                <div className="favorite">
                    <img
                        onClick={onClickFavorite}
                        src={isLiked ? "/img/like-button.svg" : "/img/unlike-button.svg"}
                        alt="Unlike"/>
                </div>
                <img width={133} height={112} src={props.imgUrl} alt="Sneaker-1"/>
                <h5>{props.title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Price: </span>
                        <b>{props.price} RUB</b>
                    </div>
                    <img
                        className="plus"
                        onClick={onClickAdded}
                        src={isAdded ? "/img/plus-confirm-botton.svg" : "/img/plus.svg"}
                        alt="plus"/>
                </div>
            </div>
        </div>
    )
}

export default Card;