import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/components/_menu.scss";
import axios from "axios";

interface Items {
  id: number;
  type: string;
  img: string;
  title: string;
  description: string;
  price: number;
}

const Menu = () => {
  const [data, setData] = useState<Items[]>([]);
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

  const renderElements = (tipo: string, cantidadColumnas: number) => {
    const elements = data
      .filter((item) => item.type === tipo)
      .slice(0, cantidadColumnas === 2 ? 6 : 7);

    const elementosPorColumna = Math.ceil(elements.length / cantidadColumnas);

    return (
      <div className="wrapper-columns">
        {Array.from({ length: cantidadColumnas }).map((_, columnIndex) => (
          <div key={columnIndex} className={`column-${columnIndex + 1}`}>
            {elements
              .slice(
                columnIndex * elementosPorColumna,
                (columnIndex + 1) * elementosPorColumna
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
                      <div className="btn-order">
                        <button></button>
                        <button></button>
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

  return (
    <>
      <section className="container-menu">
        <div className="title-menu">
          <Link to="/">volver</Link>
          <h1>Menu digital</h1>
        </div>
        {/* //Pizza */}
        <article className="wrapper-horn">
          <div className="wrapper-types-pizza">
            <div className="wrapper-tp-pizza"></div>
          </div>
          <div className="wrapper-pizza">
            <div className="wrapper-classic-pizza">
              <div className="subtitle">
                <h2>
                  <span>PIZZA</span>cLASIcA
                </h2>
              </div>
              {renderElements("pizzaC", 3)}
            </div>
            <div className="double-grid">
              <div className="wrapper-special-pizza">
                <div className="wrapper-item-special-pizza">
                  <div className="subtitle">
                    <h2>
                      <span>PIZZA</span>toque original
                    </h2>
                  </div>
                  {renderElements("pizzaE", 1)}
                </div>
              </div>
              <div className="column-grid">
                <div className="card-publi-combo"></div>
                <div className="card-publi"></div>
              </div>
            </div>
          </div>
        </article>
        {/* //Lasagna */}
        <div className="wrapper-lasagna">
          <div className="subtitle">
            <h2>
              <span>Rellenita</span>Lasagna
            </h2>
          </div>
          {renderElements("lasagna", 3)}
        </div>

        {/* //Hamburguesas*/}
        <div className="wrapper-kitchen">
          <div className="space"></div>
          <div className="double-grid">
            <article className="wrapper-burguer">
              <div className="subtitle">
                <h2>
                  <span>Artesanal</span>Hamburguesas
                </h2>
              </div>
              <div className="wrapper-item-burguer">
                {renderElements("burguer", 1)}
              </div>
            </article>
            <div className="card-combo"></div>
          </div>
          <div className="double-grid">
            <article className="wrapper-hotdog">
              <div className="subtitle">
                <h2>
                  <span>Esponjoso</span>Hot dog
                </h2>
              </div>
              <div className="wrapper-item-hotdog">
                {renderElements("hotdog", 1)}
              </div>
            </article>
            <div className="card-combo"></div>
          </div>
        </div>

        <div className="wrapper-green">
          <div className="border">
            <div className="double-grid">
              <article className="wrapper-saupotato">
                <div className="subtitle">
                  <h2>
                    <span>Tradicional</span>Salchipapa
                  </h2>
                </div>
                {renderElements("saupotato", 1)}
              </article>
              <article className="wrapper-corn">
                <div className="subtitle">
                  <h2>
                    <span>Tradicional</span>Mazorcada
                  </h2>
                </div>
                {renderElements("corn", 1)}
              </article>
            </div>
          </div>

          <div className="double-grid">
            <div className="border-less-padding">
              <article className="wrapper-grilled">
                <div className="subtitle">
                  <h2>
                    <span>Con ensalada</span>A la plancha
                  </h2>
                </div>
                <div className="wrapper-item-grilled">
                  {renderElements("grilled", 1)}
                </div>
              </article>
            </div>
            <div className="border-less-padding">
              <article className="wrapper-bbq">
                <div className="subtitle">
                  <h2>
                    <span>Salsa BBQ</span>Especial BBQ
                  </h2>
                </div>
                <div className="wrapper-item-bbq">
                  {renderElements("bbq", 1)}
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="drinks">
          <div className="wrapper-milkshake">
            <h2>Malteadas</h2>
            <div className="wrapper-item-bbq">
              {renderElements("milkshake", 1)}
            </div>
          </div>
          <div className="wrapper-latte">
            <h2>Latte</h2>
            <div className="wrapper-item-latte">
              {renderElements("latte", 1)}
            </div>
          </div>
          <div className="wrapper-lemonade">
            <h2>Limonadas</h2>
            <div className="wrapper-item-lemonade">
              {renderElements("lemonade", 1)}
            </div>
          </div>
          <div className="wrapper-juice">
            <h2>Jugos Naturales</h2>
            <div className="wrapper-item-juice">
              {renderElements("juice", 1)}
            </div>
          </div>
          <div className="wrapper-drinks">
            <h2>Bebidas</h2>
            <div className="wrapper-item-drinks">
              {renderElements("drinks", 1)}
            </div>
          </div>
          <div className="wrapper-beef">
            <h2>Cerveza</h2>
            <div className="wrapper-item-beef">{renderElements("beef", 1)}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
