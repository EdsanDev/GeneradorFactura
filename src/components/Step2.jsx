
import { Controller } from "react-hook-form";
function Step2({ control,errors}) {
  return (
    <div>
      <h1>DATOS CLIENTE</h1>
      <div className="content">
        <div className="group-input">
          <label>Nombre o Razón Social</label>
          <Controller
            name="nombre_receptor"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="Nombre o Empresa" {...field} />}
          />
          {errors.nombre_receptor && (
            <span className="error-message">{errors.nombre_receptor.message}</span>
          )}
        </div>

        <div className="group-input">
          <label>Calle</label>
          <Controller
            name="calle_receptor"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="Calle" {...field} />}
          />
          {errors.calle_receptor && (
            <span className="error-message">{errors.calle_receptor.message}</span>
          )}
        </div>
      </div>
      <div className="content">
        <div className="group-input">
          <label>Colonia</label>
          <Controller
            name="colonia_receptor"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="Colonia" {...field} />}
          />
          {errors.colonia && (
            <span className="error-message">{errors.colonia.message}</span>
          )}
        </div>

        <div className="group-input">
          <label>Cuidad</label>
          <Controller
            name="cuidad_receptor"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="Cuidad" {...field} />}
          />
          {errors.cuidad_receptor && (
            <span className="error-message">{errors.cuidad_receptor.message}</span>
          )}
        </div>
      </div>
      <div className="content">
        <div className="group-input">
          <label>Estado</label>
          <Controller
            name="estado_receptor"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="Estado" {...field} />}
          />
          {errors.estado_receptor && (
            <span className="error-message">{errors.estado_receptor.message}</span>
          )}
        </div>
        <div className="group-input">
          <label>Codigo Postal</label>
          <Controller
            name="codigo_postal_receptor"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="Codigo Postal" {...field} />}
          />
          {errors.codigo_postal_receptor && (
            <span className="error-message">
              {errors.codigo_postal_receptor.message}
            </span>
          )}
        </div>
      </div>
      <div className="content">
        <div className="group-input">
          <label>Pais</label>
          <Controller
            name="pais_receptor"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="Mexico" {...field} />}
          />
          {errors.pais_receptor && (
            <span className="error-message">{errors.pais_receptor.message}</span>
          )}
        </div>
        <div className="group-input">
          <label>RFC</label>
          <Controller
            name="nif_receptor"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="RFC" {...field} />}
          />
          {errors.nif_receptor && (
            <span className="error-message">{errors.nif_receptor.message}</span>
          )}
        </div>
      </div>
      <div className="content">
        <div className="group-input">
          <label>Correo</label>
          <Controller
            name="correo_receptor"
            defaultValue=""
            control={control}
            rules={{
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "El correo no es válido",
              },
            }}
            render={({ field }) => <input type="email" placeholder="Example@example.com" {...field} />}
          />
          {errors.correo_receptor && (
            <span className="error-message">{errors.correo_receptor.message}</span>
          )}
        </div>
        <div className="group-input">
          <label>Teléfono</label>
          <Controller
            name="telefono_receptor"
            defaultValue=""
            control={control}
            rules={{
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "El teléfono debe tener 10 dígitos",
              },
            }}
            render={({ field }) => <input placeholder="Telefono" {...field} />}
          />
          {errors.telefono_receptor && (
            <span className="error-message">{errors.telefono_receptor.message}</span>
          )}
        </div>
      </div>
    </div>
  );
}
export default Step2;
