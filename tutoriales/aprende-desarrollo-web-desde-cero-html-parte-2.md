---
titulo: Aprende desarrollo web desde cero - HTML (Parte 2)
fecha: 2020-12-01
---
<!-- Excerpt inicio -->
En la primera parte creamos nuestra primera página web con HTML, pero solo pudimos mostrar texto en la misma línea a pesar de que estábamos agregando saltos de línea en el editor de texto.

Cuando comenzamos a aprender HTML, muchos venimos acostumbrados a que para crear un nuevo párrafo en un procesador de texto como Microsoft Word presionamos la tecla `enter`.
<!-- Excerpt fin -->

En un editor de texto como Visual Studio Code o Sublime Text 3, presionar la tecla `enter` agregará un salto de línea en nuestro documento, pero este no se va a ver en nuestra página web.

Para conseguir lo que queremos, debemos usar algo llamado etiquetas o tags.

## Las etiquetas de HTML

Hasta el momento, la única diferencia entre nuestro documento `hola-mundo.html` y un documento creado en Word es que el nombre lleva la extensión `.html` al final, pero lo que contiene no es muy diferente a cualquier texto escrito en español.

Lo que hace que al apenas darle un vistazo a un documento de HTML sepamos que está escrito en HTML, y lo que hace que las páginas web se vean como queremos, son las etiquetas o tags de HTML.

Las etiquetas son las que nos permiten organizar el contenido de una página web como queremos, y decirle al navegador qué es lo que queremos que se vea en la página web: títulos, párrafos, listas, imágenes, videos, botones, y otros.

Las etiquetas en HTML se ven así:

``` html
<p>Esto es una etiqueta de HTML</p>
```

¿Puedes identificar cuál es la etiqueta?

El texto “Esto es una etiqueta de HTML” es un texto normal, pero está rodeado de `<p>` al inicio y `</p>` al final.

Todas las etiquetas de HTML comienzan con un signo `<` o “menor que”, el nombre de la etiqueta, en este caso p de paragraph (párrafo en inglés) y un signo `>` o “mayor que”, y terminan con lo mismo, pero entre el < y el nombre de la etiqueta llevan un `/` o slash.

Es decir que para crear un párrafo tenemos que escribir `<p>`, luego escribimos todo el texto que queremos que este en el párrafo, y luego escribimos `</p>` para cerrar el párrafo.

Al principio puede ser confuso.

Esto es normal, y a medida que vayas escribiendo más etiquetas va a tener cada vez más sentido, así que es mejor comenzar de una vez.

## Agregando párrafos a tu primera página web

Abre el documento `hola-mundo.html` que creamos en la primera parte en el editor de texto que prefieras.
Tu documento debe verse como este:

*Imagen de mi hola-mundo.html*

Ahora que sabes más sobre etiquetas de HTML, y aprendiste sobre la etiqueta `<p>` o párrafo, vamos a convertir la primera línea de nuestra página en un párrafo.

Mueve el cursor al principio de la primera línea que escribiste. En mi caso dice “Hola mundo!”, por lo que quiero que el cursor quede justo antes de la H.

*Imagen de eso*

Escribe `<p>` al principio de la primera línea.

Recuerda que los caracteres usados son el `<` o “menor que”, la letra `p` minúscula y el `>` o “mayor que”.

La primera línea de `hola-mundo.html` debe verse así:

``` html
<p>Hola mundo!
```

Para que el navegador entienda que la primera línea es un párrafo, tenemos que usar HTML para decirle donde termina ese párrafo. Para eso cerramos el párrafo con `</p>`.

La única diferencia entre `<p>` y `</p>` es el `/` entre `<` y `p`.

La primera línea de `hola-mundo.html` debe verse así:

``` html
<p>Hola mundo!</p>
```

Ya es momento de ver el resultado en el navegador.

Guarda los cambios que agregamos a `hola-mundo.html` presionando `ctrl + s` o en `archivo -> guardar`, busca el documento donde lo guardaste la primera vez y cuando lo encuentres haz click derecho, ubica el cursor sobre abrir con y escoge tu navegador preferido.

Viste eso⁉ El texto se ve como queríamos.

¡Felicitaciones! 🥳

Acabas de usar una etiqueta de HTML por primera vez para convertir un texto en un párrafo y que apareciera en su propia línea.

## Practicando con las etiquetas de HTML

Si miras `hola-mundo.html` en tu editor de texto, verás que ahora lo que ves allí se refleja en el navegador.

El texto rodeado por las etiquetas `<p>` y `</p>` está en su propia línea, la segunda línea está vacía y en la tercera está el otro texto en su propia línea.

En tu editor de texto, ubica el cursor en la segunda línea que está vacía y elimínala presionando la tecla de `borrar` o `backspace` que está arriba de `enter` en tu teclado.

Tu documento debería verse así:

``` html
<p>Hola mundo!</p>
Adios mundo!
```

*Imagen de eso*

Ahora regresa al navegador y refresca tu página web.

Que raro, se ve igual 🤔

Tal vez sea porque el texto “Adios mundo!” sigue estando en su propia línea.

En tu editor de texto, ubica el cursor al principio de la segunda línea, justo antes de la letra A.

Cuando lo tengas allí, presiona la tecla de `borrar` o `backspace` una vez y tu documento se debería ver así:

``` html
<p>Hola mundo!</p>Adios mundo!
```

Si quieres puedes agregar un espacio entre `</p>` y Adios y se verá así:

``` html
<p>Hola mundo!</p> Adios mundo!
```

Ahora sí debería verse distinto.

Guarda los cambios de `hola-mundo.html`, regresa al navegador y refresca la página.

¿Lo mismo? 😓

En la primera parte dijimos que HTML no es un lenguaje muy estricto, porque nos va a mostrar lo que le pasemos en el navegador.

Pero para que lo que le pasemos se vea como queremos, no basta con agregar espacios y saltos de línea en el navegador.

**Para eso necesitamos las etiquetas.**

En tu editor de texto, regresa tu documento a como estaba hace unos instantes, con `<p>Hola mundo!</p>` en la primera línea, la segunda línea sola, y `Adios mundo!` en la tercera línea.

Puedes revertir los cambios hechos en un documento presionando `ctrl + z` (`cmd + z` en Mac) varias veces, y si fuiste muy atrás, puedes volver hacia adelante con `ctrl + y` (`cmd + y` en Mac).

``` html
<p>Hola mundo!</p>

Adios mundo!
```

*Imagen del documento*

En la primera línea, elimina la etiqueta `</p>` al final o córtala para que quede copiada y la quites al mismo tiempo.

Tu documento debería verse así:

``` html
<p>Hola mundo!

Adios mundo!
```

*Foto deso*

Ubica el cursor al final de tercera línea, después del Adios mundo! y escribe o pega la `</p>` que quitaste de la primera línea.

Deberías tener algo como esto:

``` html
<p>Hola mundo!

Adios mundo!</p>
```

*Foto daquello*

Guarda los cambios de `hola-mundo.html`, luego ve al navegador y refresca la página para ver el resultado.

*Imagen deso*

¿En serio? 💩

Tranquila/o, esto es algo muy bueno, aunque ahora parezca que terminamos exactamente donde comenzamos.

## Conclusión

Si solo escribes texto en un documento de HTML, es probable que nunca logres que tus páginas webs se vean como quieres.

Para eso existen las etiquetas o tags, que nos permiten estructurar nuestras páginas web de forma coherente, y que le dicen al navegador cómo debe mostrar el contenido de nuestras páginas web.

Las etiquetas de HTML comienzan con el signo `<` o “menor que”, el nombre de la etiqueta, y un signo `>` o “mayor que”. Por ejemplo: `<p>`.

Seguido de la etiqueta que abre, se escribe todo el texto que queramos que sea parte de esa etiqueta.

``` html
<p>Este texto es un párrafo!
```

Cuando todo el contenido que va en la etiqueta está listo, se cierra con el signo `<` o “menor que”, un `/` o slash, el nombre de la etiqueta y un `>` o “mayor que”. Por ejemplo: `</p>`.

``` html
<p>Este texto es un párrafo!</p>
```

Para que el texto en nuestras páginas webs aparezca en la línea que le corresponde, podemos usar la etiqueta párrafo o paragraph `<p></p>` para organizar el contenido en párrafos que se muestran en su propia línea.

Uf, aprendiste mucho en esta parte 🥵

Puedes tomarte un descanso para procesar todo lo que aprendiste 🧠✨, revisar la primera parte o esta si tienes dudas, o [ir directo a la tercera parte](#) para aprender más sobre las etiquetas de HTML.
