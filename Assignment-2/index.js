const chocolates = [
  {
    id: 1,
    name: "Chocolate 1",
    price: 299,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/545a.jpg?ts=1681277356",
  },
  {
    id: 2,
    name: "Chocolate 2",
    price: 349,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/400891a.jpg?ts=1676388813",
  },
  {
    id: 3,
    name: "Chocolate 3",
    price: 499,
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/19501a.jpg?ts=1687436951",
  },
  {
    id: 4,
    name: "Chocolate 4",
    price: 199,
    image:
      "https://www.jiomart.com/images/product/original/491011052/kitkat-chocolate-share-bag-123-2-g-pack-of-8-product-images-o491011052-p491011052-0-202303140158.jpg?im=Resize=(360,360)",
  },
];

let cartQuantity = 0;

// Calculate the total price based on the selected chocolates and their quantities
function calculateTotalPrice() {
  let totalPrice = 0;
  let totalQuantity = 0;
  const quantitySpans = document.querySelectorAll(".quantityButtons span");
  console.log(quantitySpans);

  chocolates.forEach((chocolate, index) => {
    const quantity = parseInt(quantitySpans[index].textContent);
    console.log(quantity);
    const chocolatePrice = chocolate.price * quantity;

    totalPrice += chocolatePrice;
    totalQuantity = totalQuantity + quantity;
  });
  document.getElementById("totalQuantity").textContent = totalQuantity;
  document.getElementById("totalPrice").textContent = "₹" + totalPrice;
}

// increase quantity of a chocalate
function increaseQuantity(chocolateId) {
  const quantityElement = document.getElementById(
    "chocolate" + chocolateId + "Quantity"
  );
  console.log(chocolateId + "Quantity");
  const totalQuantity = document.getElementById("totalQuantity");
  if (totalQuantity.textContent >= 8) {
    return;
  }
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;

  calculateTotalPrice();
}

// Decrease the quantity of a chocolate
function decreaseQuantity(chocolateId) {
  const quantityElement = document.getElementById(
    "chocolate" + chocolateId + "Quantity"
  );
  let quantity = parseInt(quantityElement.textContent);

  if (quantity > 0) {
    quantity--;
    quantityElement.textContent = quantity;
    calculateTotalPrice();
  }
}

// Creating  product cards for chocolates
function createProductCards() {
  const chocolateContainer = document.getElementById("chocolateContainer");

  chocolates.forEach((chocolate) => {
    const card = document.createElement("div");
    card.classList.add("productCard");

    const image = document.createElement("img");
    image.src = chocolate.image;
    image.alt = chocolate.name;
    card.appendChild(image);

    const label = document.createElement("label");
    label.htmlFor = "chocolate" + chocolate.id;
    label.textContent = chocolate.name;
    card.appendChild(label);

    const quantityButtons = document.createElement("div");
    quantityButtons.classList.add("quantityButtons");

    const price = document.createElement("p");
    price.textContent = "₹" + chocolate.price;
    price.classList = "chocolatePrice";
    quantityButtons.appendChild(price);

    const decreaseBtn = document.createElement("button");
    decreaseBtn.textContent = "-";
    decreaseBtn.addEventListener("click", () => decreaseQuantity(chocolate.id));
    quantityButtons.appendChild(decreaseBtn);

    const quantitySpan = document.createElement("span");
    quantitySpan.id = "chocolate" + chocolate.id + "Quantity";
    quantitySpan.textContent = "0";
    quantityButtons.appendChild(quantitySpan);

    const increaseBtn = document.createElement("button");
    increaseBtn.textContent = "+";
    increaseBtn.addEventListener("click", () => increaseQuantity(chocolate.id));
    quantityButtons.appendChild(increaseBtn);

    card.appendChild(quantityButtons);

    chocolateContainer.appendChild(card);
  });
}

function initialize() {
  createProductCards();
  calculateTotalPrice();
}

document.addEventListener("DOMContentLoaded", initialize);
