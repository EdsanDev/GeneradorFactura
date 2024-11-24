import { createContext, useContext, useState } from "react";
import { jsPDF } from "jspdf";

// Crear el contexto
const FormContext = createContext();

// Proveedor del contexto
export const FacturaProvider = ({ children }) => {
  const GeneradorPDF = (formData) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("FACTURA", 14, 20);
    doc.setFontSize(12);
    doc.text("EMITIDA A:", 14, 30);
    doc.text(`Nombre: ${formData.nombre_receptor}`, 14, 35);
    doc.text(
      `Domicilio: ${formData.calle_receptor} ${formData.colonia_receptor} ${formData.cuidad_receptor} ${formData.estado_receptor} CP:${formData.codigo_postal_receptor} ${formData.pais_receptor}`,
      14,
      40
    );
    doc.text(`Correo: ${formData.correo_receptor}`, 14, 45);
    doc.text(`Telefono: ${formData.telefono_receptor}`, 14, 50);
    doc.setFontSize(15);
    doc.text("NUMERO:", 14, 75);
    doc.text("FECHA DE EMISION:", 100, 75);
    doc.setFontSize(15);
    doc.text(`${formData.numeroFactura}`, 45, 75);
    doc.text(`${formData.fechaEmision}`, 155, 75);
    // Si no hay productos, muestra un mensaje
    if (formData.productos && formData.productos.length > 0) {
      const productos = formData.productos.map((product) => ({
        descripcion: product.nombre,
        cantidad: product.cantidad,
        precio: product.precioUnitario,
        total: product.cantidad * product.precioUnitario,
      }));
      let subtotal = productos.reduce((acc, product) => acc + product.total, 0);
      let iva = subtotal * (parseFloat(formData.porcentaje) / 100);
      const totalConIva = subtotal + iva;
      console.log(totalConIva);
      // Comienza la tabla a partir de la posición Y=100
      const startY = 90;
      const marginLeft = 14;
      const marginTop = 5;
      const rowHeight = 10;
      let yPos = startY;
      // Genera la tabla en el PDF
      // Dibujar los encabezados
      doc.setFontSize(12);
      doc.setTextColor(255, 255, 255); // Color blanco para el texto
      doc.setFillColor(32, 113, 194); // Color de fondo negro
      doc.rect(marginLeft, yPos, 180, rowHeight, "F"); // Dibujar el fondo negro de la fila
      doc.setTextColor(255, 255, 255); // Cambiar color del texto a blanco para los encabezados
      doc.text("Descripción", marginLeft + 5, yPos + 7);
      doc.text("Cantidad", marginLeft + 65, yPos + 7);
      doc.text("Precio Unitario", marginLeft + 115, yPos + 7);
      doc.text("Total", marginLeft + 160, yPos + 7);
      yPos += rowHeight; // Desplazar hacia abajo para la siguiente fila

      // Dibujar los productos
      productos.forEach((product) => {
        doc.setTextColor(0, 0, 0); // Volver a color de texto negro
        doc.rect(marginLeft, yPos, 180, rowHeight); // Dibujar la caja de cada fila

        // Añadir el texto en cada celda
        doc.text(product.descripcion, marginLeft + 5, yPos + 7);
        doc.text(product.cantidad.toString(), marginLeft + 65, yPos + 7);
        doc.text(product.precio.toString(), marginLeft + 115, yPos + 7);
        doc.text(product.total.toString(), marginLeft + 160, yPos + 7);

        yPos += rowHeight; // Desplazar hacia abajo para la siguiente fila
      });
      yPos += rowHeight; // Espacio después de la tabla
      doc.setFontSize(12);
      doc.text("Subtotal: $" + subtotal.toFixed(2), marginLeft + 120, yPos);
      yPos += rowHeight; // Desplazar hacia abajo para el IVA
      doc.text(
        `IVA (${formData.porcentaje}%): $` + iva.toFixed(2),
        marginLeft + 120,
        yPos
      );
      yPos += rowHeight; // Desplazar hacia abajo para el Total
      doc.text("TOTAL: $" + totalConIva.toFixed(2), marginLeft + 120, yPos);
    } else {
      // Si no hay productos, muestra un mensaje
      doc.text("No hay productos en la factura.", 14, 95);
    }
    doc.save("FacturaPrueba.pdf");
  };

  return (
    <FormContext.Provider value={{ GeneradorPDF }}>
      {children}
    </FormContext.Provider>
  );
};

// Hook para usar el contexto
export const useFormFactura = () => {
  return useContext(FormContext);
};
