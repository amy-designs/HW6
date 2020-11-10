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


class Product {
	constructor(color, material, size) {
		this.color = color
        this.material = material
        this.size=size
	}
}

function addToCart() {
	var material = document.getElementsByName("material").value;

	
	var colors = document.getElementsByName("color");

	var selectedColor = 'blank';

	for(var i = 0; i < colors.length; i++) {
	   if(colors[i].checked) {
		   selectedColor = colors[i].value;
	   }
	}

	var size = document.getElementsByName("size");
	
	var quant = document.getElementById("quant").value;

	var quantCount = parseInt(quant);
	for(var i = 0; i < quantCount; i++) {
		var pillow = new Product(selectedColor, material, size);
		productArr.push(pillow);
	}
	
	console.log(productArr)
	
	
    updateCartNumber(productArr.length)

    
    const json = JSON.stringify(productArr);
    localStorage.setItem("items", json);
};

function updateCartNumber(num) {
	var cartCount = document.getElementById("cartCount");
	cartCount.innerHTML = num;
};

