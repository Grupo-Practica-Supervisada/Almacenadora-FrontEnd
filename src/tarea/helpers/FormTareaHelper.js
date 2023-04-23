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
  switch (option) {
    case 1:
      resultado = await createTarea({ // Llamar al método de axios con el id y los datos a actualizar
        nombre: state.tarea.nombre,
        descripcion: state.tarea.descripcion,
        fechaInicio: state.tarea.fechaInicio,
        fechaFinal: state.tarea.fechaFinal,
        estado: state.tarea.estado,
        creador: state.tarea.creador
      }
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "usuario creado correctamente!",
          showConfirmButton: true,
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
    case 2:
      resultado = await updateTarea(state.tarea._id, { // Llamar al método de axios con el id y los datos a actualizar
        nombre: state.tarea.nombre,
        descripcion: state.tarea.descripcion,
        fechaInicio: state.tarea.fechaInicio,
        fechaFinal: state.tarea.fechaFinal,
        estado: state.tarea.estado,
        creador: state.tarea.creador
      });
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