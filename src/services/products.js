
import { closeModal, openModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";
import { handleGetProductLocalStorage, setInLocalStorage } from "./persistence/localstorage";
import { productoActivo } from "../../main";
import Swal from "sweetalert2";

//==============PRODUCTOS===================
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
    openModal();
});

//Guardar o Modificar



 export const handleSaverOrModifyElements = () => {
    const nombre = document.getElementById("name").value,
        imagen = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categories = document.getElementById("Categoria").value;
    if (categories === "Seleccione una categoría") {   //ESTO ES PAR QUE SI O SI INGRESE UNA CATEGORÍA
        alert("Por favor, selecciona una categoría válida.");
        return;
    }
    let object = null
    if (productoActivo) {
        console.log(productoActivo,"Se econtro un producto");
        object = {
            id: productoActivo.id,
            nombre,
            imagen,
            precio,
            categoria: categories,  // Asegúrate de usar "categoria" consistentemente
        };

    } else {

            console.log("no encontre nada");
        object = {
            id: new Date().toISOString(),
             nombre,
            imagen,
            precio,
            categoria: categories,  // Asegúrate de usar "categoria" consistentemente
        };
    }
    Swal.fire({
        title: "Guardado!",
        text: "Tu elemento ha sido Guardado",
        icon: "Exito"
      });

    setInLocalStorage(object);

    handleGetProductsToStore();

    closeModal();
};


const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click', () => {
    HandleCancelButton();
});


const HandleCancelButton = () => {
    closeModal();
}



//eliminar elemento 

/* ELIMINAR ELEMENTO */
export const handleDeleteElement = () => {
    Swal.fire({
      title: "Desea eliminar elemento?",
      text: "No se podrá revertir el cambio.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si,Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        const products = handleGetProductLocalStorage();
        const result = products.filter((el) => el.id != productoActivo.id);
        /* Setear nuevo array */
        localStorage.setItem("products", JSON.stringify(result));
        const newProducts = handleGetProductLocalStorage();
        handleRenderList(newProducts);
        closeModal();
        Swal.fire({
          title: "Eliminado!",
          text: "Tu elemento ha sido eliminado",
          icon: "Exito"
        });
      }
    });
  
}