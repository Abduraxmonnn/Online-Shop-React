import "./Card.scss"

function Card(props) {
    const onClickButton = () => {
        alert(props.price)
    }

    return (
        <div className="d-flex">
            <div className="card">
                <div className="favorite">
                    <img src="/img/unlike-button.svg" alt="Unlike"/>
                </div>
                <img width={133} height={112} src={props.imgUrl} alt="Sneaker-1"/>
                <h5>{props.title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Price: </span>
                        <b>{props.price} RUB</b>
                    </div>
                    <button className="button" onClick={onClickButton}>
                        <img src="/img/plus.svg" alt="plus"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;