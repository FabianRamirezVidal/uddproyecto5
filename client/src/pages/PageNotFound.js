import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Pagina no encontrada"}>
      <div className="pnf">
      <h1 className="pnf-title">404</h1>
      <h2 className="pnf-heading">Oops ! Pagina no encontrada</h2>
      <Link to="/" className="pnf-btn">
          Volver atrás
      </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
