import { useCalcField } from "../../store/useDataField";

function CardCalc({ values }) {
  const { removeCalc, updateCalc, toggleRead } = useCalcField();

  const handleStateClick = () => {
    toggleRead(values.id);
    if (values.read) {
      updateCalc(values.id, { name: values.name });
    }
  };

  const handleNameChange = (e) => {
    updateCalc(values.id, { name: e.target.value });
  };

  const handleDelete = () => {
    removeCalc(values.id);
  };

  return (
    <>
      {values && (
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              {values.id}
              {values.read ? (
                <span>{values.name}</span>
              ) : (
                <input
                  type="text"
                  value={values.name}
                  onChange={handleNameChange}
                />
              )}
              <button type="button" onClick={handleStateClick}>
                {values.read ? (
                  <i class="bi bi-pencil-square"></i>
                ) : (
                  <i class="bi bi-check-lg"></i>
                )}
              </button>
              <button type="button" onClick={handleDelete}>
                <i class="bi bi-trash-fill"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardCalc;
