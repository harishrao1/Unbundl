import React from "react";
import chocolate1 from "../assets/choclate-1.jpg";

const ProductCard = ({ chocolate, selectedQuantity, onQuantityChange }) => {
  return (
    <div className="product-card">
      <img
        src={chocolate1}
        alt={chocolate.name}
        style={{ width: "200px", height: "200px" }}
      />
      <h3 style={{ textAlign: "center" }}>{chocolate.name}</h3>
      <div className="product-content">
        <p className="price"> ₹{chocolate.price.toFixed(2)}</p>
        <div className="buttons">
          <button
            onClick={() => onQuantityChange(selectedQuantity + 1)}
            disabled={selectedQuantity === 8}
          >
            +
          </button>
          <p>{selectedQuantity}</p>
          <button onClick={() => onQuantityChange(selectedQuantity - 1)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
