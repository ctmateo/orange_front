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

  return (
    <>
      <Link to="/">volver</Link>
      <section className="container-menu">
        <h1>Menu</h1>
        {/* //Pizza */}
        <article className="wrapper-pizza">
          <h2>Pizza clasica</h2>
          {data.map((item) =>
            item.type === "pizzaC" ? (
              <section key={item.id} className="wrapper-item-pizza">
                <p className="title-pizza">{item.title}</p>
                <p className="description">{item.description}</p>
              </section>
            ) : null
          )}
          <h2>Pizza especial</h2>
          {data.map((item) =>
            item.type === "pizzaE" ? (
              <section key={item.id} className="wrapper-item-pizza">
                <p className="title-type-menu">{item.title}</p>
                <p className="description">{item.description}</p>
              </section>
            ) : null
          )}
        </article>
        {/* //Lasagna*/}
        <article className="wrapper-lasagna">
          <h2>Lasagna</h2>
          {data.map((item) =>
            item.type === "lasagna" ? (
              <div key={item.id} className="wrapper-item-lasagna">
                <p>{item.title}</p>
                <p>{item.description}</p>
                <span>{item.price}</span>
              </div>
            ) : null
          )}
        </article>
        {/* //Hamburguesas*/}
        <article className="wrapper-burguer">
          <h2>Hamburguesas</h2>
          {data.map((item) =>
            item.type === "burguer" ? (
              <div key={item.id} className="wrapper-item-burguer">
                <p className="title-type-menu">{item.title}</p>
                <p className="description">{item.description}</p>
                <span className="price">{item.price}</span>
              </div>
            ) : null
          )}
        </article>
        <article className="wrapper-saupotato">
          <h2>Salchipapas tradicional</h2>
          {data.map((item) =>
            item.type === "saupotato" ? (
              <div key={item.id} className="wrapper-item-saupotato">
                <p className="title-type-menu">{item.title}</p>
                <p className="description">{item.description}</p>
                <span>{item.price}</span>
              </div>
            ) : null
          )}
        </article>
        <article className="wrapper-corn">
          <h2>Mazorcada</h2>
          {data.map((item) =>
            item.type === "corn" ? (
              <div key={item.id} className="wrapper-item-corn">
                <p className="title-menu-type">{item.title}</p>
                <p className="description">{item.description}</p>
                <span>{item.price}</span>
              </div>
            ) : null
          )}
        </article>
        <article className="wrapper-grilled">
          <h2>A la plancha</h2>
          {data.map((item) =>
            item.type === "grilled" ? (
              <div key={item.id} className="wrapper-item-grilled">
                <p className="title-menu-type">{item.title}</p>
                <p className="description">{item.description}</p>
                <span>{item.price}</span>
              </div>
            ) : null
          )}
        </article>
        <article className="wrapper-bbq">
          <h2>Barbacoa</h2>
          {data.map((item) =>
            item.type === "bbq" ? (
              <div key={item.id} className="wrapper-item-bbq">
                <p className="title-menu-type">{item.title}</p>
                <p className="description">{item.description}</p>
                <span>{item.price}</span>
              </div>
            ) : null
          )}
        </article>
        <article className="wrapper-hotdog">
          <h2>Hot Dog</h2>
          {data.map((item) =>
            item.type === "hotdog" ? (
              <div key={item.id} className="wrapper-item-hotdog">
                <p className="title-menu-type">{item.title}</p>
                <p className="description">{item.description}</p>
                <span>{item.price}</span>
              </div>
            ) : null
          )}
        </article>
      </section>
    </>
  );
};

export default Menu;
