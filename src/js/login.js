document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        const loginResponse = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

        const  { token } = await loginResponse.json();

        Cookies.set("token", `${token}`, { expires: 7 });
    })
})