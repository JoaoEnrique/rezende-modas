document.addEventListener("DOMContentLoaded", () => {
    const removeButton = document.querySelectorAll("i.fa-trash-alt");

    removeButton.forEach(button => {
            button.addEventListener("click", async (event) => {
                const userEditLink = button.parentElement.previousElementSibling.href;
                const userId = userEditLink.split("/").pop();

                try {
                    const removeResponse = await fetch(`http://localhost:3000/api/employees/${userId}`, {
                        method: "DELETE",
                    });
                    
                    location.reload();
                } catch(err) {
                    console.log(err);
                }
        })
    })
})