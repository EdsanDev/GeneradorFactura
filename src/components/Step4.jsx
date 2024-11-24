import { Controller } from "react-hook-form";
function Step4({ control, errors }) {
  return (
    <div>
      <h1>Impuesto</h1>
      <div>
        <div className="content">
          <div className="group-input">
            <label>Tipo de Impuesto</label>
            <Controller
              name="tipo_impuesto"
              defaultValue=""
              control={control}
              rules={{ required: "Este campo es obligatorio" }} // Regla de validación
              render={({ field }) => (
                <select {...field} className="select-input">
                  <option value="">Selecciona un tipo de impuesto</option>
                  <option value="iva">IVA (Impuesto al Valor Agregado)</option>
                  <option value="isr">ISR (Impuesto Sobre la Renta)</option>
                  <option value="ieps">
                    IEPS (Impuesto Especial sobre Producción y Servicios)
                  </option>
                  <option value="otros">Otros</option>
                  {/* Puedes agregar más tipos de impuestos según sea necesario */}
                </select>
              )}
            />
            {errors.tipo_impuesto && (
              <span className="error-message">
                {errors.tipo_impuesto.message}
              </span>
            )}
          </div>
          <div className="group-input">
            <label>Porcentaje</label>
            <Controller
              name="porcentaje"
              type="number"
              defaultValue=""
              control={control}
              rules={{ required: "Este campo es obligatorio" }}
              render={({ field }) => <input {...field} />}
            />
            {errors.porcentaje && (
              <span className="error-message">{errors.porcentaje.message}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Step4;
