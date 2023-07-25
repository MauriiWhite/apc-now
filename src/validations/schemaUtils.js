import * as Yup from "yup";

export const afpSchema = Yup.string().required("Debe seleccionar una AFP");

export const fundSchema = Yup.string().required("Debe seleccionar un Fondo");

export const dateSchema = Yup.date()
  .required("La fecha es requerida")
  .nullable()
  .max(new Date(), "Fecha inválida")
  .min(new Date("2002-01-01"), "Fecha desde 2002");

