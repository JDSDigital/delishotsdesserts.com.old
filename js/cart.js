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

		var selectProductLi = "#selectProduct"+i;
		$("#selectProduct"+i).on("change", {name: selectProductLi}, createSelectType);
		
		document.getElementById("selectType"+i).addEventListener("change", createSelectQuantity);
		document.getElementById("selectQuantity"+i).addEventListener("change", createEnding);

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

		function createSelectQuantity() {

		}

		function createEnding() {
		}

		i++;

	}

	function removeProduct() {

		var element = document.getElementById(this.id);
		element.parentNode.removeChild(element);

	}

/*********************** Fin de escoge tu mejor opción ***********************/

})
