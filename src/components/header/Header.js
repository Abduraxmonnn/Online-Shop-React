import "./Header.scss"
import {Link} from "react-router-dom";

function Header({onClickBasket, onClickFavorite}) {
    return (
        <header className="d-flex justify-between align-center">
            <div className="d-flex align-center">
                <Link to={'/'}>
                    <img width={40} height={40} src="/img/logo.png" alt="logo"/>
                </Link>
                <div>
                    <h3>Sneakers Shop</h3>
                    <p className="opacity-5">TOP Sneakers Shop</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30 cu-p" onClick={onClickBasket}>
                    <img width={18} height={18} src="/img/basket.svg" alt="basket"/>
                    <span>1205 RUB</span>
                </li>
                <li>
                    <img onClick={onClickFavorite} width={21} height={19} src="/img/like-section-button.svg"
                         alt="like"/>
                    <img width={20} height={20} src="/img/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
    )
}

export default Header;
