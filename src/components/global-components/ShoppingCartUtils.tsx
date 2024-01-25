import React, { useState } from "react";
import { QuantitySelector } from "./QuantitySelector";
import translateTypeId from "./TranslateTypeId";
import '../../sass/components/global-components/_shopping-cart.scss'

interface Items {
  id: number;
  type: string;
  img: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

let shoppingCartState: React.Dispatch<React.SetStateAction<Items[]>> | null =
  null;

let itemsInCartShopping: React.Dispatch<React.SetStateAction<Items[]>> | null = null;

let setBtnShopping: React.Dispatch<React.SetStateAction<boolean>>;

export const StateCountItemsCart = React.createContext<Items[]>([]);

export const setShoppingCartState = (
  setState: React.Dispatch<React.SetStateAction<Items[]>>
) => {
  shoppingCartState = setState;
};

export const setBtnShoppingState = (
  setState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setBtnShopping = setState;
};

export const setCountState = (
  setState: React.Dispatch<React.SetStateAction<Items[]>>
) => {
  itemsInCartShopping = setState;
};

export const ShoppingCartWindow = () => {
  const [shoppingCart, setShoppingCart] = useState<Items[]>([]);
  const [statusBtnShopping, setBtn] = useState(true);

  setShoppingCartState(setShoppingCart);
  setBtnShoppingState(setBtn);
  setCountState(setShoppingCart);

  const handleQuantityChange = (newQuantity: number, itemId: number) => {
    setShoppingCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalAmount = shoppingCart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );
  const formattedTotal = totalAmount.toFixed(3);
  return (
    <div className={`window-shop ${statusBtnShopping ? "active" : ""}`}>
      <h2>Carrito de compras</h2>
      <div className="items-ofshop">
        {shoppingCart.map((item) => (
          <div key={item.id} className="inshop">
            <div className="info-item">
              <p>{item.title}</p>
              <p>
                x{item.quantity} {translateTypeId(item.type)}
              </p>
              <span id="cod">Cod null {item.quantity}</span>
              <div className="btn-delete-item">
                <button
                  onClick={() => DeleteItemShoppingCar(item, setShoppingCart)}
                >
                  Eliminar producto(s)
                </button>
              </div>
              <span id="sub">unidad ${item.price}</span>
            </div>
            <QuantitySelector
              initialQuantity={item.quantity}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(newQuantity, item.id)
              }
            />
          </div>
        ))}
      </div>
      <div className="total-pay">
        <p>Costo total</p>
        <p>${formattedTotal}</p>
      </div>
      <div className="btns">
        <button id="btn1" onClick={() => sendListToWhatsapp(shoppingCart)}>
          <img src="icons/w_icon.svg" alt="wht_mundodelicioso" />
          Enviar pedido a WhatsApp
        </button>
        <button id="btn2">Proceder al pago ahora</button>
      </div>
    </div>
  );
};

const CountItemFromCartShopping = () => {
  const [shoppingCart, setShoppingCart] = useState<Items[]>([]);
  setCountState(setShoppingCart);
  return <div>{shoppingCart.length}</div>;
};

export const DeleteItemShoppingCar = (
  item: Items,
  setShoppingCart: React.Dispatch<React.SetStateAction<Items[]>>,
) => {
  if (itemsInCartShopping) {
    itemsInCartShopping((prev) => {
      const updatedCart2 = prev.filter((cartItem) => cartItem.id !== item.id);
      return updatedCart2;
    });
  }
  setShoppingCart((prevCart) => {
    const updatedCart = prevCart.filter((cartItem) => cartItem.id !== item.id);
    return updatedCart;
  });
};

export const AddItemShoppingCar = (
  item: Items,
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>,
  openDialog: boolean
) => {
  if (item.type === "burguer" || item.type === "hotdog") {
    setOpenDialog(!openDialog);
  }

  if (shoppingCartState && itemsInCartShopping) {
    itemsInCartShopping((prev) => {
      const listOfItemsInCart = [...prev, { ...item, quantity: 1 }];
      return listOfItemsInCart;
    });
    shoppingCartState((prevCart) => {
      const statusCartShopping = [...prevCart, { ...item, quantity: 1 }];
      return statusCartShopping;
    });
  }
};

const sendListToWhatsapp = (list: Items[]) => {
  const whatsappLink = "https://wa.me/3143845669";

  let message =
    'Estuve navegando por mundodelicioso.com.co y me gustaría hacer un pedido para entrega a domicilio. ¿Podrían preparme lo siguiente?":\n\n';

  for (let item of list) {
    const line = `x${item.quantity} ${translateTypeId(item.type)} ${
      item.title
    }\n`;
    message += line;
  }

  const encodedMessage = encodeURIComponent(message);
  const fullLink = `${whatsappLink}?text=${encodedMessage}`;

  window.open(fullLink, "_blank");
};

export const openShoppingCard = () => {
  setBtnShopping((statusBtnShopping) => {
    return !statusBtnShopping;
  });
};

export default CountItemFromCartShopping;
