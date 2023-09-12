import "./Categroy.scss"
import {useState} from "react";

// const categoryData = [
//     {category: 'All'},
//     {category: 'Men'},
//     {category: 'Women'},
//     {category: 'Child'},
// ]

function Category({categoryData}) {
    const [category, setCategory] = useState(0)
    const uniqueCategories = ['All', ...getUniqueCategories(categoryData)];


    function getUniqueCategories(data) {
        const categoriesSet = new Set();
        data.forEach((product) => {
            categoriesSet.add(product.category);
        });
        return Array.from(categoriesSet);
    }

    return (
        <div className="category d-flex justify-between">
            <div className="d-flex justify-between">
                {
                    uniqueCategories.map((obj, index) => (
                        (<li key={index} onClick={() => setCategory(index)}
                             className={category === index ? 'active' : ''}>
                            {obj}
                        </li>))
                    )
                }
            </div>
        </div>
    )
}

export default Category