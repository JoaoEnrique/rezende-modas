document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const loginResponse = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            
            const { token } = await loginResponse.json();

            if (token) {
                Cookies.set("token", `${token}`, { expires: 7 });
                location.replace('/');
            }
            
            const errorMessage = document.querySelector('.error');
            errorMessage.innerHTML = "Email ou senha incorretos"
        } catch(err) {
            console.log(err);
        }

    })
})