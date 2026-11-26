// Create a interface for a product with id can not update, name, price and optionally description
interface Product {
    readonly id: number,
    name: string,
    price: number,
    description?: string
}

// Create a product to storage in interface
let product: Product = { id: 1, name: "Master en Inteligencia Artificial", price: 1500, description: "El Master en Inteligencia Artificial de Conquer Blocks es un programa formativo especializado diseñado para capacitar a los alumnos en el desarrollo, implementacion y despliegue de soluciones basadas en Inteligencia Artificial. A lo largo del Master, los alumnos desarrollan conocimientos en programacion con Python, Analisis de Datos, Machine Learning, Deep Learning y Desarrollo de Modelos Predictivos" };

// Display the product information
console.log(product);

// Test update each propertie
product.id = 2;
product.name = "Master en Desarrollo Web Full Stack";
product.price = 1500;

// Display which the compiler allow
console.log(product);