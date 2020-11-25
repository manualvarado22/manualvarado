// ¡Gracias!
// https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/

// Moment.js está instalado como una devDependency.
const moment = require('moment');

// Configurar el locale de Moment dependiendo del
// formato preferido.
// En este caso es español de Venezuela.
moment.locale('es-VE');

module.exports = function(eleventyConfig) {
    /* ARCHIVOS POR PASSTHROUGH COPY */

	eleventyConfig.addPassthroughCopy('assets/css');
	eleventyConfig.addPassthroughCopy('assets/fontawesome-free-5.15.1');

    /* FILTROS */

    // Recibimos una fecha como argumento y la pasamos
    // y usamos la funcion toISOString() de Moment.js
    // para retornar una fecha ISO compliant.
    eleventyConfig.addFilter('fechaISO', fecha => moment(fecha).toISOString());

    // Pasamos la fecha como argument para Moment.js, la
    // convertimos en UTC, y la convertimos en formato largo (LL).
    // Para Venezuela, un ejemplo sería:
    // 18 de Noviembre de 2020.
    eleventyConfig.addFilter('fechaLegible', fecha => moment(fecha).utc().format('LL'));

    // Recibimos el artículo completo y los pasamos
    // a la función extraerExcerpt() para retornar
    // el excerpt obtenido.
    // eleventyConfig.addFilter('excerpt', articulo => extraerExcerpt(articulo));

    /* SHORTCODES */

    // Es una prueba para ver si usando excerpt como shortcode
    // en lugar de un filtro no daría error en Netlify.
    eleventyConfig.addShortcode('excerpt', articulo => extraerExcerpt(articulo));
};

/* FUNCIONES */

function extraerExcerpt(articulo, clase) {
    // Si el artículo no tiene la propiedad templateContent,
    // que es el contenido del post, se muestra una advertencia en 
    // la consola y se retorna null.
    if (!articulo.hasOwnProperty('templateContent')) {
        console.warn('La extracción de Excerpt ha fallado: El documento no tiene propiedad "templateContent".');

        return null;
    }

    let excerpt = null;
    const contenido = articulo.templateContent;

    // Los separadores de inicio y fin para encontrar el excerpt.
    const separadoresList = [
        { inicio: '<!-- Excerpt inicio -->', fin: '<!-- Excerpt fin -->' },
        { inicio: '<p>', fin: '</p>' }
    ];

    // Usamos la funcion de array some() porque el excerpt
    // se puede obtener de varias formas.
    // En el .md del post se puede asignar el excerpt usando
    // las etiquetas <!-- Excerpt inicio --> y <!-- Excerpt fin -->,
    // y si no se asigna, entonces el excerpt va a ser todo el primer
    // paragraph. Desde <p> hasta </p>.
    separadoresList.some(separadores => {
        const inicioPosicion = contenido.indexOf(separadores.inicio);
        const finPosicion = contenido.indexOf(separadores.fin);

        if (inicioPosicion !== -1 && finPosicion !== -1) {
            excerpt = contenido.substring(inicioPosicion + separadores.inicio.length, finPosicion);
            // Si no hay etiquetas de inicio y fin de excerpt,
            // entonces el excerpt va a ser el primer <p>.
            // En ese caso, queremos que el excerpt este rodeado por
            // etiquetas <p> y </p>.
            // excerpt = (separadores.inicio === '<p>') ? `<p>${excerpt}</p>` : excerpt;

            // Rompemos el loop de some si la funcion retorna true antes
            // de que termine de iterar en todos los elementos del array.
            return true;
        }
    });

    return excerpt;
}