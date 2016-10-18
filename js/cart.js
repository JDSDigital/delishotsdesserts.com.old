$(document).ready(function(){
/************************* Escoge tu mejor opción ****************************/

	$('.add-product li').click(function() {

		$('.show-product').addClass('current');
		addProduct();

	});

	$('#product-list').click(function() {

		$("li").on("click", removeProduct);

	});

	var i = 0;

	function addProduct() {

	  var ul = document.getElementById("product-list");
	  var li = document.createElement("li");
		li.setAttribute("id", i);
	  ul.appendChild(li);
		//$(li).append("Texto "+i);
    $(li).append(prices[i].product);
		i++;

	}

	function removeProduct() {

		var element = document.getElementById(this.id);
		element.parentNode.removeChild(element);

	}

/*********************** Fin de escoge tu mejor opción ***********************/

})
