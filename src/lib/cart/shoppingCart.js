import { browser } from "$app/environment";
// Función para obtener el carrito de compras actual
function getShoppingCart() {
    if (browser) {
        const cartString = localStorage.getItem("shopping_cart");
        return cartString ? JSON.parse(cartString) : [];
    }
    return [];
}

// Función para guardar el carrito de compras actual
function saveShoppingCart(cart) {
    if (browser) {
        localStorage.setItem("shopping_cart", JSON.stringify(cart));
    }
}

// Función para agregar un producto al carrito
export function shoppingCartAddProduct(id, amount = 1) {
    const cart = getShoppingCart();
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.amount += amount;
    } else {
        cart.push({ id, amount });
    }

    saveShoppingCart(cart);
}

// Función para actualizar la cantidad de un producto en el carrito
export function shoppingCartUpdateQuantity(id, sign) {
    const cart = getShoppingCart();
    const itemToUpdate = cart.find(item => item.id === id);

    if (itemToUpdate) {
        if (sign === "+") {
            itemToUpdate.amount++;
        } else if (sign === "-" && itemToUpdate.amount > 1) {
            itemToUpdate.amount--;
        }
        saveShoppingCart(cart);
    }
}

// Función para eliminar un producto del carrito
export function shoppingCartRemoveItem(id) {
    const cart = getShoppingCart();
    const updatedCart = cart.filter(item => item.id !== id);
    saveShoppingCart(updatedCart);
}

// Función para obtener todos los productos en el carrito
export function shoppingCartGetAllItems() {
    return getShoppingCart();
}

// Función para contar cuántos elementos hay en el carrito de compras
export function countCartItems() {
    const cart = getShoppingCart();
    const totalItems = cart.reduce((count, item) => count + item.amount, 0);
    return totalItems;
}

// Ejemplos de uso:
// Agregar un producto al carrito
// shoppingCartAddProduct("producto1", 2);

// Actualizar la cantidad de un producto en el carrito
// shoppingCartUpdateQuantity("producto1", "+");

// Eliminar un producto del carrito
// shoppingCartRemoveItem("producto2");

// Obtener todos los productos en el carrito
// const cartItems = shoppingCartGetAllItems();
// console.log(cartItems);
