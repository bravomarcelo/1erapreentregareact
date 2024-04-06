const products = [
  {

         "id": "1",
         "name": "Pizza Margherita",
         "price": 12.99,
         "category": "Principal",
         "img": "https://source.unsplash.com/600x400/?pizza",
         "stock": 20,
         "description": "Clásica pizza con salsa de tomate, mozzarella y albahaca fresca."
       },
       {
         "id": "2",
         "name": "Hamburguesa Deluxe",
         "price": 15.99,
         "category": "Sandwiches",
         "img": "https://source.unsplash.com/600x400/?burger",
         "stock": 15,
         "description": "Hamburguesa gourmet con carne de res, queso cheddar, tocino y salsa especial."
       },
       {
         "id": "3",
         "name": "Ensalada Mediterránea",
         "price": 10.99,
         "category": "Principal",
         "img": "https://source.unsplash.com/600x400/?salad",
         "stock": 25,
         "description": "Ensalada fresca con tomate, pepino, aceitunas, queso feta y aderezo de aceituna."
       },
       {
         "id": "4",
         "name": "Sushi Variado",
         "price": 18.99,
         "category": "Sushi",
         "img": "https://source.unsplash.com/600x400/?sushi",
         "stock": 18,
         "description": "Variedad de sushi fresco con nigiri, sashimi y rollos especiales."
       },
       {
         "id": "5",
         "name": "Lasagna",
         "price": 14.99,
         "category": "Principal",
         "img": "https://source.unsplash.com/600x400/?lasagna",
         "stock": 22,
         "description": "Lasagna casera con capas de pasta, carne, queso y salsa de tomate."
       },
       {
         "id": "6",
         "name": "Burrito de Pollo",
         "price": 11.99,
         "category": "Sandwiches",
         "img": "https://source.unsplash.com/600x400/?burrito",
         "stock": 20,
         "description": "Burrito relleno de pollo, arroz, frijoles, queso y salsa picante."
       },
       {
         "id": "7",
         "name": "Cesar Wrap",
         "price": 9.99,
         "category": "Sandwiches",
         "img": "https://source.unsplash.com/600x400/?wrap",
         "stock": 30,
         "description": "Wrap con pollo a la parrilla, lechuga, queso parmesano y aderezo césar."
       },
       {
         "id": "8",
         "name": "Roll de Aguacate",
         "price": 16.99,
         "category": "Sushi",
         "img": "https://source.unsplash.com/600x400/?avocado-roll",
         "stock": 15,
         "description": "Roll de sushi con aguacate, pepino, yuzu y salsa especial."
       },
       {
         "id": "9",
         "name": "Sopa de Tomate",
         "price": 8.99,
         "category": "Principal",
         "img": "https://source.unsplash.com/600x400/?tomato-soup",
         "stock": 25,
         "description": "Sopa caliente de tomate con croutones y albahaca fresca."
       },
       {
         "id": "10",
         "name": "Tacos de Carnitas",
         "price": 13.99,
         "category": "Sandwiches",
         "img": "https://source.unsplash.com/600x400/?carnitas-tacos",
         "stock": 20,
         "description": "Tacos tradicionales mexicanos con carnitas, cebolla y cilantro."
       },
       {
         "id": "11",
         "name": "Panini Caprese",
         "price": 11.49,
         "category": "Sandwiches",
         "img": "https://source.unsplash.com/600x400/?caprese-panini",
         "stock": 18,
         "description": "Panini con tomate, mozzarella, albahaca y aceite de oliva."
       },
       {
         "id": "12",
         "name": "Roll de Salmón",
         "price": 17.99,
         "category": "Sushi",
         "img": "https://source.unsplash.com/600x400/?salmon-roll",
         "stock": 15,
         "description": "Roll de sushi con salmón fresco, aguacate y pepino."
       }
]

   

export const getProducts = () => {
 return new Promise((resolve) => {
     setTimeout(() => {
         resolve(products)
     }, 1000)
 })
}

export const getProductsByCategory = (categoryId) => {
 return new Promise((resolve) => {
     setTimeout(() => {
         resolve(products.filter(prod => prod.category === categoryId))
     }, 1000)
 })
}

export const getProductById = (itemId) => {
 return new Promise((resolve) => {
     setTimeout(() => {
         resolve(products.find(prod => prod.id === itemId))
     }, 1000)
 })
}