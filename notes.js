const json = JSON.stringify(productArr);
localStorage.setItem("items", json);

//page unload or page navigation event in vanilla javascript
//vanilla javascript alert button events
function goToCheckoutPage() {
	//Set the product order in local storage
	localStorage.setItem('order', JSON.stringify(productArr));
	
	var loadedProductArr = localStorage.getItem('order');
	var productArr2 = JSON.parse(loadedProductArr);
	
	//At this point, productArr2 is the same as productArr
	
	//load that new HTML page
	//do stuff with productArr
};

function onLoad() {
    const items = localStorage.getItem("items");
    if(items === null) {
      console.log('no items');
      return;
    }
    else {
      const cartItems = JSON.parse(items);
      cartItems.forEach((item) => {
        CardTemplate(divItemContainer, item.header, item.body, dog.imgUrl);
        dogArray.push(dog);
      });
    }
  }

  function createNewRandomDoggoCard(containerEl) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let breed = getBreedName(data.message);
        CardTemplate(containerEl, breed, "🐶 🐕 ❤️", data.message);
      });
  }
  
  let aCreateRandom = document.getElementById("a-create-random");
  const divDoggoContainer = document.getElementById("div-doggos");
  aCreateRandom.onclick = function (e) {
    e.preventDefault();
    createNewRandomDoggoCard(divDoggoContainer);
  };
  
    // new function to remove dogs from localStorage
  let clearButton = document.getElementById('clear-session-btn');
  clearButton.onclick = function (e) {
    localStorage.removeItem('myDogs');
  }