//===================CATEGORIA==============================


import { handleRenderList } from "../views/store";
import { handleGetProductLocalStorage } from "./persistence/localstorage";

const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage(); // Corregido el typo
    let result;

    switch (categoryIn) {
        case "Todos los productos":
            result = products;
            break;
        case "Hamburguesa":
        case "Papas":
        case "Gaseosa":
            result = products.filter((el) => el.categoria == categoryIn);
            break;
        case "mayorPrecio":
            result = products.sort((a, b) => b.precio - a.precio);
            break;
        case "menorPrecio":
            result = products.sort((a, b) => a.precio - b.precio);
            break;
        default:
            result = products;
            break;
    }
    handleRenderList(result);
};


//Render de la vista categorias
export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li class="liActive" id="Todos">Todos los productos</li>
    <li id="Hamburguesa">Hamburguesa</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosa">Bebidas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;

    const liElements = ulList.querySelectorAll("li");
    liElements.forEach(liElement => {
        liElement.addEventListener("click", () => {
            handleClick(liElement);  // Actualiza el estilo
            handleFilterProductsByCategory(liElement.id);  // Llama al filtro correcto
        });
    });

    const handleClick = (elemento) => {
        liElements.forEach((el) => {
            if (el.classList.contains("liActive")) {
                el.classList.remove("liActive");
            } else if (elemento === el) {
                el.classList.add("liActive");
            }
        });
    };
};
