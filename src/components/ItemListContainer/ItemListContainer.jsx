import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState()

    const { categoryId } = useParams()

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })

        
        
    }, [categoryId])

    return (
      <main className="min-h-96 container mx-auto">
      <h2 className="text-2xl text-center font-bold">{greeting}</h2>
      <ItemList products={products}/>
    </main>
         
    )
}

export default ItemListContainer 