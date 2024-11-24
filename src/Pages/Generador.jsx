import { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import { useForm } from "react-hook-form";
import { useFormFactura } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
function Generador() {
  const [step, setStep] = useState(1);
  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
    trigger,
  } = useForm();
  const { GeneradorPDF } = useFormFactura();
  const navigate = useNavigate();
  const nextStep = async () => {
    const isValid = await trigger(); // Valida todos los campos de todos los pasos

    if (isValid) {
      // Si es válido, avanzamos al siguiente paso
      if (step < 4) {
        setStep(step + 1);
      }
    } else {
      console.log("Formulario incompleto");
    }
  };
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const onSubmit = (data) => {
    Swal.fire({
      title: "Desea Generar La Factura?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Generar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Generado!",
          text: "Se ha Generado.",
          icon: "success"
        });
        GeneradorPDF(data);
        reset(); 
        setStep(1); 
        navigate('/');
      }
    });
  };
  return (
    <div className="row">
      <div className="wizard">
        <div className="steps">
          <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
          <div className={`step ${step >= 4 ? "active" : ""}`}>4</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <Step1 control={control} setValue={setValue} errors={errors} />
          )}
          {step === 2 && (
            <Step2 control={control} setValue={setValue} errors={errors} />
          )}
          {step === 3 && (
            <Step3 control={control} setValue={setValue} errors={errors} />
          )}
          {step === 4 && (
            <Step4 control={control} setValue={setValue} errors={errors} />
          )}
          <div className="buttons">
            {step > 1 && (
              <button type="button" onClick={prevStep}>
                Anterior
              </button>
            )}
            {step < 4 && (
              <button type="button" onClick={nextStep}>
                Siguiente
              </button>
            )}
            {step === 4 && <button type="submit">Generar</button>}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Generador;
