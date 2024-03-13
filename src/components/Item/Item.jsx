import { Link } from "react-router-dom"

const Item = ({ id, name, img, price , stock}) => {
    return (
      
        <div className="max-w-500 bg-black p-4 overflow-hidden rounded-md m-2">
        <img src={img} alt={name} className="w-full h-40 object-cover"/>
        <h2 className="text-xl font-semibold p-4">{name}</h2>
        <h3 className="text-lg font-medium p-4">Precio: ${price}</h3>
        <h4 className="text-lg bg-gray  p-4">Stock disponible: {stock}</h4>
        <Link to={`/item/${id}`} className="block p-4 text-white-500 hover:underline">Ver detalle</Link>
       
    </div>
    
    )
}

export default Item