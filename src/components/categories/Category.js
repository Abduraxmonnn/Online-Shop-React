import "./Categroy.scss"
import {useEffect, useState} from "react";
import axios from "axios";

// const categoryData = [
//     {category: 'All'},
//     {category: 'Men'},
//     {category: 'Women'},
//     {category: 'Child'},
// ]

function Category() {
    const [category, setCategory] = useState(0)
    const [categoryData, setCategoryData] = useState([])
    const uniqueCategories = ['All', ...getUniqueCategories(categoryData)];
    {console.log(category)}


    function getUniqueCategories(data) {
        const categoriesSet = new Set();
        data.forEach((product) => {
            categoriesSet.add(product.name);
        });
        return Array.from(categoriesSet);
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/category/',
        ).then((response) => {
            setCategoryData(response.data)
        })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className="category d-flex justify-between">
            <div className="d-flex justify-between">
                {
                    uniqueCategories.map((obj) => (
                        (<li key={obj.id} onClick={() => setCategory(obj.id)}
                             className={category === obj.id ? 'active' : ''}>
                            {obj}
                        </li>))
                    )
                }
            </div>
        </div>
    )
}

export default Category;
