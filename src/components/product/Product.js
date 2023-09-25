const Product = ({name, image}) => {
    return (
        <a href={`/${name}`}>
            <section className="centers">
                <div className="container">
                    <img src={`${image}`} alt={name}/>
                </div>
            </section>
        </a>
    )
};

export default Product
