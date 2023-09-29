import { goto } from "$app/navigation";
import { calculateCartTotal } from "$lib/cart/shoppingCart";

let visible = false;
let state_response = false;
function generarReference() {
    const REFERENCE = 'FL';
    const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let referencia = REFERENCE;

    for (let i = 0; i < 10; i++) {
        const indice = Math.floor(Math.random() * caracteresPermitidos.length);
        referencia += caracteresPermitidos[indice];
    }

    return referencia;
}
export async function openWompi(price = 0) {
    const valueCart = calculateCartTotal();
    // @ts-ignore
    var wompi = new WidgetCheckout({
        currency: 'COP',
        amountInCents: `${valueCart}00`,
        reference: generarReference(),
        publicKey: 'pub_test_cW5h71eHppMV0xD8EWC02YrN7mIDMhEm'
    });
    wompi.open(function (result) {
        var transaction = result.transaction;
        console.log('return',transaction.status);
        if (transaction.status == 'APPROVED') {
            goto('/checkout/success')   
        }

    });
    return 'error'
}