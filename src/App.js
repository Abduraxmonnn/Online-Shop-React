import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import Basket from "./components/basket/Basket";

const data = [
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, img: "/img/products_img/image%205-10.png"},
    {name: 'Мужские Кроссовки Nike Air Max 270', price: 12999, img: "/img/products_img/image%205-11.png"},
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, img: "/img/products_img/image%205-8.png"},
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8999, img: "/img/products_img/image%205.png"}
]

function App() {
    return (
        <div className="wrapper clear">
            {/*<Basket />*/}
            <Header/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>All Sneakers</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="Search..."/>
                    </div>
                </div>
                <div className="d-flex">
                    {data.map((obj) => (
                        <Card
                            title={obj.name}
                            price={obj.price}
                            imgUrl={obj.img}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
