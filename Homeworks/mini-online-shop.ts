// Steps 
//   1.Create an interface Product with the following fields: 
// name: string  
// price: number  
// category: "food" | "clothes" | "electronics" 
//   2.Create a type Category with the possible categories (food, clothes, electronics) 
//   3.Create an interface Customer with the following fields: 
// name: string   
// email: string 
// cart: Product[] — an array containing the products in the customer’s cart 
//  4. Create two example products (e.g., an apple and a T-shirt). 
//  5. Create one customer who has both products

type Category = "food" | "clothes" | "electronics";

interface Product {
    name: string;
    price: number;
    category: Category;
}

interface Customer {
    name: string;
    email: string;
    cart: Product[];
}


const apple: Product = {
    name: "Apple",
    price: 2,
    category: "food"
};

const tshirt: Product = {
    name: "T-Shirt",
    price: 20,
    category: "clothes"
};

// add product electronics
const laptop: Product = {
    name: "Laptop",
    price: 1000,
    category: "electronics"
};

const tablet: Product = {
    name: "Tablet",
    price: 500,
    category: "electronics"
};

const products: Product[] = [apple, tshirt, laptop, tablet];

const customer: Customer = {
    name: "Mladen Petrov",
    email: "mladen@mail.com",
    cart: products
};

// add second customer with three products
const customer2: Customer = {
    name: "Iva Petrova",
    email: "iva@mail.com",
    cart: [apple, tshirt, laptop]
};

// add function displayCart - display cart customer name and products
function displayCart(customer: Customer) {
    console.log(`Cart for ${customer.name}:`);
    customer.cart.forEach(product => {
        console.log(`- ${product.name} (${product.category}): ${product.price} $`);
    });
}
//displayCart(customer);

//add function filterByCategory - receive products and category as parameters and filter the products by given category
function filterByCategory(products: Product[], category: Category): Product[] {
    return products.filter(product => product.category === category);
}
//console.log(filterByCategory(products, "electronics"));


//add function calculateTotal - receive customer as parameter data and combine all products price
//customer.cart[0].price
//customer.cart[1].price
//...
function calculateTotal(customer: Customer): number {
    return customer.cart.reduce((total, product) => total + product.price, 0);
}   

// console.log(`Total for ${customer.name}: ${calculateTotal(customer)} $`);
// console.log(`Total for ${customer2.name}: ${calculateTotal(customer2)} $`);
