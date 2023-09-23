import { useEffect, useState } from "react"
import Category from "./Category"

const Categories = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="py-5">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {categories.map(category => <Category key={category.id} category={category} />)}
            </div>
        </div>
    )
}

export default Categories