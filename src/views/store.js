//==========Store============
import { openModal } from "./modal";
import { setproductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../services/persistence/localstorage"


//TRAE ELEMENTOS Y LLAMA AL RENDER
export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}


//FILTRA Y RENDERIZA LA SECCIÓN CON SUS RESPECTIVOS ELEMENTOS
export const handleRenderList = (productosIn) => {

    //FILTRA LOS ARRAYS POR CATEGORIA 
    const burgers = productosIn.filter((el) => el.categoria == "Hamburguesa");
    const papas = productosIn.filter((el) => el.categoria == "Papas");
    const bebidas = productosIn.filter((el) => el.categoria == "Gaseosa");

    //RENDERIZO LOS ELEMENTOS DE LA FUNCION
    const renderProductGroup = (products, title) => {
        console.log(products);
        if (products.length > 0) {
            const productsHTML = products.map((product, index) => {
                return `
                <div class="containerTargetItem" id="product-${product.categoria}-${index}">
                    <div>
                        <img src='${product.imagen}' alt="${product.nombre}"/>
                        <div>
                            <h2>${product.nombre}</h2>
                        </div>
                        <div class="targetProps">
                            <p><b>Precio:</b> $ ${product.precio}</p>
                            <p><b>Categoria:</b> ${product.categoria}</p>
                        </div>
                    </div>
                </div>`;
            });

            //RETORNA LA SECCIÓN CON TODOS SUS ELEMENTOS
            return `
            <section class="sectionStore">
            <div class="containerTitleSection">
            <h3>${title}</h3>
            </div>
            <div class="containerProductStore">
            ${productsHTML.join("")}  
            </div>

            </section>
            `;
        } else {
            return "";
        }
    };

    // Renderizar cada uno de los productos dentro de sus categorías
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
        ${renderProductGroup(burgers, "Hamburguesa")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(bebidas, "Bebidas")}
    `;

    const addEvents = (productsIn) => {
        console.log(productosIn);
        if (productsIn) {
            productsIn.forEach((element, index) => {
                console.log(element);
                const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
                console.log(productContainer);
                productContainer.addEventListener("click", () => {
                    console.log("Producto Activo", element);
                    setproductoActivo(element);
                    openModal();

                    
                })
            });
        }
    }
    addEvents(burgers);
    addEvents(papas);
    addEvents(bebidas);




};

