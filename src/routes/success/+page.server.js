
export async function load() {
    const URL = 'https://formspree.io/f/xvojqzzk';
    async function sendFormContact() {
        try {
            const dataBody = JSON.stringify({
                state: 'Nueva compra realizada, ingrese a Wompi para validar la información',
            });
            const response = await fetch(URL, {
                method: 'POST',
                body: dataBody,
                headers: {
                    Accept: 'application/json'
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
    sendFormContact()


}