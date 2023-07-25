import "../styles/Services.css";

import Preset from "../layouts/Preset";
import CalcDues from "../components/Calc/CalcDues";
import Compare from "../components/Compare/Compare";
import Register from "../components/Register/Register";
import CalcContainer from "../components/Calc/CalcContainer";
import RegisterContainer from "../components/Register/RegisterContainer";

import { useScroll, motion, useSpring } from "framer-motion";

function Services() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="pro-bar" style={{ scaleX }} />
      <motion.div className="container-fluid g-0">
        <Preset />
        <div className="content service p-5">
          <div className="text-content">
            <h2>
              Comparativas<i class="bi bi-arrow-down"></i>
            </h2>
            <p>
              Elige tu fondo e indica la fecha (desde 2002). Luego, te
              mostraremos todas las AFPs <br />
              disponibles junto con el valor de su cuota mensual correspondiente
              al <br />
              fondo que hayas seleccionado. <br />
            </p>
          </div>

          <Compare />

          <div className="text-content">
            <h2>
              Registros<i class="bi bi-arrow-down"></i>
            </h2>
            <p>
              Para comenzar, elige tu AFP, el fondo que prefieres y la fecha{" "}
              <br />
              deseada. Verás el valor de la cuota mensual en moneda local (CLP)
              y en <br />
              unidades de fomento (UF). Además, podrás guardar el registro,
              cambiar <br />
              su nombre y, si lo deseas, eliminar tu registro.
            </p>
          </div>

          <Register />
          <RegisterContainer />

          <div className="text-content">
            <h2>
              Cuotas<i class="bi bi-arrow-down"></i>
            </h2>

            <p>
              A continuación, podrás seleccionar cualquier registro que hayas
              hecho <br />
              previamente y calcular el sueldo correspondiente expresado en
              cuotas.
            </p>
          </div>

          <CalcDues />
          <CalcContainer />
        </div>
      </motion.div>
    </>
  );
}

export default Services;
