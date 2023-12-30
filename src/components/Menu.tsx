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
        <article className="wrapper-horn">
          <div className="wrapper-classic-pizza">
            <h2 className='interline'>Pizza clasica</h2>
            {data.map((item) =>
              item.type === "pizzaC" ? (
                <section key={item.id} className="interline wrapper-item-pizza">
                  <p className="title-type-menu">{item.title}</p>
                  <p className="description">{item.description}</p>
                </section>
              ) : null
            )}
          </div>
          <div className="wrapper-special-pizza">
            <h2 className='interline'>Pizza especial</h2>
            {data.map((item) =>
              item.type === "pizzaE" ? (
                <section key={item.id} className="interline wrapper-item-pizza">
                  <p className="title-type-menu">{item.title}</p>
                  <p className="description">{item.description}</p>
                </section>
              ) : null
            )}
          </div>
          <article className="wrapper-lasagna">
          <h2 className='interline'>Lasagna</h2>
          {data.map((item) =>
            item.type === "lasagna" ? (
              <div key={item.id} className="interline wrapper-item-lasagna">
                <p className="title-type-menu">{item.title}</p>
                <p className="description">{item.description}</p>
                <span>${item.price}</span>
              </div>
            ) : null
          )}
        </article>
        </article>
        {/* //Lasagna*/}

        {/* //Hamburguesas*/}
        <article className="wrapper-burguer">
          <h2 className='interline'>Hamburguesas</h2>
          {data.map((item) =>
            item.type === "burguer" ? (
              <div key={item.id} className="interline wrapper-item-burguer">
                <p className="title-type-menu">{item.title}</p>
                <p className="description">{item.description}</p>
                <span className="price">${item.price}</span>
              </div>
            ) : null
          )}
        </article>
        <article className="wrapper-saupotato">
          <h2 className='interline'>Salchipapas tradicional</h2>
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
          <h2 className='interline'>Mazorcada</h2>
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
        <article className="wrapper-grilled">
          <h2 className='interline'>A la plancha</h2>
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
          <h2 className='interline'>Barbacoa</h2>
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
        <article className="wrapper-hotdog">
          <h2 className='interline'>Hot Dog</h2>
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
      </section>
    </>
  );
};

export default Menu;
