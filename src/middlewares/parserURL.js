import { fetchData } from "../api/data.api";

import SchemasStore from "../store/SchemasStore";

const moveYearToEnd = (date) => date.split("-").reverse().join("-");

const getNextDay = (date) => {
  const day = Number(date.slice(-2)) + 1;
  return day.toString().padStart(2, "0");
};

const formatToURL = (date) => date.replaceAll("-", "%2F");

export const parseDataField = async ({ afp, fund, date }) => {
  const valueDate = moveYearToEnd(date);
  const nextDay = getNextDay(valueDate);
  const updatedDate = valueDate.slice(0, -2) + nextDay;

  const formattedStartDate = formatToURL(valueDate);
  const formattedEndDate = formatToURL(updatedDate);

  const URL = `?listaAFPs=${afp}&listaFondos=${fund}&fechaInicial=${formattedStartDate}&fechaFinal=${formattedEndDate}`;

  try {
    const data = await fetchData(URL);
    return data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const parseTableField = async ({ fund, date }) => {
  const afpSchemas = SchemasStore.getAFPSchemas();
  const dataPromises = afpSchemas.map((afp) =>
    parseDataField({ afp, fund, date })
  );

  try {
    const dataArray = await Promise.all(dataPromises);
    const data = dataArray.filter((item) => item !== undefined);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
