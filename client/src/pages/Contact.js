import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contacto"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACTO</h1>
          <p className="text-justify mt-2">
            Si tienes alguna duda o requieres mas información, contactanos
            estamos disponibles 24x7
          </p>
          <p className="mt-3">
            <BiMailSend /> : ayuda@udd.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 800-200-171 (Gratuito)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
