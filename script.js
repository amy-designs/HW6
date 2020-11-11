function increment() {
    document.getElementById("quant").stepUp();
 }
 
 function decrement() {
    document.getElementById("quant").stepDown();
 }

 function changeSrc() {
    if (document.getElementById("pink").checked) {
    document.getElementById("detail").src = "Couch%20Detail.jpg";
    } else if (document.getElementById("blue").checked) { 
    document.getElementById("detail").src = "Pillow-blue.jpg";
    } else if (document.getElementById("navy").checked) { 
        document.getElementById("detail").src = "Pillow-navy.jpg";
    } else if (document.getElementById("white").checked) { 
        document.getElementById("detail").src = "Pillow-white.jpg";
        }
}

var productArr = [];
var newProductArr = [];
var productNum = 0;

class Product {
	constructor(color, material, size, quantity) {
		this.color = color;
        this.material = material;
		this.size=size;
		this.quantity=quantity;
	}
}


function checkoutPageLoaded() {
	//Now that the checkout page is loaded, lets grab that localStorage adta
	productNum = 0
	var loadedProductArr = localStorage.getItem('order');
	newProductArr = JSON.parse(loadedProductArr);
	//Now newProductArr is the equivalent of the productArr we stored on the index.html page 
	
	console.log('we are on checkout page');
	console.log(newProductArr);
	
	var listOfProducts = document.getElementById('listOfProducts');
	
	for(var i = 0; i < newProductArr.length; i++) {
	   var pillow = newProductArr[i];
	   var pillowName = 'Square Couch Pillow';
	   var pillowColor = pillow.color;
	   var pillowMaterial = pillow.material;
	   var pillowSize = pillow.size;
	   var pillowQuant = pillow.quantity;

	   if (pillowColor == "After School Special") {
		listOfProducts.innerHTML += '<div class="cartcolumn" id="cartimg"><img src="pinkprod.png">';
		listOfProducts.innerHTML += '<div class="cartcolumn" id="prodname">' + pillowName + '</div>';
		listOfProducts.innerHTML += '<div class="cartcolumn" id="selections">' + pillowColor 
		+ '<br>Size ' + pillowSize + '<br>' + pillowMaterial + '<br>QTY: ' + pillowQuant + '</div>';
		listOfProducts.innerHTML += '<div class="cartcolumn" id="delete" onclick="deleteProduct(' + i + ')"> X </div>';
		productNum = productNum + pillowQuant;
		}
		else if (pillowColor == "Rainy Day") {
		listOfProducts.innerHTML += '<div class="cartcolumn" id="cartimg"><img src="blueprod.png">';
		listOfProducts.innerHTML += '<div class="cartcolumn" id="prodname">' + pillowName  + '</div>';
		listOfProducts.innerHTML += '<div class="cartcolumn" id="selections">' + pillowColor 
		+ '<br>Size ' + pillowSize + '<br>' + pillowMaterial + '<br>QTY: ' + pillowQuant + '</div>';
		listOfProducts.innerHTML += '<div class="cartcolumn" id="delete" onclick="deleteProduct(' + i + ')"> X </div>';
		productNum = productNum + pillowQuant;
		}
		else if (pillowColor == "Cozy Denim") {
		listOfProducts.innerHTML += '<div class="cartcolumn" id="cartimg"><img src="whiteprod.jpg">';
		listOfProducts.innerHTML += '<div class="cartcolumn" id="prodname">' + pillowName +  '</div>';
		listOfProducts.innerHTML += '<div class="cartcolumn" id="selections">' + pillowColor 
		+ '<br>Size ' + pillowSize + '<br>' + pillowMaterial + '<br>QTY: ' + pillowQuant + '</div>';
		listOfProducts.innerHTML += '<div class="cartcolumn" id="delete" onclick="deleteProduct(' + i + ')"> X </div>';
		productNum = productNum + pillowQuant;
		}
		else if (pillowColor == "Morning Haze") {
		listOfProducts.innerHTML += '<div class="cartcolumn" id="cartimg"><img src="navyprod.jpg">';
		listOfProducts.innerHTML += '<div class="cartcolumn" id="prodname">' + pillowName +  '</div>';
		listOfProducts.innerHTML += '<div class="cartcolumn" id="selections">' + pillowColor 
		+ '<br>Size ' + pillowSize + '<br>' + pillowMaterial + '<br>QTY: ' + pillowQuant + '</div>';
		listOfProducts.innerHTML += '<div class="cartcolumn" id="delete" onclick="deleteProduct(' + i + ')"> X </div>';
		productNum = productNum + pillowQuant;
	   }
	   
	}

	updateCartNumber(productNum);
}


function saveEdits() {
	localStorage.setItem('order', JSON.stringify(newProductArr))
}

function deleteProduct(i) {
	newProductArr.splice(i,1)
	listOfProducts.innerHTML = ''
	productNum = 0;
	
	for(var i = 0; i < newProductArr.length; i++) {
	   var pillow = newProductArr[i]
	   if (pillow) {
			var pillowName = 'Square Couch Pillow'
			var pillowColor = pillow.color
			var pillowMaterial = pillow.material
			var pillowSize = pillow.size
			var pillowQuant = pillow.quantity
		   	if (pillowColor == "After School Special") {
			listOfProducts.innerHTML += '<div class="pinkpill"><img src="pinkprod.png">' + pillowName + ' Color: ' + pillowColor 
			+ ' Size: ' + pillowSize + ' Material: ' + pillowMaterial + 'QTY: ' + pillowQuant + '</div>';
			listOfProducts.innerHTML += '<span class="delete" onclick="deleteProduct(' + i + ')"> X </span>';
			productNum = productNum + pillowQuant;
			}
			else if (pillowColor == "Rainy Day") {
			listOfProducts.innerHTML += '<div class="bluepill"><img src="blueprod.png">' + pillowName + ' Color: ' + pillowColor 
			+ ' Size: ' + pillowSize + ' Material: ' + pillowMaterial + 'QTY: ' + pillowQuant + '</div>';
			listOfProducts.innerHTML += '<span class="delete" onclick="deleteProduct(' + i + ')"> X </span>';
			productNum = productNum + pillowQuant;
			}
			else if (pillowColor == "Cozy Denim") {
			listOfProducts.innerHTML += '<div class="navypill"><img src="whiteprod.jpg">' + pillowName + ' Color: ' + pillowColor 
			+ ' Size: ' + pillowSize + ' Material: ' + pillowMaterial + 'QTY: ' + pillowQuant + '</div>';
			listOfProducts.innerHTML += '<span class="delete" onclick="deleteProduct(' + i + ')"> X </span>';
			productNum = productNum + pillowQuant;
			}
			else if (pillowColor == "Morning Haze") {
			listOfProducts.innerHTML += '<div class="navypill"><img src="navyprod.jpg">' + pillowName + ' Color: ' + pillowColor 
			+ ' Size: ' + pillowSize + ' Material: ' + pillowMaterial + 'QTY: ' + pillowQuant + '</div>';
			listOfProducts.innerHTML += '<span class="delete" onclick="deleteProduct(' + i + ')"> X </span>';
			productNum = productNum + pillowQuant;
		   }
	   }
	   
	   
	}
	updateCartNumber(productNum);
}
	

function addToCart() {
	var colors = document.getElementsByName("color");
	var material = document.getElementsByName("material");
	var size = document.getElementsByName("size");
	var quant = document.getElementById("quant").value;

	var selectedColor = 'blank';
	var selectedMaterial = 'blank';
	var selectedSize = 'blank';

	for(var i = 0; i < colors.length; i++) {
	   if(colors[i].checked) {
		   selectedColor = colors[i].value;
	   }
	}

	for(var i = 0; i < material.length; i++) {
		if(material[i].checked) {
			selectedMaterial = material[i].value;
		}
	 }

	 for(var i = 0; i < size.length; i++) {
		if(size[i].checked) {
			selectedSize = size[i].value;
		}
	 }
	var quantCount = parseInt(quant);
	if (isNaN(quantCount)) {
	}
	
	if (selectedColor != 'blank' && selectedMaterial != 'blank' && selectedSize != 'blank' && quantCount > 0) {
		var pillow = new Product(selectedColor, selectedMaterial, selectedSize, quantCount);
		productArr.push(pillow);
	
		console.log(productArr);
		
		localStorage.setItem('order', JSON.stringify(productArr));
		productNum = productNum + quantCount;
		updateCartNumber(productNum);
	} else {
		//alert('Please make sure all fields are selected')
		var errorMessage = 'Please select ';
		var errorArr=[];
		
		if (selectedColor == 'blank') {
			var addErr = errorArr.push('color');

		} 
		if (selectedMaterial == 'blank') {
			var addErr = errorArr.push('material');

		} 
		if (selectedSize == 'blank') {
			var addErr = errorArr.push('size');

		} 
		
		if (!(quantCount >= 1)) {
			var addErr = errorArr.push('quantity');
		}

		for(var i = 0; i < errorArr.length; i++) {
			if (i < (errorArr.length - 1)) {
				errorMessage += errorArr[i] + ', ';
			} else {
				errorMessage += errorArr[i];
			}
		}
		alert(errorMessage)
	}
		
};

function updateCartNumber(num) {
	var cartCount = document.getElementById("cartCount");
	cartCount.innerHTML = num;
};


function goToCheckoutPage() {
	//Store our existing data structure of products into localStorage
	//Then navigate to the checkout page
	
	//Set the product order in local storage
	//The 'productArr' variable is an array of product objects we made above
	localStorage.setItem('order', JSON.stringify(productArr))
	
	window.location.replace('basket.html')
	//If this does not work for github pages or w/e try searching for
	//vanilla javascript navigate to HTML page
}