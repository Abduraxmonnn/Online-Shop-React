import "./Card.scss";
import {useState} from "react";
import {Link} from "react-router-dom";

function Card({product, onClickFavorite, onClickPlus}) {
    const [isAdded, setIsAdded] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const {id, name, image, price} = product;

    const onAddedBasket = () => {
        onClickPlus(product);
        setIsAdded(!isAdded);
    };

    const onAddedFavorite = () => {
        onClickFavorite(product);
        setIsLiked(!isLiked);
    };

    return (
        <div className="d-flex">
            <div className="card">
                <div className="favorite-btn">
                    <img
                        onClick={onAddedFavorite}
                        src={isLiked ? "/img/like-button.svg" : "/img/unlike-button.svg"}
                        alt="like"
                    />
                </div>
                <Link to={`/detail/${id}`}>
                    <img
                        width={133}
                        height={112}
                        src={image}
                        alt="Sneaker-1"
                    />
                </Link>
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
                        alt="plus"
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;
