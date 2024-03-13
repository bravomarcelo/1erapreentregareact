import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {
                products?.map((product) => {
                     
                    return <Item key={product.id} {...product}/>
                    
                })
            }
        </div>
    )
}

export default ItemList