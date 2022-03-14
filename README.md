# Excuse Generator con JS HTML5 & CSS3

Creando una landing page que genera automaticamente una excusa con cada onload.

### Pre-requisitos 📋

1. Ordenador o dispositivo movil.
2. Programa donde copiar el repositorio. (Gitpod, VisualStudioCode, Pycharm ....)
3. Navegador web donde visualizar el resultado del codigo.


## Construido con 🛠️

* [HTML5] - Base del Front-end
* [CSS3]
* [Javascript](https://www.javascript.com/) - Usado para generar interactividad.
* [Bootstrap v5.1.3](https://getbootstrap.com/) - Libreria para el diseño del HTML


## Estructura y explicación del codigo ⚙️

* Landing page en HTML5, al caragr la pagina aparece una frase y debajo de la misma una excusa la cual es aleatoria y se genera con cada recarga de la pagina.
* NO se utiliza el documento CSS, este solo existe de apoyo para el proyecto.
* El JS consta de 4 Arrays con varios string cada uno en su interior. Posteriormente existe una funcion llamada rannumber la cual simplemente extrae un indice aleatorio de un array dado. La funcion excuses utiliza el anterior rannumber para extraer un string aleatorio de cada array dado y guardarlo en una variable. Al final se retorna un string que incluye todas las variables generadas.
* Finalmente con windows.onload colocamos la funcion excuses en el id del HTML que mostrara la excusa generado aleatoriamente.


## Autor ✒️

* **Jose Luis Gil** - *Ejercicio completo* - [JoseLike](https://github.com/JoseLike)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/JoseLike/excuse-generator/contributors) quíenes han participado en este proyecto. 