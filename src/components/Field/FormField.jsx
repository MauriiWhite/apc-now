import { useField } from "formik";

export default function FormField({ type, text, name, schema }) {
  const [field, meta] = useField(name);

  const renderField = () => {
    switch (type) {
      case "select":
        return (
          <select {...field} name={name}>
            <option value="" disabled>
              {text}
            </option>
            {schema.map((obj) => (
              <option key={obj} value={obj}>
                {obj}
              </option>
            ))}
          </select>
        );
      case "date":
        return <input type="date" {...field} name={name} min="2002-01-01" />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="alerts">
        {renderField()}
        {meta.touched && meta.error && (
          <div className="alert">{meta.error}</div>
        )}
      </div>
    </>
  );
}
