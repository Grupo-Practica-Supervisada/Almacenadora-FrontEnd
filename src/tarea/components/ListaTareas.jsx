import { useEffect, useState } from "react";
import { DeleteTarea, apiTareas } from "../api/apiTareas";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Swal from "sweetalert2";
import { UpdateTarea } from "./UpdateTarea";

export const ListaTareas = () => {
  const [listaTareas, setListaTareas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [tareas, setTareas] = useState({
    nombre: "",
    descripcion: "", 
    fechaInicio: new Date(), 
    fechaFinal: new Date(), 
    estado: false, 
    creador: ""
  });
  const [isChecked, setIsChecked] = useState(true);

  const viewTareasList = async () => {
    const getListTareasFromApi = await apiTareas();
    setListaTareas(getListTareasFromApi);
  };

  const reload = async () => {
    const result = await apiTareas();
    setTareas(result);
  };

  useEffect(() => {
    viewTareasList();
  }, [showModal]);

  const handleOpenModal = (u) => {
    setShowModal(true);
    setTareas(u);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const eliminar = async (id) => {
    let result = await DeleteTarea(id);
    if (result) {
      setListaTareas(listaTareas.filter((u) => u._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó la tarea correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar la tarea!",
      });
    }
  };

  return (
    <>
      <div className="container">
        <h2>Lista de Tareas</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Estado</th>
              <th scope="col">Creador</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {listaTareas.map((u) => {
              return (
                <tr key={u._id}>
                  <th scope="row">{u._id}</th>
                  <td>{u.nombre}</td>
                  <td>{u.descripcion}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={u.estado}
                      onChange={() => setIsChecked(!isChecked)}
                    />
                  </td>
                  <td>{u.creador}</td>
                  <td>
                    <button className="btn btn-info">
                      Ver
                      <VisibilityIcon />
                    </button>
                    <button className="btn btn-warning"  onClick={() => handleOpenModal(u)}>
                      Editar
                      <EditIcon />
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        eliminar(u._id);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <UpdateTarea
          tareaEdit={tareas}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateTarea>
      </div>
    </>
  );
};
