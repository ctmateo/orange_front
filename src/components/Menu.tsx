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

  const renderizarElementosPizza = (tipo: string, cantidadColumnas: number) => {
    const elementosPizza = data
      .filter((item) => item.type === tipo)
      .slice(0, cantidadColumnas === 2 ? 6 : 7);

    const elementosPorColumna = Math.ceil(
      elementosPizza.length / cantidadColumnas
    );

    return (
      <div className="wrapper-columns">
        {Array.from({ length: cantidadColumnas }).map((_, columnIndex) => (
          <div key={columnIndex} className={`column-${columnIndex + 1}`}>
            {elementosPizza
              .slice(
                columnIndex * elementosPorColumna,
                (columnIndex + 1) * elementosPorColumna
              )
              .map((item) => (
                <section key={item.id} className="interline">
                  <p className="title-type-menu">{item.title}</p>
                  <p className="description">{item.description}</p>
                  {item.type === "lasagna" ? <span>${item.price}</span> : null}
                </section>
              ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <section className="container-menu">
        <Link to="/">volver</Link>
        <h1 className="title-menu">Menu</h1>
        <div className="wrapper-types-pizza">
          <div className="wrapper-tp-pizza">
            
          </div>
        </div>
        <article className="wrapper-horn">
          {/* //Pizza */}
          <div className="wrapper-pizza">
            <div className="wrapper-classic-pizza">
              <h2>Pizza clasica</h2>
              {renderizarElementosPizza("pizzaC", 3)}
            </div>
            <div className="double-grid">
              <div className="wrapper-special-pizza">
                <div className="wrapper-item-special-pizza">
                  <h2>Pizza especial</h2>
                  {renderizarElementosPizza("pizzaE", 1)}
                </div>
              </div>
              <div className="column-grid">
                <div className="card-publi-combo"></div>
                <div className="card-publi"></div>
              </div>
            </div>
          </div>
        </article>
        <div className="wrapper-lasagna">
          <h2>Lasagna</h2>
          {renderizarElementosPizza("lasagna", 3)}
        </div>

        {/* //Hamburguesas*/}
        <div className="double-grid">
          <article className="wrapper-burguer">
            <h2 className="interline">Hamburguesas</h2>
            {data.map((item) =>
              item.type === "burguer" ? (
                <div key={item.id} className="interline wrapper-item-burguer">
                  <p className="title-type-menu">{item.title}</p>
                  <p className="description">{item.description}</p>
                  <div className="options-buy">
                    <span>${item.price}</span>
                  </div>
                </div>
              ) : null
            )}
          </article>
          <div className="column-grid">
            <div className="card-combo-hotdog"></div>
            <article className="wrapper-hotdog">
              <h2 className="interline">Hot Dog</h2>
              {data.map((item) =>
                item.type === "hotdog" ? (
                  <div key={item.id} className="interline wrapper-item-hotdog">
                    <p className="title-type-menu">{item.title}</p>
                    <p className="description">{item.description}</p>
                    <span>${item.price}</span>
                  </div>
                ) : null
              )}
            </article>
          </div>
        </div>
        <div className="wrapper-lasagna">
        <div className="double-grid">
          <article className="wrapper-saupotato">
            <h2 className="interline">Salchipapas tradicional</h2>
            {data.map((item) =>
              item.type === "saupotato" ? (
                <div key={item.id} className="interline wrapper-item-saupotato">
                  <p className="title-type-menu">{item.title}</p>
                  <p className="description">{item.description}</p>
                  <span>${item.price}</span>
                </div>
              ) : null
            )}
          </article>
          <article className="wrapper-corn">
            <h2 className="interline">Mazorcada</h2>
            {data.map((item) =>
              item.type === "corn" ? (
                <div key={item.id} className="interline wrapper-item-corn">
                  <p className="title-type-menu">{item.title}</p>
                  <p className="description">{item.description}</p>
                  <span>${item.price}</span>
                </div>
              ) : null
            )}
          </article>
        </div>
        </div>
        <div className="double-grid">
          <article className="wrapper-grilled">
            <h2 className="interline">A la plancha</h2>
            {data.map((item) =>
              item.type === "grilled" ? (
                <div key={item.id} className="interline wrapper-item-grilled">
                  <p className="title-type-menu">{item.title}</p>
                  <p className="description">{item.description}</p>
                  <span>${item.price}</span>
                </div>
              ) : null
            )}
          </article>
          <article className="wrapper-bbq">
            <h2 className="interline">Barbacoa</h2>
            {data.map((item) =>
              item.type === "bbq" ? (
                <div key={item.id} className="interline wrapper-item-bbq">
                  <p className="title-type-menu">{item.title}</p>
                  <p className="description">{item.description}</p>
                  <span>${item.price}</span>
                </div>
              ) : null
            )}
          </article>
        </div>
      </section>
    </>
  );
};

export default Menu;
