import { useContext, useEffect, useState } from "react";
import { StateCountItemsCart } from "./ShoppingCartUtils";
import "../../sass/components/global-components/_indicative-number-items.scss";

export const CountingItemsFromShopping = () => {
  const listOfItemsShoppingCart = useContext(StateCountItemsCart);
  const [countItems, setCountItems] = useState(Number);

  useEffect(() => {
    setCountItems(listOfItemsShoppingCart.length);
  }, [listOfItemsShoppingCart]);

  return (
    <div>
      <p>{countItems}</p>
    </div>
  );
};

export default CountingItemsFromShopping;
