import * as Yup from "yup";
import { afpSchema, dateSchema, fundSchema } from "./schemaUtils";

export const formSchema = Yup.object().shape({
  afp: afpSchema,
  fund: fundSchema,
  date: dateSchema,
});

export const tableSchema = Yup.object().shape({
  fund: fundSchema,
  date: dateSchema,
});

