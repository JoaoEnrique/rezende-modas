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

            if (!loginResponse.ok) {
                // Verifica se a resposta não está "ok" (status code entre 200 e 299)
                // Se não estiver, trata o erro
                const errorMessage = await loginResponse.text(); // Extrai a mensagem de erro da resposta
                console.error(errorMessage); // Exibe o erro no console ou faça algo com ele
            } else {
                // Se a resposta estiver "ok", continue com o processamento normal
                const { token } = await loginResponse.json();
                if (token) {
                    Cookies.set("token", `${token}`, { expires: 7 });
                    location.replace('/');
                }
            }

            
            // const { token } = await loginResponse.json();

            // if (token) {
            //     Cookies.set("token", `${token}`, { expires: 7 });
            //     location.replace('/');
            // }

            const errorMessage = document.querySelector('.error');
            errorMessage.innerHTML = "Email ou senha incorretos"
        } catch(err) {
            console.log(err);
        }

    })
})