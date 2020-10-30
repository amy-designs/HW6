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


 var productArr = []

//This is going to be a product class for flowers you can purchase
class Product {
	constructor(color, material, size) {
		this.color = color
        this.material = material
        this.size=size
	}
}

function addToCart() {
	var material = document.getElementsByName("material").value;
	
	//alert('selected flower type: ' + type)
	
	
	//Below this gets our selected color of the flower from the radio buttons
	
	var colors = document.getElementsByName("color");
	//colors is now an array of the three inputs (acting as radio buttons) from our HTML page
	//The three items in this 'colors' array can be thought of as three HTML element objects
	
	var selectedColor = 'blank';

	for(var i = 0; i < colors.length; i++) {
	   if(colors[i].checked) {
		   selectedColor = colors[i].value;
	   }
	}

	var size = document.getElementsByName("size");
	
	var quant = document.getElementById("quant").value;
	//quant == '4'
	var quantCount = parseInt(quant);
	for(var i = 0; i < quantCount; i++) {
		var pillow = new Product(selectedColor, material, size);
		productArr.push(pillow);
	}
	
	console.log(productArr)
	
    // var pillow = new Product(color, material, size)
	
	// productArr.push(pillow)	
	
    updateCartNumber(productArr.length)

    
    const json = JSON.stringify(productArr);
    localStorage.setItem("items", json);
};

function updateCartNumber(num) {
	var cartCount = document.getElementById("cartCount");
	cartCount.innerHTML = num;
};

