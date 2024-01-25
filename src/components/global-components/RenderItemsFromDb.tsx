import React, { useState } from "react";
import { AddItemShoppingCar } from "./ShoppingCartUtils";

// ... Otras importaciones

// Añade las propiedades del componente
interface Items {
  id: number;
  type: string;
  img: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

// Añade las propiedades del componente
interface RenderItemsFromDbProps {
  data: Items[];
  type: string;
  quantityColumns: number;
}

// Cambia la firma de la función para que sea un componente funcional
const renderItemsFromDb: React.FC<RenderItemsFromDbProps> = ({
  data,
  type,
  quantityColumns,
}) => {
  const [openDialog, setOpenDialog] = useState(false);

  const elements = data
    .filter((item) => item.type === type)
    .slice(0, quantityColumns === 2 ? 6 : 7);

  const elementsForColumn = Math.ceil(elements.length / quantityColumns);

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
                        onClick={() => AddItemShoppingCar(item, setOpenDialog, openDialog)}
                        className="buy-btn"
                      >
                        Añadir al carrito
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