// Create a object to represent a product with id that must not be change, a name and price that if can change
interface Product {
    readonly id: number,
    name: string,
    price: number
}

// Again modify one three property
let product: Product = {id: 1, name: "Ultimate JavaScript", price: 20};

// Display the product
console.log(product);

// Check if can change the id
product.id = 2;
console.log(product.id);

// Check if can change the name
product.name = "Ultimate TypeScript";
console.log(product.name);

// Check if can change the price
product.price = 20;
console.log(product.price);