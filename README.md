# front_tajamar_2018
Ejercicios del curso de aplicaciones web 2018
Tajamar 2018 2 parte
** clase 
Conceptos
- navegadores
- visual studio code
- git

UI, UX, IXD: ¿CUÁL ES LA DIFERENCIA?
====================================
Diseño de Interfaces (UI), Experiencia de Usuario (UX) y Diseño de Interacción (IxD) se suelen usar indistintamente. Pero no solamente no son sinónimos, sino que cada uno implica un proceso y un foco diferente.

Experiencia de Usuario (User eXperience - UX)
=============================================
- La experiencia de usuario se aproxima al concepto de usabilidad

-   Usabilidad
    ==========
    El grado en que un producto puede ser utilizado por los usuarios para lograr sus propósitos con 
    # efectividad, 
    # eficiencia y 
    # satisfacción
    en un determinado 
    # contexto 
    de uso.

-   Usabilidad Web
    ==============
    # Anticipación
    # Autonomía
    # Consistencia
    # Reversibilidad
    # Aprendizaje
    # Aspecto y Legibilidad

Planos de la UX
===============
- Estrategia: Define los objetivos del sitio & usuarios, hace investigación (entrevistas, grupos focales), crea personas.
- Alcance o Contexto: Decide las características funcionales y de contenido, crea las historias de usuario y escenarios de uso.
- Estructura: Desarrolla la estructura del sitio, arquitectura de información, usa el “Card Sorting” y las historias de usuario. Crea el mapa del sitio.
- Esqueleto: Prototipos o “wireframes”, navegación, ubicación de fotografías, texto, botones, etc.
- Superficie: Diseño visual, concepto, colores, tablas de ánimo (mood boards), etc.

Etapas del diseño web
=====================
   - Planificación
   - Diseño
   - Codificación
   - Pruebas / Despliegue
   - Mantenimiento



<!-- Accesibilidad  -->
Accesibilidad
=============
Posibilidad de que un sitio Web pueda ser visitado y utilizado de forma satisfactoria por el mayor  número posible de personas, independientemente de las  limitaciones personales que tengan o de las derivadas de su entorno

Accesibilidad Web: WAI
======================
- Facilicitar el acceso a las personas con discapacidad
- Niveles de accesibilidad
    Prioridad 1: son aquellos puntos que un desarrollador Web tiene que cumplir ya que, de otra manera, ciertos grupos de usuarios no podrían acceder a la información del sitio Web.
    Prioridad 2: son aquellos puntos que un desarrollador Web debería cumplir ya que, si no fuese así, sería muy difícil acceder a la información para ciertos grupos de usuarios.
    Prioridad 3: son aquellos puntos que un desarrollador Web debería cumplir ya que, de otra forma, algunos usuarios experimentarían ciertas dificultades para acceder a la información. 

- Pautas de accesibilidad al Contenido en la Web (WCAG)
    WCAG consiste en 14 pautas
    Todos los elementos visuales, imágenes o animaciones, deben contar con una descripción de su función.

- Elementos de accesibilidad
   - Elegir un DOCTYPE
   - Identificar el idioma
   - Construir títulos de página significativos
   - Ayuda de navegación adicionales
   - Presentar inicialmente el contenido principal 
   - ‘Saltar’ sobre los vínculos de navegación 
   - Usar colores de manera segura en los vínculos
   - Evitar la dependencia de los scripts (esto da lugar a la técnica de diseño conocida como mejora progresiva)
   - Añadir títulos a los vínculos
   - Definir accesos directos desde el teclado (atributo accesskey)
   - No abrir ventanas nuevas (debe ser una opción del usuario y no un opción del diseño)
   - Definir abreviaturas y acrónimos (etiqueta <abbr>)
   - Marcar correctamente las cabeceras de las tablas.
   - Texto alternativo en cada imagen (especificado en el atributo alt de la etiqueta <img>)
   - Proveer texto equivalente para los mapas de imagenes
   - Usar tamaños de fuentes relativos (generalmente en ems)
   - Encabezados reales (<h1>, <h2>, <h3>...>)
   - Elementos de los formularios definidos correctamente (la etiqueta <label> permite asociar)
   - Declaración de accesibilidad de un sitio web.
   - https://www.aenor.es/aenor/avisos/avisos/accesibilidad.asp
   
Los aspectos más significativos de accesibilidad y usabilidad de la web son:

* Separación entre contenido y presentación, pueden leerse todos los contenidos si se desactivan las hojas de estilo.
* Multinavegador, se visualiza correctamente en las últimas versiones de los navegadores más habituales como Microsoft Internet Explorer (excepto versión 6 obsoleta),       Netscape, Mozilla Firefox, Safari y Google Chrome.
* Se añaden alternativas textuales al contenido no textual.
* Cuidada estructura y presentación, se ha utilizado el marcado estructural y semántico adecuado para la información y las relaciones existentes entre el contenido.
* Incluye teclas de acceso rápido en todas las páginas para dirigirse a las opciones importantes del menú y de la portada:
    - Home, tecla 0
    - Contacto, tecla 1
    - Acceso a clientes, tecla 2
    - Aenor, tecla 3
    - Normalización, tecla 4
    - Certificación, tecla 5
    - Ensayos, tecla 6
    - Formación, tecla 7
    - Cooperación, tecla 8
    - Software, tecla 9
    (El uso de las teclas de acceso viene condicionado por el navegador. En Internet Explorer: ALT + atajo + ENTER. En Firefox: ALT + MAYÚSCULAS + atajo. En Chrome: ALT+ atajo. En Opera: MAYÚSCULAS + ESC + atajo.)

* Mejora de la navegabilidad, menú de navegación visible en todas las páginas, camino de migas y mapa del web.
* El tamaño del texto está definido en unidades relativas para que pueda ampliarse o reducirse por el usuario. El texto se puede redimensionar de forma que pueda ser leído por personas con problemas de visión. Utilice CTRL+ ó CTRL-
* Se han identificado los acrónimos y abreviaturas.
* Todos los enlaces están identificados y ofrecen detalles de la función o destino. Se identifican los formatos de los archivos que son descargables, como PDF´s.
* Se avisa al usuario de las aperturas de nuevas ventanas.
* Cuando los hipervínculos son hacia webs externas se han identificado mediante un icono de bola del mundo y en su texto alternativo se advierte de ello.

* Excepciones
    - Los contenidos dispuestos para ampliar información con formatos distintos de HTML como PDF, en su mayoría, no incorporan características de accesibilidad. AENOR se compromete a proporcionar estos documentos en formato accesible a quien lo solicite mediante nuestro formulario de contacto.

Planteamiento WAI - ARIA
========================
- Roles, estados y propiedades
- La relación de ARIA, HTML5 y CSS3
- Navegación mediante el teclado a través del atributo tabindex.
- Accesibilidad en los formularios
- Accesibilidad en actualizaciones dinámicas de contenido (AJAX)
- Implementando ARIA (validar los documentos es esencial)


