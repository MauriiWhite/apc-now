import { useCalcField } from "../../store/useDataField";

import CalcTable from "./CalcTable";

export default function CalcContainer() {
  const { calc } = useCalcField();

  return (
    <div className="container">
      <CalcTable data={calc} />
    </div>
  );
}
