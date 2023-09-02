import "./Categroy.scss"
import React from "react";

const categoryData = [
    {category: 'All'},
    {category: 'Men'},
    {category: 'Women'},
    {category: 'Child'},
]

function Category(props) {
    const [category, setCategory] = React.useState(0)

    return (
        <div className="category d-flex justify-between">
            <div className="d-flex justify-between">
                {
                    categoryData.map((obj, index) =>
                        (<li onClick={() => setCategory(index)} className={category === index ? 'active' : ''}>
                            {obj.category}
                        </li>))
                }
            </div>
        </div>
    )
}

export default Category