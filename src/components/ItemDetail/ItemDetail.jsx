import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, category, stock,  img, price, description}) => {
    return (
            <article className="p-4 bg-black border rounded-md overflow-hidden">
                <header className="p-4">
                    <h1 className="text-2xl font-semibold mb-4">Detalle de producto</h1>
                    <h2 className="text-xl font-semibold">{name}</h2>
                </header>
                <picture>
                    <img src={img} alt={name} className="w-full"/>
                </picture>
                <section className="p-4">
                    <p className="mb-2">Categoria: {category}</p>
                    <p className="mb-2">Descripción: {description}</p>
                    <p className="mb-2">Precio: $ {price}</p>
                    <span className="text-lg bg-gray">Stock disponible: {stock}</span>
                </section>           
                <footer class="p-4">    
                    <ItemCount stock={stock} />
                </footer>
            </article>

        
        
    )
}

export default ItemDetail