import { setInLocalStorage } from "./src/services/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css'
import { closeModal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/services/searchBar";



//================APLICACIÓN==========================
export let categoriaActiva = null;
export const setcategoriaActivo = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};
export let productoActivo = null;
export const setproductoActivo = (productoIn) => {
    productoActivo = productoIn;
};


renderCategories();
handleGetProductsToStore();
// ButtonSearch
const buttonSearch = document.getElementById('buttonSearch');
buttonSearch.addEventListener("click",()=>{
    handleSearchProductByName();
});





