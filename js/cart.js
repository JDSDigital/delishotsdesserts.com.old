$(document).ready(function(){
/************************* Escoge tu mejor opción ****************************/

	$('.add-product li').click(function() {

		$('.show-product, .resultLine, .calculate').addClass('current');

		addProduct();

	});

	$("#buttonCalculate").on("click", function() {

		var listaProductos = document.getElementById('product-list').getElementsByTagName('select');
		var total = 0;
		var price = 0;

		for (var p = 0; p < listaProductos.length; p = p+3) {

			function getProductByProductName(val) {
				return prices.filter(
						function(prices){return prices.product == val}
				);
			}

			var selectedProduct = getProductByProductName(listaProductos[p].options[listaProductos[p].selectedIndex].value);
			var selectedType = listaProductos[p+1].options[listaProductos[p+1].selectedIndex].value;
			var selectedQuantity = listaProductos[p+2].options[listaProductos[p+2].selectedIndex].value;

			if (selectedProduct.length !== 0) {

				if (selectedType == 1) {
					price = selectedProduct[0].fullPrice * selectedQuantity;
					total = total + price;
				} else if (selectedType == 2) {
					price = selectedProduct[0].shotPrice * selectedQuantity;
					total = total + price;
				}

			}

		}

		document.getElementById("result").innerHTML = "<p>" + total + "</p>";

	});

	$("#buttonContinue").on("click", function() {
		var listaProductos = document.getElementById('product-list').getElementsByTagName('select');
		var shopList = [];

		for (var s = 0; s < listaProductos.length; s=s+3) {

			var selectedProduct = listaProductos[s].options[listaProductos[s].selectedIndex].value;
			var selectedType = listaProductos[s+1].options[listaProductos[s+1].selectedIndex].value;
			var selectedQuantity = listaProductos[s+2].options[listaProductos[s+2].selectedIndex].value;

			shopList.push([selectedProduct, selectedType, selectedQuantity]);
		}


	});

	var i = 0;

	function addProduct() {

	  var ul = document.getElementById("product-list");
	  var li = document.createElement("li");
		li.setAttribute("id", "product"+i);
	  ul.appendChild(li);

		//$(li).append("<div class='row-fluid' style='margin-bottom:50px;'><div class='col-md-4'><select id='selectProduct"+i+"' class='form-control'><option value='0'>Seleccione un producto</option></select></div><div class='col-md-4'><select id='selectType"+i+"' class='form-control'><option value='0'>Seleccione una presentación</option></select></div><div class='col-md-3'><select id='selectQuantity"+i+"' class='form-control'><option value='0'>Seleccione la cantidad</option></select></div><div class='col-md-1'><button id='deleteLi"+i+"' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></div></div>");

		$(li).append("<div class='row-fluid' style='margin-bottom:50px;'><div class='col-md-1'><button id='deleteLi"+i+"' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></div><div class='col-md-3'><div id='product-photo-"+i+"'><img class='product-photo-option' src='./img/products/0.png' /></div></div><div class='col-md-8'><div class='row-fluid'><table class='product-table' style='margin-bottom: 20px;'><tr><td>Seleccione un producto</td><td><select id='selectProduct"+i+"' class='form-control'><option value='0'>Seleccione un producto</option></select></td></tr><tr><td>Seleccione una presentacion</td><td><select id='selectType"+i+"' class='form-control'><option value='0'>Seleccione una presentación</option></select></td></tr><tr><td>Seleccione la cantidad</td><td><select id='selectQuantity"+i+"' class='form-control'><option value='0'>Seleccione la cantidad</option></select></td></tr></table></div></div></div>");

		createSelectProduct();

/**************************** Registro de eventos ****************************/

		var selectProductLi = "selectProduct"+i;
		var selectTypeLi = "selectType"+i;
		var selectQuantityLi = "selectQuantity"+i;
		var deleteLi = "deleteLi"+i;

		$("#"+selectProductLi).on("change", {name: selectProductLi}, createSelectType);

		$("#"+selectTypeLi).on("change", {name: selectTypeLi}, createSelectQuantity);

		//$("#"+selectQuantityLi).on("change", {name: selectQuantityLi}, createEnding);

		$("#"+deleteLi).on("click", removeProduct);

/************************ Fin de registro de eventos *************************/

		i++;

	}

	function createSelectProduct() {

		// Get dropdown element from DOM
		var dropdown = document.getElementById("selectProduct"+i);

		// Loop through the array
		for (var j = 0; j < prices.length; ++j) {
				// Append the element to the end of Array list
				dropdown[dropdown.length] = new Option(prices[j].name, prices[j].product);
		}

	}

	function createSelectType(event) {

		var selectedField = document.getElementById(event.data.name);
		var selectedValue = selectedField.options[selectedField.selectedIndex].value;
		//var lineId = selectedField.parentNode.parentNode.parentNode.id;
		var lineId = selectedField.id;
		lineId = lineId.split('');
		lineId = lineId[lineId.length-1];

		selectPhoto(lineId, selectedValue);

		// Find product data in prices.js
		function getProductByProductName(val) {
			return prices.filter(
					function(prices){return prices.product == val}
			);
		}

		var found = getProductByProductName(selectedValue);
		var dropdownType = document.getElementById("selectType"+lineId);

		// Empty dropdown list
		dropdownType.options.length = 1;

		// Fill the type dropdown list
		if (selectedValue != 0) {
			if (found[0].full === true) {

				dropdownType[dropdownType.length] = new Option("Postre completo", 1);

			}

			if (found[0].shot === true) {

				dropdownType[dropdownType.length] = new Option("Postre en shots", 2);

			}
		}

	}

	function createSelectQuantity(event) {

		// Get dropdown element from DOM
		var selectedField = document.getElementById(event.data.name);
		var selectedValue = selectedField.options[selectedField.selectedIndex].value;

		var lineId = selectedField.id;
		lineId = lineId.split('');
		lineId = lineId[lineId.length-1];

		var dropdownQuantity = document.getElementById("selectQuantity"+lineId);

		if (selectedValue == 1) {

			// Empty dropdown list
			dropdownQuantity.options.length = 1;

			for (k = 1; k < 7; k++) {
				dropdownQuantity[dropdownQuantity.length] = new Option(k, k);
			}

		} else if (selectedValue == 2) {

			// Empty dropdown list
			dropdownQuantity.options.length = 1;

			for (k = 6; k < 37; k = k+6) {
				dropdownQuantity[dropdownQuantity.length] = new Option(k, k);
			}

		}

	}

	function selectPhoto(value, product) {
		var photoId = "product-photo-"+value;
		if (product == 0) {
			document.getElementById(photoId).innerHTML = "<img class='product-photo-option' src='./img/products/"+product+".png' />";
		} else {
			document.getElementById(photoId).innerHTML = "<img class='product-photo-option' src='./img/products/"+product+".jpg' />";
		}

	}

	function createEnding(event) {

		// Get dropdown element from DOM
		var selectedField = document.getElementById(event.data.name);
		var selectedValue = selectedField.options[selectedField.selectedIndex].value;

	}

	function removeProduct() {

		var element = document.getElementById(this.id);
		//element.parentNode.removeChild(element);
		element = element.parentNode.parentNode.parentNode;
		element.parentNode.removeChild(element);

	}

/*********************** Fin de escoge tu mejor opción ***********************/

})
