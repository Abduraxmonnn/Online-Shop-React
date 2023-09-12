import {useParams} from "react-router-dom";

const Detail = () => {
    const {productId} = useParams()
    return (
        <main>
            <h1>Detail Page {productId}</h1>
        </main>
    )
}

export default Detail;
