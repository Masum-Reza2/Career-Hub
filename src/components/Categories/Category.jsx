const Category = ({ category }) => {
    // console.log(category)
    let { logo, category_name, availability, id } = category
    return (
        <div className="flex flex-col items-start pl-8 shadow-md shadow-gray-400 rounded-md border py-8 space-y-3 cursor-pointer transition-all duration-500 hover:-translate-y-1">
            <img src={logo} alt="" />
            <p className="font-semibold">{category_name}</p>
            <p className="text-gray-500 text-sm">{availability}</p>
        </div>
    )
}

export default Category