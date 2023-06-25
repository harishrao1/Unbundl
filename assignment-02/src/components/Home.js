import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
const chocolates = [
  { id: 1, name: "Chocolate 1", price: 299, image: "./assets/choclate-1.jpg" },
  { id: 2, name: "Chocolate 2", price: 349, image: "./assets/choclate-1.jpg" },
  { id: 3, name: "Chocolate 3", price: 499, image: "./assets/choclate-1.jpg" },
  { id: 4, name: "Chocolate 4", price: 199, image: "./assets/choclate-1.jpg" },
  { id: 5, name: "Chocolate 5", price: 349, image: "./assets/choclate-1.jpg" },
  { id: 6, name: "Chocolate 6", price: 429, image: "./assets/choclate-1.jpg" },
];

const Home = () => {
  const navigate = useNavigate();
  const [selectedChocolates, setSelectedChocolates] = useState([]);

  const handleQuantityChange = (chocolateId, quantity) => {
    const selectedChocolate = chocolates.find(
      (chocolate) => chocolate.id === chocolateId
    );
    if (!selectedChocolate) {
      return;
    }
    const updatedChocolates = [...selectedChocolates];
    const existingIndex = updatedChocolates.findIndex(
      (chocolate) => chocolate.id === chocolateId
    );

    if (existingIndex !== -1) {
      const newQuantity = Math.max(quantity, 0);
      if (newQuantity === 0) {
        updatedChocolates.splice(existingIndex, 1);
      } else {
        updatedChocolates[existingIndex] = { ...selectedChocolate, quantity };
      }
    } else {
      const newQuantity = Math.max(quantity, 0);
      updatedChocolates.push({ ...selectedChocolate, quantity: newQuantity });
    }

    const totalQuantity = updatedChocolates.reduce(
      (total, chocolate) => total + (chocolate.quantity || 0),
      0
    );

    if (totalQuantity > 8) {
      return;
    }

    setSelectedChocolates(updatedChocolates);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    selectedChocolates.forEach((chocolate) => {
      const selectedChocolate = chocolates.find((ch) => ch.id === chocolate.id);
      totalPrice += selectedChocolate.price * chocolate.quantity;
    });

    return totalPrice.toFixed(2);
  };

  let isMaxItemsReached = 0;
  for (let i = 0; i < selectedChocolates.length; i++) {
    isMaxItemsReached = isMaxItemsReached + selectedChocolates[i].quantity;
  }
  console.log(isMaxItemsReached >= 8);
  const addtocart = () => {
    if (isMaxItemsReached === 8) {
      navigate("/cart");
      //   <Link to="/cart" />;
    } else {
      alert("select 8 products ");
    }
  };

  return (
    <div>
      <h1 className="App">Create Your Pack</h1>
      <div className="container">
        {chocolates.map((chocolate) => {
          const selectedChocolate = selectedChocolates.find(
            (ch) => ch.id === chocolate.id
          );
          const selectedQuantity = selectedChocolate
            ? selectedChocolate.quantity
            : 0;

          return (
            <ProductCard
              key={chocolate.id}
              chocolate={chocolate}
              selectedQuantity={selectedQuantity}
              onQuantityChange={(quantity) =>
                handleQuantityChange(chocolate.id, quantity)
              }
            />
          );
        })}
      </div>
      <div className="checkout-content">
        <h3>Total Price: ₹{calculateTotalPrice()}</h3>
        <button className="addtocart-btn" onClick={addtocart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Home;
