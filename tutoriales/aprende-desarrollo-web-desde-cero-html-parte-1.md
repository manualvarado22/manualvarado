---
titulo: Aprende desarrollo web desde cero - HTML (Parte 1)
fecha: 2020-11-21
---
<!-- Excerpt inicio -->
Si estás interesada/o en aprender desarrollo web, es posible que ya hayas escuchado hablar de <a href="https://es.wikipedia.org/wiki/HTML" target="_blank">HTML</a>.

HTML es un acrónimo de *HyperText Markup Language*, o *Lenguaje de Marcado de HiperTexto* en español.
<!-- Excerpt fin -->

HiperTexto puede ser una palabra intimidante, pero no es otra cosa que los links o enlaces que usamos todo el tiempo cuando estamos navegando en internet.

Gracias a los links podemos enlazar distintas páginas web de manera coherente y sin tener que escribir todas las <a href="https://es.wikipedia.org/wiki/Localizador_de_recursos_uniforme" target="_blank">direcciones URL</a> manualmente.

## Lenguaje de Marcado

Si has investigado sobre programación, o si ya has programado antes pero nunca para la web, entonces es probable que la palabra lenguaje te sea familiar.

En el mundo de la computación usamos distintos <a href="https://es.wikipedia.org/wiki/Lenguaje_de_programaci%C3%B3n" target="_blank">lenguajes de programación</a> para dar órdenes a la computadora y poder escribir programas, aplicaciones y otros tipos de software.

HTML es un lenguaje de computadoras, pero no es un lenguaje de programación, sino un <a href="https://es.wikipedia.org/wiki/Lenguaje_de_marcado" target="_blank">lenguaje de marcado</a>.

Lo que hacemos con HTML es decirle al navegador qué queremos que se muestre en nuestra página web: texto, imágenes, listas, y otros contenidos.

También sirve para estructurar una página.

Por ejemplo, si leemos un artículo en un blog, tendremos un título, párrafos, subtítulos, imágenes, listas, e incluso videos.

Todo eso se hace con HTML.

## Primera página web con HTML

Si bien HTML no es un lenguaje complicado, es verdad que es muy difícil imaginarse cómo es hacer páginas web con HTML hasta que realmente lo hacemos.

Para eso solamente necesitamos un <a href="https://es.wikipedia.org/wiki/Editor_de_texto" target="_blank">editor de texto</a> y un navegador. 

Si estás leyendo esto significa que ya tienes un navegador, y si no sabes lo que es un editor de texto, descarga <a href="https://code.visualstudio.com/Download" target="_blank">Visual Studio Code</a> o <a href="https://www.sublimetext.com/3" target="_blank">Sublime Text 3</a>. Los dos son excelentes.

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-visual-studio-code.png' | url }}" 
        alt="Visual Studio Code" 
        title="Visual Studio Code"
    >
    <figcaption>
        Visual Studio Code
    </figcaption>
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-sublime-text-3.png' | url }}" 
        alt="Sublime Text 3" 
        title="Sublime Text 3"
    >
    <figcaption>
        Sublime Text 3
    </figcaption>
</figure>

Cuando hayas instalado tu editor de texto, ábrelo, ubica la opción `Archivo` o `File` en la esquina superior izquierda, haz click ahí, ubica `Nuevo Documento` o `New File` y haz click ahí.

Te aparecerá un nuevo archivo en blanco, y una pestaña que dice `untitled-1` o algo similar.

Para que el editor de texto y el navegador sepan que estamos hablando en HTML tenemos que darle un nombre a nuestro archivo.

Presiona las teclas `ctrl + s` (o `cmd + s` en Mac), o haz click en `archivo (file) -> guardar (save)` y podrás elegir en donde quieres guardar el archivo y darle un nombre.

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-guardar-documento-1.png' | url }}" 
        alt="Guardar documento en la computadora 1" 
        title="Guardar documento en la computadora 1"
    >
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-guardar-documento-2.png' | url }}" 
        alt="Guardar documento en la computadora 2" 
        title="Guardar documento en la computadora 2"
    >
</figure>

Puedes guardarlo donde prefieras, pero es buena idea que crees una carpeta para este tutorial, para que tengas todos los archivos que creemos guardados en un lugar fácil de encontrar.

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-guardar-documento-3.png' | url }}" 
        alt="Guardar documento en la computadora 3" 
        title="Guardar documento en la computadora 3"
    >
</figure>

**El nombre que le vas a dar al archivo es importante**.

Las personas mayormente usan la computadora para crear documentos de Word, Excel o Power Point; y les dan nombres como "Ensayo historia contemporanea", "Balance mi tienda Noviembre" o "Presentacion para lengua y literatura poesía".

Cuando se trata de crear archivos que escribamos en un lenguaje de computadoras como HTML, es importante seguir ciertas reglas:

* Escribe todo en minúsculas
* No uses espacios. Si quieres separar las palabras, usa guiones (-)
* No uses signos de puntuación como tildes, comas (,) o puntos (.)

La última regla tiene una pequeña mentira. Sí podemos usar puntos, pero solo los usaremos al final del nombre que decidamos ponerle, y seguido de la extension del lenguaje que estemos usando.

En este caso, la extensión es `.html`.

Como este es nuestro primer programa, vamos a seguir la tradición y llamarlo `hola-mundo.html`.

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-guardar-documento-4.png' | url }}" 
        alt="Guardar documento en la computadora 4" 
        title="Guardar documento en la computadora 4"
    >
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-guardar-documento-5.png' | url }}" 
        alt="Guardar documento en la computadora 5" 
        title="Guardar documento en la computadora 5"
    >
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-guardar-documento-6.png' | url }}" 
        alt="Guardar documento en la computadora 6" 
        title="Guardar documento en la computadora 6"
    >
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-guardar-documento-7.png' | url }}" 
        alt="Guardar documento en la computadora 7" 
        title="Guardar documento en la computadora 7"
    >
</figure>

Ahora nuestro editor de texto sabe que estamos escribiendo HTML. Ya podemos crear nuestra primera página web.

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-guardar-documento-8.png' | url }}" 
        alt="Guardar documento en la computadora 8" 
        title="Guardar documento en la computadora 8"
    >
</figure>

En el editor de texto, escribe "Hola mundo!" (sin las comillas).

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-escribir-html-1.png' | url }}" 
        alt="Escribir HTML 1" 
        title="Escribir HTML 1"
    >
</figure>

Deberías tener algo como esto:

``` html
Hola mundo!
```

Guarda el documento con `ctrl + s` o haciendo click en `archivo -> guardar`.

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-escribir-html-2.png' | url }}" 
        alt="Escribir HTML 2" 
        title="Escribir HTML 2"
    >
</figure>

En tu computadora, busca la carpeta en la que guardaste el archivo `hola-mundo.html`. Cuando lo consigas haz click derecho sobre el archivo, coloca el cursor sobre `abrir con` y elige tu navegador favorito.

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-abrir-documento-html-1.png' | url }}" 
        alt="Abrir documento HTML 1" 
        title="Abrir documento HTML 1"
    >
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-abrir-documento-html-2.png' | url }}" 
        alt="Abrir documento HTML 2" 
        title="Abrir documento HTML 2"
    >
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-abrir-documento-html-3.png' | url }}" 
        alt="Abrir documento HTML 3" 
        title="Abrir documento HTML 3"
    >
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-abrir-documento-html-4.png' | url }}" 
        alt="Abrir documento HTML 4" 
        title="Abrir documento HTML 4"
    >
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-abrir-documento-html-5.png' | url }}" 
        alt="Abrir documento HTML 5" 
        title="Abrir documento HTML 5"
    >
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-abrir-documento-html-6.png' | url }}" 
        alt="Abrir documento HTML 6" 
        title="Abrir documento HTML 6"
    >
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-abrir-documento-html-7.png' | url }}" 
        alt="Abrir documento HTML 7" 
        title="Abrir documento HTML 7"
    >
</figure>

¿Viste eso? Acabas de crear tu primera página web.

¡Felicitaciones! 🥳

Vamos a extender nuestra primera página web para mostrar otro texto debajo de "Hola mundo!".

## Extendiendo tu primera página web

Abre el archivo `hola-mundo.html`, ubica el cursor al final de la línea en la que escribiste "Hola mundo!" y presiona la tecla `enter` dos veces para hacer dos saltos de línea.

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-editor-de-texto-salto-de-linea-1.png' | url }}" 
        alt="Editor de texto salto de linea 1" 
        title="Editor de texto salto de linea 1"
    >
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-editor-de-texto-salto-de-linea-2.png' | url }}" 
        alt="Editor de texto salto de linea 2" 
        title="Editor de texto salto de linea 2"
    >
</figure>

Si ves a la izquierda en tu editor de texto deberías estar en la línea 3.

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-editor-de-texto-salto-de-linea-3.png' | url }}" 
        alt="Editor de texto salto de linea 3" 
        title="Editor de texto salto de linea 3"
    >
</figure>

Ahora escribe cualquier cosa, como "Adios mundo!" sin las comillas.

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-nueva-linea-de-texto.png' | url }}" 
        alt="Nueva linea de texto" 
        title="Nueva linea de texto"
    >
</figure>

Tu documento debería verse así:

``` html
Hola mundo!

Adios mundo!
```

Igual que la primera vez, guarda los cambios con `ctrl + s` o haciendo click en `archivo -> guardar` y ubica el archivo `hola-mundo.html` en la carpeta donde lo guardaste, haz click derecho, ubica el cursor sobre `abrir con` y elige el navegador que prefieras.

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-guardar-documento-2-1.png' | url }}" 
        alt="Guardar documento HTML 1" 
        title="Guardar documento HTML 1"
    >
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-guardar-documento-2-2.png' | url }}" 
        alt="Guardar documento HTML 2" 
        title="Guardar documento HTML 2"
    >
</figure>

<figure>
    <img 
        src="{{ '../imagenes/aprende-desarrollo-web-desde-cero-html-parte-1/aprende-html-desde-cero-parte-1-documento-html-en-el-navegador-2.png' | url }}" 
        alt="hola-mundo.html en el navegador" 
        title="hola-mundo.html en el navegador"
    >
</figure>

¿Qué fue eso? 💩

El nuevo texto se ve, pero está justo al lado de "Hola mundo!" y no en su propia línea. Eso no era lo que queríamos.

## Conclusión

HTML no es un lenguaje muy estricto. Solo basta con escribir cualquier cosa para que te lo muestre en el 
navegador.

¿Pero qué pasa si queremos que un texto aparezca en una nueva línea? ¿Y si queremos que un texto sea más grande, o queremos una imagen, o una lista?

Para eso HTML cuenta con *etiquetas* o *tags* que nos permiten decirle al navegador cómo queremos que se vea nuestra página web, y eso es lo que vamos a aprender en la siguiente parte.

Puedes tomarte un descanso para procesar todo lo que aprendiste 🧠✨ en esta parte y volver, o [ir directamente a la segunda parte](/tutoriales/aprende-desarrollo-web-desde-cero-html-parte-2).