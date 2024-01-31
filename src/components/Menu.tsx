import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/components/_menu.scss";
import axios from "axios";
import renderItemsFromDb from "./global-components/RenderItemsFromDb";
import {
  ShoppingCartWindow,
  openShoppingCard,
} from "./global-components/ShoppingCartUtils";

import CountItemFromCartShopping from "./global-components/ShoppingCartUtils";

import Footer from "./Footer";

interface Items {
  id: number;
  type: string;
  img: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

const Menu = () => {
  const [data, setData] = useState<Items[]>([]);

  const [openDialog, setOpenDialog] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const getItem = async () => {
      try {
        const endpoint = await axios.get(
          "https://orangelocalback-production.up.railway.app/"
        );
        setData(endpoint.data);
      } catch (error) {
        console.error("Error server internal", error);
      }
    };
    getItem();
  }, []);

  const openLayaout = () => {
    openShoppingCard(), setOpenDialog(false);
  };
  const handleSizeMobile = () => {
    let WIDTH_OF_WINDOW = 500;
    setIsMobile(() => {
      const newIsMobile = window.innerWidth < WIDTH_OF_WINDOW;
      console.log("Mobile is now", isMobile);
      return newIsMobile;
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleSizeMobile);

  }, []);
  return (
    <>
      <section className="container-menu">
      <div className={`layaout ${openDialog ? 'active' : 'desactive'}`}>
          </div>
        <div className="navegation">
            {ShoppingCartWindow()}

          <div
            onClick={() => {
              openLayaout();
            }}
            className="shopping-cart"
          >
            <div className="items-in-list">{CountItemFromCartShopping()}</div>
            <img src="icons/car.svg" alt="car" />
          </div>
        </div>
        <div className="title-menu">
          <div className="square">
            <Link className="back-page" to="/">
              <img
                id="back-1"
                src="icons/icon_back.svg"
                alt="back_mundodelicioso"
              />
              <img
                id="back-2"
                src="icons/icon_back_primary.svg"
                alt="back_primary_mundodelicioso"
              />
              <span>Volver atras</span>
            </Link>
          </div>
          <h1>
            Menu <br />
            <span>Mundo Delicioso</span>
          </h1>
        </div>
        {/* //Pizza */}
        <article className="wrapper-horn">
          <div className="wrapper-types-pizza">
            <div className="wrapper-tp-pizza"></div>
          </div>
          <div className="wrapper-pizza">
            <div className="wrapper-classic-pizza">
              <div className="subtitle">
                <h2>cLASIcA</h2>
                <span>Pizza</span>
              </div>
              <div className="grid">
                {data.map((item) =>
                  item.type === "pizzaC" ? (
                    <div key={item.id} className="interline">
                      <p className="title-type-menu">{item.title}</p>
                      <p className="description">{item.description}</p>
                    </div>
                  ) : null
                )}
              </div>
            </div>
            <div className="double-grid">
              <div className="wrapper-special-pizza">
                <div className="wrapper-item-special-pizza">
                  <div className="subtitle">
                    <h2>Toque original</h2>
                    <span>Más sabores pizza</span>
                  </div>
                  {renderItemsFromDb({
                    data,
                    type: "pizzaE",
                    quantityColumns: 1,
                  })}
                </div>
              </div>
              <div className="card-combo">
                <div className="combo-1"></div>
                <div className="combo-2"></div>
              </div>
            </div>
          </div>
        </article>
        {/* //Lasagna */}
        <div className="wrapper-lasagna">
          <div className="subtitle">
            <h2>Lasagna</h2>
            <span>Extra queso</span>
          </div>
          {renderItemsFromDb({
            data,
            type: "lasagna",
            quantityColumns: 1,
          })}
        </div>

        {/* //Hamburguesas*/}
        <div className="wrapper-kitchen">
          <div className="space"></div>

          <article className="wrapper-burguer">
            <div className="double-grid">
              <div className="wrapper-item-burguer">
                <div className="subtitle">
                  <h2>Hamburguesas</h2>
                  <span>Artesanales</span>
                </div>
                {renderItemsFromDb({
                  data,
                  type: "burguer",
                  quantityColumns: 1,
                })}
              </div>
              <div className="card-combo"></div>
            </div>
          </article>

          <article className="wrapper-hotdog">
            <div className="double-grid">
              <div className="wrapper-item-hotdog">
                <div className="subtitle">
                  <h2>Hot dog</h2>
                  <span>Con queso</span>
                </div>
                {renderItemsFromDb({
                  data,
                  type: "hotdog",
                  quantityColumns: 1,
                })}
              </div>
              <div className="card-combo"></div>
            </div>
          </article>
        </div>

        <div className="wrapper-green">
          <div className="border">
            <div className="double-grid">
              <article className="wrapper-saupotato">
                <div className="subtitle">
                  <h2>Salchipapa</h2>
                  <span>Extra papas</span>
                </div>
                {renderItemsFromDb({
                  data,
                  type: "saupotato",
                  quantityColumns: 1,
                })}
              </article>
              <article className="wrapper-corn">
                <div className="subtitle">
                  <h2>Mazorcada</h2>
                  <span>Extra maíz</span>
                </div>
                {renderItemsFromDb({
                  data,
                  type: "corn",
                  quantityColumns: 1,
                })}
              </article>
            </div>
          </div>

          <div className="double-grid">
            <div className="border-less-padding">
              <article className="wrapper-grilled">
                <div className="subtitle">
                  <h2>A la plancha</h2>
                  <span>Con ensalada</span>
                </div>
                <div className="wrapper-item-grilled">
                  {renderItemsFromDb({
                    data,
                    type: "grilled",
                    quantityColumns: 1,
                  })}
                </div>
              </article>
            </div>
            <div className="border-less-padding">
              <article className="wrapper-bbq">
                <div className="subtitle">
                  <h2>Especial BBQ</h2>
                  <span>Con ensalada</span>
                </div>
                <div className="wrapper-item-bbq">
                  {renderItemsFromDb({
                    data,
                    type: "bbq",
                    quantityColumns: 1,
                  })}
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="drinks">
          <div className="wrapper-milkshake">
            <div className="subtitle">
              <h2>Malteadas</h2>
            </div>
            {renderItemsFromDb({
              data,
              type: "milkshake",
              quantityColumns: 1,
            })}
          </div>

          <div className="wrapper-latte">
            <div className="subtitle">
              <h2>Latte</h2>
            </div>
            <div className="wrapper-item-latte">
              {renderItemsFromDb({
                data,
                type: "latte",
                quantityColumns: 1,
              })}
            </div>
          </div>

          <div className="wrapper-lemonade">
            <div className="subtitle">
              <h2>Limonadas</h2>
            </div>
            <div className="wrapper-item-lemonade">
              {renderItemsFromDb({
                data,
                type: "lemonade",
                quantityColumns: 1,
              })}
            </div>
          </div>

          <div className="wrapper-juice">
            <div className="subtitle">
              <h2>Jugos Naturales</h2>
            </div>
            <div className="wrapper-item-juice">
              {renderItemsFromDb({
                data,
                type: "juice",
                quantityColumns: 1,
              })}
            </div>
          </div>

          <div className="wrapper-drinks">
            <div className="subtitle">
              <h2>Bebidas</h2>
            </div>
            <div className="wrapper-item-drinks">
              {renderItemsFromDb({
                data,
                type: "drinks",
                quantityColumns: 1,
              })}
            </div>
          </div>

          <div className="wrapper-beef">
            <div className="subtitle">
              <h2>Cerveza</h2>
            </div>
            <div className="wrapper-item-beef">
              {renderItemsFromDb({
                data,
                type: "beef",
                quantityColumns: 1,
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Menu;
