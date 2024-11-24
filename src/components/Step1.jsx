import { Controller } from "react-hook-form";
function Step1({ control, errors }) {
  return (
    <div>
      <h1>DATOS EMPRESA</h1>
      <div className="content">
        <div className="group-input">
          <label>Nombre o Razón Social</label>
          <Controller
            name="nombre"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="Nombre o Empresa" {...field} />}
          />
          {errors.nombre && (
            <span className="error-message">{errors.nombre.message}</span>
          )}
        </div>

        <div className="group-input">
          <label>Calle</label>
          <Controller
            name="calle"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="Calle" {...field} />}
          />
          {errors.calle && (
            <span className="error-message">{errors.calle.message}</span>
          )}
        </div>
      </div>
      <div className="content">
        <div className="group-input">
          <label>Colonia</label>
          <Controller
            name="colonia"
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
            name="cuidad"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="Cuidad" {...field} />}
          />
          {errors.cuidad && (
            <span className="error-message">{errors.cuidad.message}</span>
          )}
        </div>
      </div>
      <div className="content">
        <div className="group-input">
          <label>Estado</label>
          <Controller
            name="estado"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="Estado" {...field} />}
          />
          {errors.estado && (
            <span className="error-message">{errors.estado.message}</span>
          )}
        </div>
        <div className="group-input">
          <label>Codigo Postal</label>
          <Controller
            name="codigo_postal"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="Codigo Postal" {...field} />}
          />
          {errors.codigo_postal && (
            <span className="error-message">
              {errors.codigo_postal.message}
            </span>
          )}
        </div>
      </div>
      <div className="content">
        <div className="group-input">
          <label>Pais</label>
          <Controller
            name="pais"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="Mexico" {...field} />}
          />
          {errors.pais && (
            <span className="error-message">{errors.pais.message}</span>
          )}
        </div>
        <div className="group-input">
          <label>RFC</label>
          <Controller
            name="nif"
            defaultValue=""
            control={control}
            rules={{ required: "Este campo es obligatorio" }}
            render={({ field }) => <input placeholder="RFC" {...field} />}
          />
          {errors.nif && (
            <span className="error-message">{errors.nif.message}</span>
          )}
        </div>
      </div>
      <div className="content">
        <div className="group-input">
          <label>Correo</label>
          <Controller
            name="correo"
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
          {errors.correo && (
            <span className="error-message">{errors.correo.message}</span>
          )}
        </div>
        <div className="group-input">
          <label>Teléfono</label>
          <Controller
            name="telefono"
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
          {errors.telefono && (
            <span className="error-message">{errors.telefono.message}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Step1;
