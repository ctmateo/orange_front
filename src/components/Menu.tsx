import { Link } from "react-router-dom";
import '../sass/components/_menu.scss'
const Menu = () => {
  return(<>
  <Link to="/">volver</Link>
  <section className="container-menu">
    <h1>Menu</h1>
  </section>

  </>)
}

export default Menu;