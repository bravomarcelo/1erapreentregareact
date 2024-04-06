import { useState, useEffect ,memo  } from "react"
 
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where} from 'firebase/firestore'
import { useNotification } from "../../notification/hooks/useNotification"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListMemoized = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState()
    const [render, setRender] = useState(false)

    const { categoryId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        setTimeout(() => {
            setRender(prev => !prev)
        }, 1000)
    }, [])

    useEffect(() => {

        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            collection(db, 'products')
        )

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data}
                })

                setProducts(productsAdapted)
            })
            .catch(() => {
                showNotification('error', 'Hubo un error cargado los productos')
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