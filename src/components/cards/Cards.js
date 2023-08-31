import "./Cards.scss"

function Cards() {
    return (
        <div className="d-flex">
            <div className="card">
                <div className="favorite">
                    <img src="/img/unlike-button.svg" alt="Unlike"/>
                </div>
                <img width={133} height={112} src="/img/products_img/image%205-10.png" alt="Sneaker-1"/>
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Price: </span>
                        <b>12 999 RUB</b>
                    </div>
                    <button className="button">
                        <img src="/img/plus.svg" alt="plus"/>
                    </button>
                </div>
            </div>
            <div className="card">
                <div className="favorite">
                    <img src="/img/unlike-button.svg" alt="Unlike"/>
                </div>
                <img width={133} height={112} src="/img/products_img/image%205-11.png" alt="Sneaker-1"/>
                <h5>Мужские Кроссовки Nike Air Max 270</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Price: </span>
                        <b>12 999 RUB</b>
                    </div>
                    <button className="button">
                        <img src="/img/plus.svg" alt="plus"/>
                    </button>
                </div>
            </div>
            <div className="card">
                <div className="favorite">
                    <img src="/img/unlike-button.svg" alt="Unlike"/>
                </div>
                <img width={133} height={112} src="/img/products_img/image%205-8.png" alt="Sneaker-1"/>
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Price: </span>
                        <b>8 499 RUB</b>
                    </div>
                    <button className="button">
                        <img src="/img/plus.svg" alt="plus"/>
                    </button>
                </div>
            </div>
            <div className="card">
                <div className="favorite">
                    <img src="/img/unlike-button.svg" alt="Unlike"/>
                </div>
                <img width={133} height={112} src="/img/products_img/image%205.png" alt="Sneaker-1"/>
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Price: </span>
                        <b>8 999 RUB</b>
                    </div>
                    <button className="button">
                        <img src="/img/plus.svg" alt="plus"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards;