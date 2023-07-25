import "../styles/Landing.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/happy2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/work.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/happy.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <div className="principal d-flex justify-content-evenly flex-lg-row flex-column-reverse row">
        <motion.div
          className="text col-md-5 col-sm-8 col-8 d-flex flex-column align-md-items-end align-items-center px-5 py-3 text-center rounded-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.125 }}
        >
          <span id="type">Asesorías Para Chilenos</span>
          <h5>Tus datos, tus cambios</h5>
          <p>
            Somos la principal Empresa de Asesorías <br /> especializada en los
            procesos de las AFPs. <br />
          </p>
          <p className="info">
            ¿Tienes dudas? <span>Adelante</span>{" "}
          </p>
          <Link to="/services">Comenzar</Link>
        </motion.div>
        <div className="content" />
        <motion.div
          className="title col-md-5 col-sm-8 col-11"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.125 }}
        >
          <h1>
            apc<span>Now</span>
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;
