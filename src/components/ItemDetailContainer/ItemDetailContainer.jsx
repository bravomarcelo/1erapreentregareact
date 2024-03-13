import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
    }, [itemId])


    return (
        <div class="w-full max-w-md mx-auto bg-pink-200 text-center p-8">
           
            <ItemDetail {...product} />
        </div>

    )
}

export default ItemDetailContainer