document.addEventListener("DOMContentLoaded", () => {
    const removeButton = document.querySelectorAll(".btn-remove-employee");

    removeButton.forEach(button => {
            button.addEventListener("click", async (event) => {
                const userId = button.getAttribute("data-employee-id");

                try {
                    const removeResponse = await fetch(`/api/employees/${userId}`, {
                        method: "DELETE",
                    });
                    
                    location.reload();
                } catch(err) {
                    console.log(err);
                }
        })
    })
})