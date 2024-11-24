import { Controller, useFieldArray } from "react-hook-form";
function Step3({ control, errors }) {
  // Ya no es necesario usar useState, ya que useFieldArray ya maneja el estado de los productos
  const { fields, append, remove } = useFieldArray({
    control,
    name: "productos",
  });

  const handleAddProduct = () => {
    append({ nombre: "", cantidad: "", precioUnitario: "" });
  };

  const handleRemoveProduct = () => {
    if (fields.length > 0) {
      remove(fields.length - 1);
    }
  };

  return (
    <div>
      <h1>DETALLES FACTURA</h1>

      {/* Información de la factura */}
      <div className="content">
        <div className="group-input">
          <label>Numero</label>
          <Controller
            name="numeroFactura"
            defaultValue=""
            control={control}
            render={({ field }) => <input type="text" {...field} />}
          />
          {errors.numeroFactura && (
            <span className="error-message">
              {errors.numeroFactura.message}
            </span>
          )}
        </div>
        <div className="group-input">
          <label>Fecha de Emisión</label>
          <Controller
            name="fechaEmision"
            defaultValue=""
            control={control}
            render={({ field }) => <input type="date" {...field} />}
          />
          {errors.fechaEmision && (
            <span className="error-message">{errors.fechaEmision.message}</span>
          )}
        </div>
      </div>

      <div className="content">
        <div className="group-input">
          <label>Fecha de Vencimiento</label>
          <Controller
            name="fechaVencimiento"
            defaultValue=""
            control={control}
            render={({ field }) => <input type="date" {...field} />}
          />
          {errors.fechaVencimiento && (
            <span className="error-message">
              {errors.fechaVencimiento.message}
            </span>
          )}
        </div>
        <div className="group-input">
          <label>Condiciones de Pago</label>
          <Controller
            name="condicionesPago"
            defaultValue=""
            control={control}
            render={({ field }) => <input type="text" {...field} />}
          />
          {errors.condicionesPago && (
            <span className="error-message">
              {errors.condicionesPago.message}
            </span>
          )}
        </div>
      </div>

      <div className="content">
        <div className="group-input">
          <label>Metodo de Pago</label>
          <Controller
            name="metodoPago"
            defaultValue=""
            control={control}
            rules={{ required: "El método de pago es obligatorio" }} // Regla de validación (si es necesario)
            render={({ field }) => (
              <select {...field} className="select-input">
                <option value="">Selecciona un método de pago</option>
                <option value="tarjeta">Tarjeta de Crédito</option>
                <option value="paypal">PayPal</option>
                <option value="efectivo">Efectivo</option>
                <option value="transferencia">Transferencia Bancaria</option>
                {/* Puedes agregar más opciones según sea necesario */}
              </select>
            )}
          />
          {errors.metodoPago && (
            <span className="error-message">{errors.metodoPago.message}</span>
          )}
        </div>
        <div className="group-input">
          <label>Moneda</label>
          <Controller
            name="moneda"
            defaultValue=""
            control={control}
            rules={{ required: "La moneda es obligatoria" }} // Regla de validación (si es necesario)
            render={({ field }) => (
              <select {...field} className="select-input">
                <option value="">Selecciona una moneda</option>
                <option value="usd">USD (Dólar estadounidense)</option>
                <option value="eur">EUR (Euro)</option>
                <option value="mxn">MXN (Peso mexicano)</option>
                <option value="gbp">GBP (Libra esterlina)</option>
                {/* Agrega más monedas según sea necesario */}
              </select>
            )}
          />
          {errors.moneda && (
            <span className="error-message">{errors.moneda.message}</span>
          )}
        </div>
      </div>

      <h2>Productos</h2>

      {/* Botones para agregar o eliminar productos */}
      <div className="content">
        <div className="group-input">
          <button
            type="button"
            onClick={handleRemoveProduct}
            disabled={fields.length === 0}
          >
            Menos
          </button>
          <button type="button" onClick={handleAddProduct}>
            Más
          </button>
        </div>
      </div>

      {/* Lista de productos dinámicos */}
      <div className="productos-container">
        {fields.map((item, index) => (
          <div key={item.id} className="content">
            {/* Descripción del producto */}
            <div className="group-input">
              <label>Descripción {index + 1}</label>
              <Controller
                name={`productos[${index}].nombre`} // Campo para el nombre del producto
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} />}
              />
              {errors.nombre && (
                <span className="error-message">{errors.nombre.message}</span>
              )}
            </div>

            {/* Cantidad del producto */}
            <div className="group-input">
              <label>Cantidad {index + 1}</label>
              <Controller
                name={`productos[${index}].cantidad`} // Campo para la cantidad
                control={control}
                defaultValue=""
                render={({ field }) => <input type="number" {...field} />}
              />
              {errors.cantidad && (
                <span className="error-message">{errors.cantidad.message}</span>
              )}
            </div>

            {/* Precio Unitario del producto */}
            <div className="group-input">
              <label>Precio Unitario {index + 1}</label>
              <Controller
                name={`productos[${index}].precioUnitario`} // Campo para el precio unitario
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} />}
              />
              {errors.precioUnitario && (
                <span className="error-message">
                  {errors.precioUnitario.message}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Step3;
