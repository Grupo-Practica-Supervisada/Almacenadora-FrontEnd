import React from "react";
import { FormTarea } from "./FormTarea";
import { Modal } from "react-bootstrap";
export const UpdateTarea = ({ isOpen, onClose, tareaEdit }) => {
  if (!isOpen) {
    return null;
  }
  console.log("Valor de fecha:", tareaEdit.fechaInicio);
  console.log("Valor de fecha:", tareaEdit.fechaFinal);


  return (
    <>
      <>
        <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {tareaEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormTarea
              nombre={tareaEdit.nombre}
              descripcion={tareaEdit.descripcion}
              fechaInicio={tareaEdit.fechaInicio}
              fechaFinal={tareaEdit.fechaFinal}
              creador={tareaEdit.creador}
              option={2}
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={onClose}>
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};
