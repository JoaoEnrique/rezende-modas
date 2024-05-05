const dropdownButton = document.querySelector('.dropdown-button')
const logoutButton = document.querySelector('.logout');

function logout() {
	document.cookie =  'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
	location.reload();
}

function toggleDropdown() {
	var dropdown = document.getElementById('dropdown');
	dropdown.classList.toggle('hidden');
}

dropdownButton.addEventListener('click', toggleDropdown)
logoutButton.addEventListener('click', logout)

// function addProduct(){
// 	let product_id = $('#selct-product').val()
// 	let code = 0;

// 	$('#list-products > div').each(function(){
// 		code = $(this).data('code')
// 	})

// 	$.ajax({
// 		url: `/api/products/${product_id}`,
// 		type: 'GET',

// 		success: function(response){
// 			code ++;
// 			let product = response;
// 			$('#list-products').prepend(`
// 			<div data-code='${code}' id="product-${code}" class="grid grid-cols-10 gap-4">
// 				<input type="hidden" name="product_id[]" id="product_id[${code}]" class="d-none" value="${product.id}" required>

// 				<div class="col-span-2">
// 					<label for="reference[${code}]">Referencia</label>
// 					<input type="text" name="reference[]" id="reference[${code}]" class="input-facebook" value="${product.reference}" required disabled>
// 				</div>
// 				<div class="col-span-2">
// 					<label for="type[${code}]">Tipo</label>
// 					<input type="text" min="1" name="type[]" id="type[${code}]" class="input-facebook" value="${product.type}" required disabled>
// 				</div>
// 				<div class="col-span-2">
// 					<label for="price[${code}]">Preco</label>
// 					<input maxlength="10" onkeyup="calcSubtotal()" type="text" name="price[]" id="price[${code}]" class="input-facebook"  value="${product.price}"  required disabled>
// 				</div>
// 				<div class="col-span-1">
// 					<label for="quantity[${code}]">Quantidade</label>
// 					<input maxlength="10" onkeyup="calcSubtotal(${code})" value="1" type="text" name="quantity[]" id="quantity[${code}]" class="input-facebook" required>
// 				</div>
// 				<div class="col-span-2">
// 					<label for="subtotal[${code}]">Subtotal</label>
// 					<input maxlength="10" onkeyup="calcSubtotal(${code})" type="text" name="subtotal[]" id="subtotal[${code}]" class="input-facebook" required disabled>
// 				</div>
// 				<div class="col-span-1" style="display: contents;">
// 					<button data-code="${code}" type="button" class="btn-remov-product text-red-500 hover:text-red-700">
// 						<i class="fas fa-trash-alt"></i>
// 					</button>
// 				</div>
// 			</div>
// 			`);
// 			calcSubtotal(code)

// 		},
// 		error(xhr, status, error){
// 			var errorMessage = xhr.status + ': ' + xhr.statusText;
// 			alertError('Não foi possível adicionar o produto.', errorMessage);
// 		}
// 	})
// }

// function calcSubtotal(code){
// 	let quantity = isNaN(parseFloat($(`input[id="quantity[${code}]"]`).val())) ? 0 : parseFloat($(`input[id="quantity[${code}]"]`).val())
// 	let price = isNaN(parseFloat($(`input[id="price[${code}]"]`).val())) ? 0 : parseFloat($(`input[id="price[${code}]"]`).val())
// 	let subtotal = (quantity * price).toFixed(2);

// 	$(`input[id="subtotal[${code}]"]`).val(subtotal)
// 	calcTotal()
// }

// function calcTotal(){
// 	let total = 0;
// 	$('#list-products > div').each(function(){
// 		total += parseFloat($(this).find('input[name="subtotal[]"]').val());
// 	})

// 	$(`input[id="total"]`).val(total)
// }

// function removProduct(){
// 	let code = $(this).data('code')
// 	let total_products = 0;

// 	$(`#product-${code}`).remove()
// 	code--;

// 	$('#list-products > div').each(function(){
// 		total_products++;
// 	})

// 	if(!total_products)
// 		$("#list-products").css('margin-bottom', '0px')

// 	calcSubtotal(code)
// }

// $(document).ready(function(){
// 	$(document).on('change', "#selct-product", addProduct)
// 	$(document).on('click', '.btn-remov-product', removProduct) //remover consumivel
// })