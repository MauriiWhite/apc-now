import { useCalcField } from "../../store/useDataField";

import { motion } from "framer-motion";

export default function CalcTable({ data }) {
  const { removeCalc, updateCalc, toggleRead } = useCalcField();

  const handleStateClick = (id, read) => {
    toggleRead(id);
    if (read) {
      const newData = data.map((item) =>
        item.id === id ? { ...item, read: !item.read } : item
      );
      updateCalc(id, { name: newData.find((item) => item.id === id).name });
    }
  };

  const handleNameChange = (id, e) => updateCalc(id, { name: e.target.value });
  const handleDelete = (id) => removeCalc(id);

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
              <th>sueldo</th>
              <th>valor</th>
              <th>cuotas</th>
              <th>id registro</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {item.read ? (
                    item.name
                  ) : (
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleNameChange(item.id, e)}
                    />
                  )}
                </td>

                <td>{item.amount}</td>
                <td>{item.value}</td>
                <td>{item.total}</td>
                <td>{item.select}</td>
                <td className="d-flex gap-1">
                  <button
                    type="button"
                    onClick={() => handleStateClick(item.id, item.read)}
                  >
                    {item.read ? (
                      <i class="bi bi-pencil-square"></i>
                    ) : (
                      <i class="bi bi-check-lg"></i>
                    )}
                  </button>
                  <button type="button" onClick={() => handleDelete(item.id)}>
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
