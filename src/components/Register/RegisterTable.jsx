import { useDataField } from "../../store/useDataField";

import { motion } from "framer-motion";

export default function RegisterTable({ data }) {
  const { removeData, updateData, toggleRead } = useDataField();

  const handleStateClick = (id, read) => {
    toggleRead(id);
    if (read) {
      const newData = data.map((item) =>
        item.id === id ? { ...item, read: !item.read } : item
      );
      updateData(id, { name: newData.find((item) => item.id === id).name });
    }
  };

  const handleNameChange = (id, e) => updateData(id, { name: e.target.value });
  const handleDelete = (id) => removeData(id);

  return (
    <>
      {data.length > 0 && (
        <motion.table
          className="table"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <thead>
            <tr>
              <th>id</th>
              <th>nombre</th>
              <th>afp</th>
              <th>fondo</th>
              <th>valor clp</th>
              <th>valor uf</th>
              <th>fecha</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((afp) => (
              <tr key={afp.id}>
                <td>{afp.id}</td>
                <td>
                  {afp.read ? (
                    afp.name
                  ) : (
                    <input
                      type="text"
                      value={afp.name}
                      onChange={(e) => handleNameChange(afp.id, e)}
                    />
                  )}
                </td>

                <td>{afp.afp}</td>
                <td>{afp.fondo}</td>
                <td>{afp.valor}</td>
                <td>{afp.valorUf}</td>
                <td>{afp.fecha}</td>

                <td className="d-flex gap-1">
                  <button
                    type="button"
                    onClick={() => handleStateClick(afp.id, afp.read)}
                  >
                    {afp.read ? (
                      <i class="bi bi-pencil-square"></i>
                    ) : (
                      <i class="bi bi-check-lg"></i>
                    )}
                  </button>
                  <button type="button" onClick={() => handleDelete(afp.id)}>
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </motion.table>
      )}
    </>
  );
}
