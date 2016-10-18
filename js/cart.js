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

		$(li).append("<select id='selectProduct"+i+"'><option value='0'>Seleccione un producto</option></select><select id='selectType"+i+"'><option value='0'>Seleccione una presentación</option></select><select id='selectQuantity"+i+"'><option value='0'>Seleccione la cantidad</option></select>");

/**************************** Registro de eventos ****************************/

		var selectProductLi = "#selectProduct"+i;
		$("#selectProduct"+i).on("change", {name: selectProductLi}, createSelectType);

		var selectTypeLi = "#selectType"+i;
		$("#selectType"+i).on("change", {name: selectTypeLi}, createSelectQuantity);

		var selectQuantityLi = "#selectQuantity"+i;
		$("#selectQuantity"+i).on("change", {name: selectQuantityLi}, createEnding);

/************************ Fin de registro de eventos *************************/

		// Get dropdown element from DOM
		var dropdown = document.getElementById("selectProduct"+i);

		// Loop through the array
		for (var j = 0; j < prices.length; ++j) {
		    // Append the element to the end of Array list
		    dropdown[dropdown.length] = new Option(prices[j].product, prices[j].product);
		}

		function createSelectType(event) {
			console.log(event.data.name);
		}

		function createSelectQuantity(event) {
			console.log(event.data.name);
		}

		function createEnding(event) {
			console.log(event.data.name);
		}

		i++;

	}

	function removeProduct() {

		var element = document.getElementById(this.id);
		element.parentNode.removeChild(element);

	}

/*********************** Fin de escoge tu mejor opción ***********************/

})
