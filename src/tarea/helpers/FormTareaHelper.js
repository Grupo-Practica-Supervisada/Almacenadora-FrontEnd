import { createTarea, updateTarea } from "../api/apiTareas";
import Swal from "sweetalert2";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  nombre: Yup.string().required("El nombre de la tarea es requerido"),
  descripcion: Yup.string()
    .required("La descripcion de la tarea es requerida"),
});
export const formOptions = { resolver: yupResolver(formSchema) };

export const sendData = async (state, option, id) => {
  let resultado;
  console.log("STATE ENVIADO", state)
  console.log("STATE ID", id)
  console.log("STATE NOMBRE", state.nombre)
  console.log("STATE DESCRIPCION", state.descripcion)
  console.log("STATE FECHAS", state.fechaInicio)
  console.log("STATE FECHAS", state.fechaFinal)
  console.log("STATE CREADOR", state.creador)



  console.log(option)
  switch (option) {
    case 1:
      // Código para crear tarea
      break;
    case 2:
      console.log("ENTRE AAAAAAAAAAAa")
      
      resultado = await updateTarea(id, { // Llamar al método de axios con el id y los datos a actualizar
        nombre: state.nombre,
        descripcion: state.descripcion,
        fechaInicio: state.fechaInicio,
        fechaFinal: state.fechaFinal,
        estado: state.estado,
        creador: state.creador
      });
      
      console.log("RESULTADO ", resultado)
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: `Tarea actualizado correctamente!`,
          confirmButtonText: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
  }
};