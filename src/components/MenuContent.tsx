import { Link } from "react-router-dom";
import '../sass/components/_drop-down.scss'


const MenuExpand: React.FC<{ title: string }> = () => (
  <div className="drop-menu">
    <div className="options">
      <Link to=''>Pizzas</Link>
      <Link to=''>Lasagna</Link>
      <Link to=''>Hamburguesas</Link>
      <Link to=''>Salchipapas</Link>
      <Link to=''>Otras preparaciones</Link>
    </div>
    <div className="video">

    </div>
  </div>
);

const EventContent: React.FC<{ title: string }> = () => (
  <div className="drop-event">
    <p>Pestaña para eventos</p>
  </div>
);

const ServiceContent: React.FC<{ title: string }> = () => (
  <div className="drop-service">
    <p>Pestaña para servicios</p>
  </div>
);

const ComboContent: React.FC<{ title: string }> = () => (
  <div className="drop-combo">
    <p>Pestaña para combos</p>
  </div>
);

export { MenuExpand, EventContent, ServiceContent, ComboContent };