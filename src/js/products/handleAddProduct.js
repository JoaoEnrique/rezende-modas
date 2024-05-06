document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        console.log(data)

        try {
            const loginResponse = await fetch(`http://localhost:3000/api/products`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });

            location.replace('/products/list');
        } catch(err) {
            console.log(err);
        }

    })
})