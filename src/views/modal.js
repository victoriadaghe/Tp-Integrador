import { setproductoActivo } from "../../main";
import { productoActivo } from "../../main";
import {handleDeleteElement, handleSaverOrModifyElements} from "../services/products";

//Abrir Pop Up

const acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener('click', () => {
    handleSaverOrModifyElements();
});


export const openModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("deleteButton");
    if (productoActivo) {
        buttonDelete.style.display = "block"
     } else {
         deleteButton.style.display = "none"
     }
    if (productoActivo) {
        const nombre = document.getElementById("name"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categories = document.getElementById("Categoria");
        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categories.value = productoActivo.categoria;
        



    }

};



// Cerrar el Pop Up
export const closeModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
   setproductoActivo(null); 
   resetModal();
};


//Reset modal debería ejecutarse cada vez que se cierre el modal
export const resetModal = () => {
    const nombre = document.getElementById("name"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("Categoria");
    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categories.value = "Seleccione una categoría";

};

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
    handlebuttonDelete();
})

const handlebuttonDelete = () => {
    handleDeleteElement();
}