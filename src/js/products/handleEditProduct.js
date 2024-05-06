document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const loginResponse = await fetch(`http://localhost:3000/api/products/${data.id}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            const loginResponseData = await loginResponse.json();
            console.log(loginResponseData)

            location.replace('/products/list');
        } catch(err) {
            console.log(err);
        }

    })
})