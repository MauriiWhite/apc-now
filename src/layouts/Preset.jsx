import "../styles/Preset.css";

import { motion } from "framer-motion";

function Preset() {
  return (
    <motion.div
      className="container-fluid preset g-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="content-preset">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Nuestros servicios
        </motion.h1>
        <motion.h6
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ya están disponibles para <br />
          cada Chileno
        </motion.h6>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          A continuación encontrarás las distintas herramientas que ofrecemos,
          <br />
          tanto para realizar un registro de cuota mensual,
          <br />
          como realizar una compararación entre cada AFP.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Preset;
