/* CREACIÓN DE CRUC */

/* 1.- FUNCIÓN PARA CREAR TAREA */
const crearTarea = (event) => {
  event.preventDefault();
  const tarea = document.getElementById("tarea").value;
  const descripcion = document.getElementById("descripcion").value;
  const tareasTODO = {
    tarea,
    descripcion,
  };
  localStorage.setItem("Tareas", JSON.stringify(tareasTODO));
};
