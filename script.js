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
		this.color = color
        this.material = material
		this.size=size
		this.quantity=quantity
	}
}


function checkoutPageLoaded() {
	//Now that the checkout page is loaded, lets grab that localStorage adta
	
	var loadedProductArr = localStorage.getItem('order')
	newProductArr = JSON.parse(loadedProductArr)
	//Now newProductArr is the equivalent of the productArr we stored on the index.html page 
	
	console.log('we are on checkout page')
	console.log(newProductArr)
	
	var listOfProducts = document.getElementById('listOfProducts')
	
	for(var i = 0; i < newProductArr.length; i++) {
	   var pillow = newProductArr[i]
	   var pillowName = 'Square Couch Pillow'
	   var pillowColor = pillow.color
	   var pillowMaterial = pillow.material
	   var pillowSize = pillow.size
	   var pillowQuant = pillow.quantity

	   if (pillowColor == "After School Special") {
		listOfProducts.innerHTML += '<div class="pinkpill"><img src="Couch%20Detail.jpg"> ' + pillowName + ' Color: ' + pillowColor 
		+ ' Size: ' + pillowSize + ' Material: ' + pillowMaterial + ' QTY: ' + pillowQuant + '</div>'
		listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + '); saveEdits();"> X </span>'
	   }
	   else if (pillowColor == "Rainy Day") {
		listOfProducts.innerHTML += '<div class="bluepill"><img src="Pillow-blue.jpg">' + pillowName + ' Color: ' + pillowColor 
		+ ' Size: ' + pillowSize + ' Material: ' + pillowMaterial + ' QTY: ' + pillowQuant + '</div>'
		listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + '); saveEdits();"> X </span>'
	   }
	   else if (pillowColor == "Cozy Denim") {
		listOfProducts.innerHTML += '<div class="navypill"><img src="Pillow-white.jpg"> ' + pillowName + ' Color: ' + pillowColor 
		+ ' Size: ' + pillowSize + ' Material: ' + pillowMaterial + ' QTY: ' + pillowQuant + '</div>'
		listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + '); saveEdits();"> X </span>'
	   }
	   else if (pillowColor == "Morning Haze") {
		listOfProducts.innerHTML += '<div class="navypill"><img src="Pillow-navy.jpg"> ' + pillowName + ' Color: ' + pillowColor 
		+ ' Size: ' + pillowSize + ' Material: ' + pillowMaterial + 'QTY: ' + pillowQuant + '</div>'
		listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + '); saveEdits();"> X </span>'
	   }
	   
	   
	}
}


function saveEdits() {
	localStorage.setItem('order', JSON.stringify(newProductArr))
}

function deleteProduct(i) {
	newProductArr.splice(i,1)
	listOfProducts.innerHTML = ''
	
	for(var i = 0; i < newProductArr.length; i++) {
	   var pillow = newProductArr[i]
	   if (pillow) {
			var pillowName = 'Square Couch Pillow'
			var pillowColor = pillow.color
			var pillowMaterial = pillow.material
			var pillowSize = pillow.size
			var pillowQuant = pillow.quantity
		   	if (pillowColor == "After School Special") {
			listOfProducts.innerHTML += '<div class="pinkpill"><img src="Couch%20Detail.jpg">' + pillowName + ' Color: ' + pillowColor 
			+ ' Size: ' + pillowSize + ' Material: ' + pillowMaterial + 'QTY: ' + pillowQuant + '</div>'
			listOfProducts.innerHTML += '<span class="delete" onclick="deleteProduct(' + i + ')"> X </span>'
			}
			else if (pillowColor == "Rainy Day") {
			listOfProducts.innerHTML += '<div class="bluepill"><img src="Pillow-blue.jpg">' + pillowName + ' Color: ' + pillowColor 
			+ ' Size: ' + pillowSize + ' Material: ' + pillowMaterial + 'QTY: ' + pillowQuant + '</div>'
			listOfProducts.innerHTML += '<span class="delete" onclick="deleteProduct(' + i + ')"> X </span>'
			}
			else if (pillowColor == "Cozy Denim") {
			listOfProducts.innerHTML += '<div class="navypill"><img src="Pillow-white.jpg">' + pillowName + ' Color: ' + pillowColor 
			+ ' Size: ' + pillowSize + ' Material: ' + pillowMaterial + 'QTY: ' + pillowQuant + '</div>'
			listOfProducts.innerHTML += '<span class="delete" onclick="deleteProduct(' + i + ')"> X </span>'
			}
			else if (pillowColor == "Morning Haze") {
			listOfProducts.innerHTML += '<div class="navypill"><img src="Pillow-navy.jpg">' + pillowName + ' Color: ' + pillowColor 
			+ ' Size: ' + pillowSize + ' Material: ' + pillowMaterial + 'QTY: ' + pillowQuant + '</div>'
			listOfProducts.innerHTML += '<span class="delete" onclick="deleteProduct(' + i + ')"> X </span>'
		   }
	   }
	   
	}
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
	productNum = productNum + quantCount;
		var pillow = new Product(selectedColor, selectedMaterial, selectedSize, quantCount);
		productArr.push(pillow);
	
	console.log(productArr)
	
	
    updateCartNumber(productNum)

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