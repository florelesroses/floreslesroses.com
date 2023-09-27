import { writable } from "svelte/store";
import { countCartItems } from "./shoppingCart";

export const itemsCart = writable(countCartItems())