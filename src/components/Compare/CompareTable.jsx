import { motion } from "framer-motion";

export default function CompareTable({ items }) {
  return (
    <motion.table
      className="table container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <thead>
        <tr>
          <th>afp</th>
          <th>valor clp</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map((item) => (
            <tr key={item.afp}>
              <td>{item.afp}</td>
              <td>{item.valor}</td>
            </tr>
          ))}
      </tbody>
    </motion.table>
  );
}
