import * as Yup from "yup";

import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useDataField, useCalcField } from "../../store/useDataField";

function CalcDues() {
  const { data } = useDataField();
  const { setCalc } = useCalcField();

  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [available, setAvailable] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");

  const validationSchema = Yup.object().shape({
    amount: Yup.number()
      .positive("Debe ser un número positivo")
      .required("Se requiere el campo")
      .integer("Debe ser un entero"),
  });

  useEffect(() => {
    if (Boolean(selectedOption)) setAvailable(false);
  }, [selectedOption]);

  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const { amount } = values;
      const data = { amount, value, total, name, select: selectedOption };
      setCalc(data);
    },
  });

  const handleOptionChange = (e) => {
    const option = Number(e.target.value);
    setSelectedOption(option);
    if (amount) setTotal((amount / value).toFixed(1));
    const { valor, name } = data.find((item) => item.id === option);
    setName(name);
    setValue(valor);
  };

  const handleAmountChange = (e) => {
    const amountValue = Number(e.target.value);
    setAmount(amountValue);
    const fee = (amountValue / value).toFixed(1);
    setTotal(fee);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="d-flex flex-row">
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="" disabled>
          Nombre
        </option>
        {data?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="amount"
        value={formik.values.amount}
        onChange={(e) => {
          formik.handleChange(e);
          handleAmountChange(e);
        }}
        disabled={available}
      />
      {formik.errors.amount && formik.touched.amount && (
        <div>{formik.errors.amount}</div>
      )}
      <input
        type="number"
        name="dues"
        value={value}
        readOnly
        disabled={available}
      />
      <input
        type="number"
        name="total"
        value={total}
        readOnly
        disabled={available}
      />
      <button type="submit" disabled={available}>
        <i class="bi bi-plus-lg"></i>
      </button>
    </form>
  );
}

export default CalcDues;
