
const SchemasStore = {
  schemas: {
    afp: [
      "CAPITAL",
      "CUPRUM",
      "HABITAT",
      "MODELO",
      "PLANVITAL",
      "PROVIDA",
      "UNO",
    ],
    funds: ["A", "B", "C", "D", "E"],
    values: ["CLP", "UF"],
  },
  getAFPSchemas: () => SchemasStore.schemas.afp,
  getFundsSchemas: () => SchemasStore.schemas.funds,
  getValuesSchemas: () => SchemasStore.schemas.values,
};

export default SchemasStore;
