import React, { useState } from "react";
import { AddItemShoppingCar } from "./ShoppingCartUtils";

interface Items {
  id: number;
  type: string;
  img: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

interface RenderItemsFromDbProps {
  data: Items[];
  type: string;
  quantityColumns: number;
}

const renderItemsFromDb: React.FC<RenderItemsFromDbProps> = ({
  data,
  type,
  quantityColumns,
}) => {
  const [openDialog, setOpenDialog] = useState(true);
  const [animationClick, setAnimationClick] = useState<{ [key: number]: boolean }>({});

  let elements = data
    .filter((item) => item.type === type)
    .slice(0, quantityColumns === 2 ? 6 : 7)
    if (type === 'burguer') {
      elements = elements.reverse();
    }

  const elementsForColumn = Math.ceil(elements.length / quantityColumns);

  const handleButtonClick = (itemId: number) => {
    Promise.all([
      AddItemShoppingCar(elements.find(item => item.id === itemId)!, setOpenDialog, openDialog),
      setAnimationClick((prev) => ({ ...prev, [itemId]: true })),
    ]);
    setTimeout(() => {
      setAnimationClick((prev) => ({ ...prev, [itemId]: false }));
    }, 800);
  };
  

  return (
    <div className="wrapper-columns">
      {Array.from({ length: quantityColumns }).map((_, columnIndex) => (
        <div key={columnIndex} className={`column-${columnIndex}`}>
          {elements
            .slice(
              columnIndex * elementsForColumn,
              (columnIndex + 1) * elementsForColumn
            )
            .map((item) => (
              <article key={item.id} className="interline">
                <p className="title-type-menu">{item.title}</p>
                <p className="description">{item.description}</p>
                {item.type === "pizzaC" || item.type === "pizzaE" ? null : (
                  <div className="items-buy">
                    <div className="container-price">
                      <span>${item.price}</span>
                    </div>
                    <div className="buttons">
                      <button
                        onClick={() => handleButtonClick(item.id)}
                        className={`buy-btn ${animationClick[item.id] ? "active" : ""}`}
                      >
                        <div className="old-text">Añadir al carrito</div>
                        <div className="new-text">Añadido</div>
                      </button>
                    </div>
                  </div>
                )}
              </article>
            ))}
        </div>
      ))}
    </div>
  );
};

export default renderItemsFromDb;
