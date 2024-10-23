/* LOCALSTORAGE */

export const handleGetProductLocalStorage =()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    if (products){
        return products
    }else{
        return [];
    }
}

/* guardar en localStorage */

/* Recibir un producto */
export const setInLocalStorage=(productIn)=>{
/* Traer los elementos */
let productsInLocal = handleGetProductLocalStorage();

const existingIndex = productsInLocal.findIndex((productsLocal)=>
    productsLocal.id == productIn.id
)
/* Verificar si el elemento existe */
if(existingIndex != -1){
/* si existe */
productsInLocal[existingIndex] = productIn;
}else{
/* si no existe */
productsInLocal.push(productIn);
}
/* setear nuevo array */
localStorage.setItem("products",JSON.stringify(productsInLocal));

}