<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprendiendo Python</title>
    <script src="encuesta.js"></script>
    <!-- Enlace a la fuente Roboto de Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <header>
        <h1>Aprendiendo Python</h1>
        <p>Un viaje hacia el dominio del lenguaje de programación más versátil.</p>
        <img src="https://external-preview.redd.it/python-3-13-alpha-1-contains-breaking-changes-whats-the-v0-K7kglaI0lcL-KZ64RqMp7GCzwszsBnlB0GPlobF1wXw.jpg?auto=webp&s=a78be10cc0071bd5f4034f14086c52c4ccbcc278" width="150" height="150" alt="Logo de Python">
    </header>

    <nav>
        <ul>
            <li><a href="python.htm" onclick="mostrarSeccion('introduccion-a-python')">Introducción a Python</a></li>
            <li><a href="#" onclick="mostrarSeccion('caracteristicas')">Características</a></li>
            <li><a href="#" onclick="mostrarSeccion('historia')">Historia de Python</a></li>
            <li><a href="#" onclick="mostrarSeccion('ejemplo-python')">Ejemplo de Python</a></li>
            <li><a href="#" onclick="mostrarSeccion('encuesta')">formulario</a></li>
            <li class="dropdown">
                <a href="#" onclick="toggleMoreDropdown(event)" class="dropdown-toggle">Más <span class="arrow-icon"></span></a>
                <ul class="dropdown-content">
                    <li><a href="ventajas y desventajas.html">Ventajas y Desventajas</a></li>
                </ul>
            </li>
           
        </ul>
    </nav>

    <main>
        <section id="introduccion-a-python" class="active">
            <center>
                <h2>Introducción a Python</h2>
            </center>
            <p> Python es un lenguaje de programación de alto nivel, interpretado y de propósito general, conocido por su sintaxis clara y legible, lo que lo hace ideal para principiantes y profesionales. Creado por Guido van Rossum en 1991, Python se utiliza en una amplia variedad de aplicaciones, como desarrollo web, análisis de datos, inteligencia artificial, automatización, y más.</p>
            <p> Aquí hay algunas de las razones por las que Python es tan apreciado y dónde se utiliza:</p>
            <ul>
                <li>Fácil de aprender y usar: Su sintaxis se asemeja al lenguaje natural, lo que facilita su lectura y escritura. No necesitas escribir mucho código para realizar tareas complejas.</li>
                <li>Versatilidad (Propósito General): Puedes usar Python para una amplia variedad de aplicaciones, desde desarrollo web hasta inteligencia artificial.</li>
                <li>Gran comunidad y ecosistema: Hay una enorme comunidad de desarrolladores de Python en todo el mundo, lo que significa que encontrarás muchos recursos, tutoriales y librerías disponibles.</li>
                <li>Multiplataforma: Python se ejecuta en diferentes sistemas operativos como Windows, macOS y Linux. </li>
                <li>Numerosas librerías y frameworks: Python cuenta con una vasta colección de módulos y librerías preconstruidas que te permiten realizar tareas específicas sin tener que empezar desde cero.</li>
            </ul>
        </section>

        <section id="caracteristicas">
            <center>
                <h2>Características de Python</h2>
            </center>
            <ul>
                <li><h4>Lenguaje interpretado:</h4></li> 
                <p>El código Python se ejecuta línea por línea por un intérprete, lo que facilita la depuración y permite una ejecución interactiva.</p>
                <li><h4>Lenguaje de alto nivel:</h4></li>
                <p>Python abstrae detalles de bajo nivel como la gestión de memoria, lo que permite a los desarrolladores enfocarse en la lógica del programa.</p>
                <li><h4>Sintaxis clara y legible:</h4></li>
                <p>Python utiliza una sintaxis similar al inglés, con sangría para definir bloques de código, lo que mejora la legibilidad y reduce la probabilidad de errores.</p>
                <li><h4>Tipado dinámico:</h4></li>
                <p>No es necesario declarar el tipo de variable explícitamente; Python determina el tipo en tiempo de ejecución.</p>
                <li><h4>Orientado a objetos:</h4></li>
                <p>Python considera todo como objetos, lo que facilita la organización y reutilización del código.</p>
                <li><h4>Multip aradigma:</h4></li>
                <p>Python soporta múltiples estilos de programación, incluyendo la programación orientada a objetos, estructurada y funcional.</p>
                <li><h4>Gran cantidad de bibliotecas y frameworks:</h4></li>
                <p>Python cuenta con una extensa colección de bibliotecas y frameworks para diversas áreas, como desarrollo web (Django, Flask), ciencia de datos (Pandas, NumPy, Matplotlib), aprendizaje automático (TensorFlow, Keras, Scikit-learn) e inteligencia artificial.</p>
                <li><h4>Multiplataforma:</h4></li>
                <p>El código Python puede ejecutarse en diferentes sistemas operativos sin necesidad de modificaciones significativas.</p>
                <li><h4>Gestión automática de memoria:</h4></li>
                <p>Python incluye un recolector de basura que se encarga de la asignación y liberación de memoria, simplificando la gestión de recursos.</p>
            </ul>
        </section>

        <section id="historia">
            <center>
                <h2>Historia de Python</h2>
            </center>
            
            <div class="carousel-container">
                <div class="carousel-slides" id="carouselSlides">
                    <div class="carousel-slide">
                        <img src="https://placehold.co/600x280/a0aec0/ffffff?text=Guido+van+Rossum" alt="Guido van Rossum, creador de Python">
                        <p class="caption">Guido van Rossum, el creador de Python, en sus primeros años.</p>
                        <p class="paragraph">
                            Python fue concebido a finales de los años 80 por Guido van Rossum en el Centro de Investigación de Matemáticas e Informática (CWI) en los Países Bajos. Su objetivo era crear un nuevo lenguaje de scripting que fuera sucesor del lenguaje ABC y capaz de manejar excepciones y de interactuar con el sistema operativo Amoeba.
                        </p>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://placehold.co/600x280/90cdf4/ffffff?text=Logo+Python+Antiguo" alt="Antiguo logo de Python">
                        <p class="caption">Una representación del primer logo o icono de Python.</p>
                        <p class="paragraph">
                            Python 1.0 fue lanzado en enero de 1994. Incluía características como la programación funcional (<code>lambda</code>, <code>map</code>, <code>filter</code>, <code>reduce</code>) y un sistema de módulos. A lo largo de los años 90, Python ganó popularidad y se lanzaron varias versiones menores.
                        </p>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://placehold.co/600x280/63b3ed/ffffff?text=Logo+Python+Actual" alt="Logo actual de Python">
                        <p class="caption">El logo moderno de Python, reconocido globalmente.</p>
                        <p class="paragraph">
                            Python 2.0, lanzado en octubre de 2000, fue un hito importante. Introdujo características clave como la comprensión de listas (list comprehensions) y un sistema de recolección de basura con detección de ciclos. Esta versión se convirtió en la base para un crecimiento significativo del lenguaje.
                        </p>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://placehold.co/600x280/4299e1/ffffff?text=Transicion+Python+3" alt="Representación de la transición a Python 3">
                        <p class="caption">El desafío de la transición de Python 2 a Python 3.</p>
                        <p class="paragraph">
                            Python 3.0 (también conocido como "Py3k"), lanzado en diciembre de 2008, fue una revisión importante del lenguaje que no era totalmente compatible con versiones anteriores de Python 2.x. Su objetivo era corregir fallos de diseño fundamentales y limpiar el lenguaje. La transición fue un proceso largo, pero Python 3 es ahora el estándar.
                        </p>
                    </div>
                    <div class="carousel-slide">
                        <img src="https://placehold.co/600x280/2b6cb0/ffffff?text=Comunidad+Python" alt="La comunidad global de Python">
                        <p class="caption">La vibrante y diversa comunidad global de Python.</p>
                        <p class="paragraph">
                            Actualmente, Python es uno de los lenguajes de programación más populares del mundo, utilizado en una amplia gama de campos como el desarrollo web (Django, Flask), la ciencia de datos (NumPy, Pandas), el aprendizaje automático (TensorFlow, PyTorch), la automatización, la inteligencia artificial y mucho más.
                        </p>
                    </div>
                </div>
                <button class="carousel-button prev" onclick="moveSlide(-1)">&#10094;</button>
                <button class="carousel-button next" onclick="moveSlide(1)">&#10095;</button>
                <div class="carousel-dots" id="carouselDots"></div>
            </div>
        </section>

        <section id="ejemplo-python">
            <center>
                <h2>Ejemplo de Python</h2>
            </center>
                <div class="mb-8 p-4 bg-gray-50 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-2 text-gray-700">1. Calculadora de suma</h3>
                    <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
                        <code class="language-python">
                            # Solicita dos números al usuario y muestra la suma
                            num1 = int(input("Ingresa el primer número: "))
                            num2 = int(input("Ingresa el segundo número: "))
                            
                            suma = num1 + num2
                            print("La suma es:", suma)
                        </code>
                    </pre>
                    <p class="mt-2 text-gray-600">Pide al usuario dos números y muestra la suma en pantalla.</p>
                </div>

                <div class="mb-8 p-4 bg-gray-50 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-2 text-gray-700">2. Contador del 1 al 10</h3>
                    <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
                        <code class="language-python">
                            # Imprime los números del 1 al 10
                            for i in range(1, 11):
                            print(i)
                        </code>
                    </pre>
                    <p class="mt-2 text-gray-600">Usa un bucle for para mostrar los números del 1 al 10, uno por línea.</p>
                </div>

                <div class="mb-8 p-4 bg-gray-50 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-2 text-gray-700">3. Verificar si una palabra es palíndromo</h3>
                    <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
                        <code class="language-python">
                            # Comprueba si una palabra es palíndromo (se lee igual al revés)
                            palabra = input("Ingresa una palabra: ")
                            if palabra == palabra[::-1]:
                            print("Es un palíndromo")
                            else:
                            print("No es un palíndromo")
                        </code>
                    </pre>
                    <p class="mt-2 text-gray-600">Compara la palabra con su versión invertida. Si son iguales, es un palíndromo (como "oso" o "anilina").</p>
                </div>
        </section>
        <section id="encuesta">
            <h2>Encuesta</h2>
            <!-- Botón con el estilo personalizado -->
            <div class="button" onclick="document.getElementById('formularioEncuesta').style.display='block'; this.style.display='none';">
                <div class="border-line top-line"></div>
                <div class="border-line right-line"></div>
                <div class="border-line bottom-line"></div>
                <div class="border-line left-line"></div>
                <div class="inner1">
                    <div class="tri tl"></div>
                    <div class="tri tr"></div>
                    <div class="tri bl"></div>
                    <div class="tri br"></div>
                    <div class="dot dl"></div>
                    <div class="dot dr"></div>
                    Abrir formulario
                </div>
            </div>
            
            <form id="formularioEncuesta" onsubmit="return enviarEncuesta(event)" style="display:none; margin-top: 20px;">
                <p>1. ¿Qué tipo de lenguaje es Python?</p>
                <label><input type="radio" name="p1" value="Interpretado" required> Interpretado</label>
                <label><input type="radio" name="p1" value="Compilado"> Compilado</label>

                <p>2. ¿Qué instrucción imprime en consola?</p>
                <label><input type="radio" name="p2" value="print()" required> print()</label>
                <label><input type="radio" name="p2" value="echo()"> echo()</label>

                <p>3. ¿Cómo se define una función?</p>
                <label><input type="radio" name="p3" value="def mi_funcion():" required> def mi_funcion():</label>
                <label><input type="radio" name="p3" value="function mi_funcion() {}"> function mi_funcion() {}</label>

                <p>4. ¿Qué estructura guarda múltiples valores?</p>
                <label><input type="radio" name="p4" value="list" required> list</label>
                <label><input type="radio" name="p4" value="int"> int</label>

                <p>5. ¿Cuál es el símbolo para comentarios?</p>
                <label><input type="radio" name="p5" value="# comentario" required> # comentario</label>
                <label><input type="radio" name="p5" value="// comentario"> // comentario</label>

                <p>6. ¿Qué valor booleano representa falso?</p>
                <label><input type="radio" name="p6" value="False" required> False</label>
                <label><input type="radio" name="p6" value="None"> None</label>

                <p>7. ¿Qué biblioteca se usa para ciencia de datos?</p>
                <label><input type="radio" name="p7" value="pandas" required> pandas</label>
                <label><input type="radio" name="p7" value="turtle"> turtle</label>

                <br><br>
                <button type="submit">Enviar formulario</button>
                
            </form>
        </section>
    </main>
    <footer>
        <p> Christopher Velasquez/Lorenzo Calvio/Andres Jacobo - Bachillerato en Desarrollo de Software.&copy;2025  Todos los derechos reservados.</p>
    </footer>
    <!-- Message Box HTML -->
    <div id="messageBox" class="message-box">
        <p id="messageBoxText"></p>
        <button onclick="document.getElementById('messageBox').style.display='none';">Cerrar</button>
    </div>

</body>
</html>


