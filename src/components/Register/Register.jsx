import { useState } from "react";
import { Formik, Form } from "formik";

import { parseDataField } from "../../middlewares/parserURL";
import { useData } from "../../hooks/useData";
import { formSchema } from "../../validations/formSchema";
import { useClicked } from "../../store/useDataField";

import SchemasStore from "../../store/SchemasStore";
import FormField from "../Field/FormField";
import DataField from "../Field/DataField";

const Register = () => {
  const afpSchemas = SchemasStore.getAFPSchemas();
  const fundsSchemas = SchemasStore.getFundsSchemas();

  const [state, setState] = useState(null);

  const { data, loading } = useData(state);
  const { setClicked } = useClicked();

  const handleSubmit = async (values) => {
    setState(parseDataField(values));
    setClicked();
  };

  return (
    <Formik
      initialValues={{ afp: "", fund: "", date: "" }}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      <Form className="container-fluid">
        <div className="fields container-fluid">
          <FormField text="AFP" name="afp" schema={afpSchemas} type="select" />
          <FormField
            text="Fondo"
            name="fund"
            schema={fundsSchemas}
            type="select"
          />

          <FormField name="date" type="date" />

          <button type="submit">
            <i class="bi bi-check-lg"></i>
          </button>
        </div>

        {loading && <div class="spinner-border text-primary" role="status" />}

        {data && <DataField fields={data} />}
      </Form>
    </Formik>
  );
};

export default Register;
