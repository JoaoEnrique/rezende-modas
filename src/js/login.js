document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const loginResponse = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });

            const  { token } = await loginResponse.json();
            
            if (token) {
        
                Cookies.set("token", `${token}`, { expires: 7 });
                location.replace('/');
            } 

            const errorElement = document.querySelector('.error')
            errorElement.innerHTML = "Usuário ou senha incorretos"
        } catch(err) {
            console.log(err);
        }

    })
})