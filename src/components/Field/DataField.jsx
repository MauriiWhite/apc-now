import { useCallback } from "react";
import { useDataField, useClicked } from "../../store/useDataField";

import { motion } from "framer-motion";

const InputField = ({ value }) => {
  return <input type="text" readOnly disabled value={value} />;
};

export default function DataField({ fields }) {
  const { clicked, setClicked } = useClicked();
  const { setData } = useDataField();

  const handleSaveClick = useCallback(() => {
    setData(fields);
    setClicked();
  }, [fields, setData, setClicked]);

  const [clpValue, ufValue] = Object.values(fields).slice(-2);

  return (
    <>
      {ufValue === undefined ? (
        <InputField key="clp" value={clpValue} />
      ) : (
        <>
          <motion.div
            className="fields"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <InputField key="clp" value={`CLP: ${clpValue}`} />
            <InputField key="uf" value={`UF: ${ufValue}`} />
            <button type="button" onClick={handleSaveClick} disabled={clicked}>
              <i class="bi bi-plus-lg"></i>
            </button>
          </motion.div>
        </>
      )}
    </>
  );
}
