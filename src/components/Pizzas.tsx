import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface PizzaDataType {
  id: number;
  price: number;
  img: string;
  title: string;
  description: string;
}
const Pizzas = () => {
  const [data, setData] = useState<PizzaDataType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const endpointData = await axios.get(
          "https://orangelocalback-production.up.railway.app/"
        );
        setData(endpointData.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        data.map((dato) => <p key={dato.id}>tenemos precio, {dato.price}, titulo, {dato.title}, description, {dato.description}</p>)
      ) : (
        <p>Error al obtener datos</p>
      )}
      pizzas
      <Link to="/">volver</Link>
    </>
  );
};

export default Pizzas;
