import { useState } from "react";
import { Formik, Form } from "formik";
import { useData } from "../../hooks/useData";
import { tableSchema } from "../../validations/formSchema";
import { parseTableField } from "../../middlewares/parserURL";

import FormField from "../Field/FormField";
import CompareTable from "./CompareTable";
import SchemasStore from "../../store/SchemasStore";

const Compare = () => {
  const fundsSchemas = SchemasStore.getFundsSchemas();
  const [state, setState] = useState(null);
  const { data, loading } = useData(state);

  const handleSubmit = async (values) => {
    setState(parseTableField(values));
  };

  return (
    <>
      <Formik
        initialValues={{ fund: "", date: "" }}
        validationSchema={tableSchema}
        onSubmit={handleSubmit}
        className="container-fluid"
      >
        {({ isSubmitting }) => (
          <Form className="compare">
            <FormField
              text="Fondo"
              name="fund"
              schema={fundsSchemas}
              type="select"
            />
            <FormField name="date" type="date" />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : <i class="bi bi-check-lg"></i>}
            </button>
          </Form>
        )}
      </Formik>
      {loading && <div class="spinner-border text-primary" role="status" /> }
      {!loading && data && <CompareTable items={data} />}
    </>
  );
};

export default Compare;
