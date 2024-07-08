import { Link } from "react-router-dom";

const SignIn = () => {
 return(
  <>
    <Link to="/">Volver atras</Link>
    <p>inicio de sesion</p>
    <span>Correo electrónico o telefono</span>
    <input type="text"/>
    <span>Contraseña</span>
    <input type="text"/>
    <button>
      Ingresar
    </button>
  </>
 )
}

export default SignIn;