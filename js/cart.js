$(document).ready(function(){

	var i = 0;
	var j;
	var k;
	var p;

	$('.add-product li').click(function() {
		$('.show-product, .resultLine, .calculate').addClass('current');
		addProduct();
	});

	$("#buttonCalculate").on("click", buttonCalculate);
	$("#buttonContinueToProducts").on("click", function () {
        return buttonContinueToProducts();
    });

	function addProduct() {

		var ul = document.getElementById("product-list");
		var li = document.createElement("li");
		li.setAttribute("id", "product"+i);
		ul.appendChild(li);

		$(li).append("" +
			"<div class='row-fluid' style='margin-bottom:50px;'>" +
				"<div class='col-md-1'>" +
					"<button id='deleteLi"+i+"' class='btn btn-danger btn-remove-product'>" +
						"<span class='glyphicon glyphicon-remove'></span>" +
					"</button>" +
				"</div>" +
				"<div class='col-md-3'>" +
					"<div id='product-photo-"+i+"'>" +
						"<img class='product-photo-option' src='./img/cart/0.png' />" +
					"</div>" +
				"</div>" +
				"<div class='col-md-8'>" +
					"<div class='row-fluid'>" +
						"<table class='product-table' style='margin-bottom: 20px;'>" +
							"<tr>" +
								"<td>Seleccione un producto</td>" +
								"<td>" +
									"<select id='selectProduct"+i+"' class='form-control'>" +
										"<option value='0'>Seleccione un producto</option>" +
									"</select>" +
								"</td>" +
							"</tr>" +
							"<tr>" +
								"<td>Seleccione una presentacion</td>" +
								"<td>" +
									"<select disabled id='selectType"+i+"' class='form-control'>" +
										"<option value='0'>Seleccione una presentación</option>" +
									"</select>" +
								"</td>" +
							"</tr>" +
							"<tr>" +
								"<td>Seleccione la cantidad</td>" +
								"<td>" +
									"<select disabled id='selectQuantity"+i+"' class='form-control'>" +
										"<option value='0'>Seleccione la cantidad</option>" +
									"</select>" +
								"</td>" +
							"</tr>" +
						"</table>" +
					"</div>" +
				"</div>" +
			"</div>"
		);

		createSelectProduct();

/**************************** Registro de eventos ****************************/

		var selectProductLi = "selectProduct"+i;
		var selectTypeLi = "selectType"+i;
		var deleteLi = "deleteLi"+i;

		$("#"+selectProductLi).on("change", {name: selectProductLi}, createSelectType);
		$("#"+selectTypeLi).on("change", {name: selectTypeLi}, createSelectQuantity);
		$("#"+deleteLi).on("click", removeProduct);

/************************ Fin de registro de eventos *************************/

		i++;
	}

	function removeProduct() {

		var element = document.getElementById(this.id);
		//element.parentNode.removeChild(element);
		element = element.parentNode.parentNode.parentNode;
		element.parentNode.removeChild(element);

		var listaProductos = document.getElementById('product-list').getElementsByTagName('li');

		if (listaProductos.length === 0) {
			$('.show-product, .resultLine, .calculate').removeClass('current');
		}

	}

	function createSelectProduct() {

		// Get dropdown element from DOM
		var dropdown = document.getElementById("selectProduct"+i);

		// Loop through the array
		for (j = 0; j < prices.length; ++j) {
			// Append the element to the end of Array list
			dropdown[dropdown.length] = new Option(prices[j].name, prices[j].product);
		}

	}

	function createSelectType(event) {

		var selectedField = document.getElementById(event.data.name);
		var selectedValue = selectedField.options[selectedField.selectedIndex].value;
		var lineId = selectedField.id;
		lineId = lineId.split('');
		lineId = lineId[lineId.length-1];

		selectPhoto(lineId, selectedValue);

		var found = getProductByProductName(selectedValue);
		var dropdownType = document.getElementById("selectType"+lineId);

		// Empty dropdown list
		dropdownType.options.length = 1;

		// Fill the type dropdown list
        if (found[0].full == false && found[0].shot == false){
            $(dropdownType).prop('disabled', true);
			dropdownType[dropdownType.length] = new Option(found[0].name, 10);
			$(dropdownType).val(10);
			$(dropdownType).trigger("change");
        }
        else
            $(dropdownType).prop('disabled', false);

		if (selectedValue != 0) {
			if (found[0].full === true){
				for (j = 0; j < found[0].fullSize.length; j++) {
					dropdownType[dropdownType.length] = new Option("Torta de " + found[0].fullSize[j] + " Kg.", j+1);
				}
			}
			if (found[0].shot === true){
				for (k = 0; k < found[0].shotSize.length; k++) {
					dropdownType[dropdownType.length] = new Option("Shot de " + found[0].shotSize[k] + " Oz.", k+5);
				}
			}
		}

	}

	function createSelectQuantity() {

		// Get dropdown element from DOM
		var selectedValue = this.options[this.selectedIndex].value;
		var lineId = this.id;
		lineId = lineId.split('');
		lineId = lineId[lineId.length-1];

		var product = getProductByProductName(document.getElementById("selectProduct"+lineId).value);
		var dropdownQuantity = document.getElementById("selectQuantity"+lineId);

        $(dropdownQuantity).prop('disabled', false);

		if (selectedValue == 1 || selectedValue == 2 || selectedValue == 3 || selectedValue == 4) {
			// Empty dropdown list
			dropdownQuantity.options.length = 1;
			for (k = 0; k < product[0].fullQuantities.length; k++)
				dropdownQuantity[dropdownQuantity.length] = new Option(product[0].fullQuantities[k], k+1);

		} else if (selectedValue == 5 || selectedValue == 6 || selectedValue == 7 || selectedValue == 8) {
			// Empty dropdown list
			dropdownQuantity.options.length = 1;
			for (k = 0; k < product[0].shotQuantities.length; k++)
				dropdownQuantity[dropdownQuantity.length] = new Option(product[0].shotQuantities[k], product[0].shotQuantities[k]);

		} else if (selectedValue == 10) {
			// Empty dropdown list
			dropdownQuantity.options.length = 1;
			for (k = 0; k < product[0].quantities.length; k++)
				dropdownQuantity[dropdownQuantity.length] = new Option(product[0].quantities[k], product[0].quantities[k]);

		}
	}

});

function getProductByProductName(val) {
    return prices.filter(
        function(prices){return prices.product == val}
    );
}

function selectPhoto(value, product) {
	var photoId = "product-photo-"+value;
	if (product == 0) {
		document.getElementById(photoId).innerHTML = "<img class='product-photo-option' src='./img/cart/"+product+".png' />";
	} else {
		document.getElementById(photoId).innerHTML = "<img class='product-photo-option' src='./img/cart/"+product+".jpg' />";
	}
}

function buttonCalculate() {
	var listaProductos = document.getElementById('product-list').getElementsByTagName('select');
	var total = 0;
	var price = 0;

	for (p = 0; p < listaProductos.length; p = p+3) {

		var selectedProduct = getProductByProductName(listaProductos[p].options[listaProductos[p].selectedIndex].value);
		var selectedType = listaProductos[p+1].options[listaProductos[p+1].selectedIndex].value;
		var selectedQuantity = listaProductos[p+2].options[listaProductos[p+2].selectedIndex].value;

		if (selectedProduct == 0 || selectedType == 0 || selectedQuantity == 0) {
			$('.modal-title-messages').html('<strong>¡Atención!</strong>');
			$('.modal-body-messages').html('<p>Debe seleccionar todos los campos.</p>');
			$('.modal-footer-messages').html('<button type="button" class="btn btn-success" data-dismiss="modal">Continuar</button>');
			$("#modalMessages").modal('toggle');
			return null;
		} else {
			if (selectedType == 1 || selectedType == 2 || selectedType == 3 || selectedType == 4) {
				price = selectedProduct[0].fullPrice * selectedProduct[0].fullSize[selectedType-1] * selectedQuantity;
				total = total + price;
			} else if (selectedType == 5 || selectedType == 6 || selectedType == 7 || selectedType == 8) {
				price = selectedProduct[0].shotPrice * selectedProduct[0].shotSize[selectedType-5] *selectedQuantity;
				total = total + price;
			} else if (selectedType == 10) {
				price = selectedProduct[0].price * selectedQuantity;
				total = total + price;
			}
		}
	}
	document.getElementById("result").innerHTML = '<p class="text-align-right">' + total + '</p>';
	return total;
}

function buttonContinueToProducts() {
	var total = buttonCalculate();

	if (total != null){
		var listaProductos = document.getElementById('product-list').getElementsByTagName('select');
		var shopList = [];

		for (var s = 0; s < listaProductos.length; s = s + 3) {
			shopList.push([
				listaProductos[s].options[listaProductos[s].selectedIndex].value,
				listaProductos[s].options[listaProductos[s].selectedIndex].text,
				listaProductos[s + 1].options[listaProductos[s + 1].selectedIndex].value,
				listaProductos[s + 1].options[listaProductos[s + 1].selectedIndex].text,
				listaProductos[s + 2].options[listaProductos[s + 2].selectedIndex].value
			]);
		}

		var review = '<div class="container-fluid">';

		for (var i = 0; i < shopList.length; i++) {
			review = review.concat('' +
				'<div class="row modal-product">' +
					'<div class="col-md-5">' +
					'	<img class="product-photo-option" src="./img/cart/' + shopList[i][0] + '.jpg" />' +
					'</div>' +
					'<div class="col-md-7">' +
						'<div class="row">' +
						'	<p>Producto: ' + shopList[i][1] + '</p>' +
						'</div>' +
						'<div class="row">' +
							'<p>Presentación: ' + shopList[i][3] + '</p>' +
						'</div>' +
						'<div class="row">' +
							'<p>Cantidad: ' + shopList[i][4] + '</p>' +
						'</div>' +
					'</div>' +
				'</div>'
			);
		}

		review = review.concat('</div><hr /><p class="total">Total: ' + total + ' Bs.</p>');

		$('.modal-body-products').html(review);
		$("#modalProducts").modal('toggle');
		$("#buttonContinueToForm").on("click", function () {
			buttonContinueToForm(shopList);
		});
	}
}

function buttonContinueToForm(shopList) {
	$("#modalProducts").modal('toggle');
	$("#modalForm").modal('toggle');

	$("#buttonContinueToSend").on("click", function () {
		buttonContinueToSend(shopList);
	});
}


function buttonContinueToSend(shopList) {
	$("#modalForm").modal('toggle');

	var inputData = document.getElementById('contact-form').getElementsByTagName('input');
	var userData = {
		userName: inputData.userName.value,
		userPhone: inputData.userPhone.value,
		userMail: inputData.userMail.value,
		userDate: inputData.userDate.value
	};

	$.ajax({
		type: "POST",
		url: "./opcion.php",
		data: {shopList: JSON.stringify(shopList), userData: JSON.stringify(userData)},
		success: function () {
			$('.modal-title-messages').html('<strong>¡Éxito!</strong>');
			$('.modal-body-messages').html('<p>Hemos recibido exitosamente su solicitud, en breves instantes nos comunicaremos con usted.</p>');
			$('.modal-footer-messages').html('<button type="button" class="btn btn-success" data-dismiss="modal">Continuar</button>');
			$("#modalMessages").modal('toggle');
		},
		error: function () {
			$('.modal-title-messages').html('<strong>¡Error!</strong>');
			$('.modal-body-messages').html('<p>Ha ocurrido un error. Por favor vuelva a intentarlo más tarde.</p>');
			$('.modal-footer-messages').html('<button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>');
			$("#modalMessages").modal('toggle');
		}
	});
}