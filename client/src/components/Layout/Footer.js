import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">Todos los derechos reservados &copy; Cuack</h4>
      <p className="text-center mt-3">
<Link to="/about">Acerca de</Link>|
<Link to="/contact">Contacto</Link>|
<Link to="/policy">Politicas de privacidad</Link>
      </p>
    </div>
  );
};

export default Footer;
