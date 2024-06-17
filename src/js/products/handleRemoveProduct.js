document.addEventListener("DOMContentLoaded", () => {
    const removeButton = document.querySelectorAll(".btn-remove-product");
    removeButton.forEach(button => {
            button.addEventListener("click", async (event) => {
                const productId = button.getAttribute('data-product-id');
                console.log(productId);

                try {
                    const removeResponse = await fetch(`/api/products/${productId}`, {
                        method: "DELETE",
                    });
                    
                    location.reload();
                } catch(err) {
                    console.log(err);
                }
        })
    })
})