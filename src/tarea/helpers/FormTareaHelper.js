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

export const sendData = async (tarea, option) => {
  let resultado;
  switch (option) {
    // case 1:
    //   console.log("hola");
    //   resultado = await createTarea(
    //     user.username,
    //     user.email,
    //     user.password,
    //     user.rol
    //   );
    //   if (resultado) {
    //     Swal.fire({
    //       icon: "success",
    //       title: "Genial!",
    //       text: "usuario creado correctamente!",
    //       showConfirmButton: true,
    //       confirmButtonText: "Ok",
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         window.location.href = "/";
    //       } else {
    //         window.location.href = "/";
    //       }
    //     });
    //   }
    //   break;
    case 2:
      console.log(tarea._id);
      resultado = await updateTarea(
        tarea._id,
        tarea.nombre,
        tarea.descripcion,
        tarea.fechaInicio,
        tarea.fechaFinal,
        tarea.estado,
        tarea.creador
      );
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
          } else {
          }
        });
      }
      break;
  }
};
