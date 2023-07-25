import { useDataField } from "../../store/useDataField";
import RegisterTable from "./RegisterTable";

export default function Container() {
  const { data } = useDataField();

  return (
    <div className="container">
      <RegisterTable data={data} />
    </div>
  );
}
