$(document).ready(function(){
/************************* Escoge tu mejor opción ****************************/

	$('.add-product li').click(function() {

		$('.show-product').addClass('current');
		addProduct();

	});

	$('#product-list').click(function() {

		//$("li").on("click", removeProduct);

	});

	var i = 0;

	function addProduct() {

	  var ul = document.getElementById("product-list");
	  var li = document.createElement("li");
		li.setAttribute("id", "product"+i);
	  ul.appendChild(li);

		//$(li).append("<select id='selectProduct"+i+"' class='form-control'><option value='0'>Seleccione un producto</option></select><select id='selectType"+i+"' class='form-control'><option value='0'>Seleccione una presentación</option></select><select id='selectQuantity"+i+"' class='form-control'><option value='0'>Seleccione la cantidad</option></select>");

		$(li).append("<div class='row-fluid'><div class='col-md-4'><select id='selectProduct"+i+"' class='form-control'><option value='0'>Seleccione un producto</option></select></div><div class='col-md-4'><select id='selectType"+i+"' class='form-control'><option value='0'>Seleccione una presentación</option></select></div><div class='col-md-4'><select id='selectQuantity"+i+"' class='form-control'><option value='0'>Seleccione la cantidad</option></select></div></div>");

		createSelectProduct();

/**************************** Registro de eventos ****************************/

		var selectProductLi = "selectProduct"+i;
		var selectTypeLi = "selectType"+i;
		var selectQuantityLi = "selectQuantity"+i;

		$("#"+selectProductLi).on("change", {name: selectProductLi}, createSelectType);

		$("#"+selectTypeLi).on("change", {name: selectTypeLi}, createSelectQuantity);

		$("#"+selectQuantityLi).on("change", {name: selectQuantityLi}, createEnding);

/************************ Fin de registro de eventos *************************/

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
			var lineId = selectedField.parentNode.parentNode.parentNode.id;
			lineId = lineId.split('');
			lineId = lineId[lineId.length-1];

			// Find product data in prices.js
			function getProductByProductName(val) {
			  return prices.filter(
			      function(prices){return prices.product == val}
			  );
			}

			var found = getProductByProductName(selectedValue);
			var dropdown = document.getElementById("selectType"+lineId);

			// Empty dropdown list
			dropdown.options.length = 1;

			// Fill the type dropdown list
			if (found[0].full === true) {

				dropdown[dropdown.length] = new Option("Postre completo", 0);

			}

			if (found[0].shot === true) {

				dropdown[dropdown.length] = new Option("Postre en shots", 1);

			}

		}

		function createSelectQuantity(event) {

			// Get dropdown element from DOM
			var selectedField = document.getElementById(event.data.name);
			var selectedValue = selectedField.options[selectedField.selectedIndex].value;

		}

		function createEnding(event) {

			// Get dropdown element from DOM
			var selectedField = document.getElementById(event.data.name);
			var selectedValue = selectedField.options[selectedField.selectedIndex].value;

		}

		i++;

	}

	function removeProduct() {

		var element = document.getElementById(this.id);
		element.parentNode.removeChild(element);

	}

/*********************** Fin de escoge tu mejor opción ***********************/

})
