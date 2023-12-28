import "../sass/components/_home.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="home">
        <section>
          <div className="header-promo"></div>
        </section>
        <div className="title">
          <h1>Hamburguesas</h1>
        </div>
        <section className="wrap-container-card">
          <article className="card">
            <div className="image">
              <img src="images/burguer.jpg" alt="hamburguesa" />
            </div>
            <div className="title-product">
              <p>Megantosaurio</p>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default Home;
