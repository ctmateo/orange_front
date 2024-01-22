import React, { useState } from "react";

interface QuantitySelectorProps {
  initialQuantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialQuantity,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1;
        onQuantityChange(newQuantity);
        return newQuantity;
      });
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className="quantity">
      <button onClick={decreaseQuantity}>-</button>
      <p>x{quantity}</p>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
};
