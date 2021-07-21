//Seleccionamos elementos del HTML
const main               = document.querySelector( 'main' );
const resultadosBusqueda = document.getElementById( 'resultado-busqueda' );


export const renderizarHTML = ( recetas ) => {
    main.classList.remove( 'inicial' );
    let resultadosDibujados = [];
    recetas.forEach( ( receta ) => {
        resultadosDibujados += `<div class="item">
                                    <img src=${ ( receta.recipe.image ) ? ( receta.recipe.image ) : ( './img/Error.jpg' )} alt="">
                                    <div class="flex-container">
                                        <h2>${ receta.recipe.label }</h2>
                                        <a href="${ receta.recipe.url }" target="_blanck" class="btn-receta">Ver receta</a>
                                    </div>
                                    <p class="datos-receta">Calorias: ${ ( receta.recipe.calories ) ? ( Math.floor( receta.recipe.calories) ) : ( 'No hay información' ) }</p>
                                    <p class="datos-receta">Dietas: ${ ( receta.recipe.dietLabels.length > 0 ) ? ( receta.recipe.dietLabels ) : ( 'No hay información ') }</p>
                                    <p class="datos-receta">${ ( receta.recipe.mealType ) ? ( receta.recipe.mealType ) : ( 'No hay información' ) }</p>
                                </div>` 
    });
    resultadosBusqueda.innerHTML = resultadosDibujados;    
}