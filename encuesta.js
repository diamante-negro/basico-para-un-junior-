
        // Mostrar la sección de introducción por defecto al cargar la página
        document.addEventListener('DOMContentLoaded', () => {
            mostrarSeccion('introduccion-a-python');
            initCarousel(); // Inicializar el carrusel cuando el DOM esté cargado
        });

        // Lógica del carrusel de imágenes
        let currentSlide = 0;
        let slides = [];
        let dots = [];

        function initCarousel() {
            slides = document.querySelectorAll('#carouselSlides .carousel-slide');
            const dotsContainer = document.getElementById('carouselDots');
            
            // Crear los puntos de navegación
            slides.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.addEventListener('click', () => showSlide(index));
                dotsContainer.appendChild(dot);
                dots.push(dot);
            });

            showSlide(currentSlide); // Mostrar la primera diapositiva
        }

        function showSlide(index) {
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            const offset = -currentSlide * 100;
            document.getElementById('carouselSlides').style.transform = `translateX(${offset}%)`;

            // Actualizar los puntos activos
            dots.forEach((dot, i) => {
                dot.classList.remove('active');
                if (i === currentSlide) {
                    dot.classList.add('active');
                }
            });
        }

        function moveSlide(direction) {
            showSlide(currentSlide + direction);
        }
       
        // Función para el menú desplegable (aunque el CSS ya lo maneja con hover)
        // Se mantiene para compatibilidad o si se quisiera activar con click
        function toggleMoreDropdown(event) {
            event.preventDefault(); // Evita que el enlace # recargue la página
            const dropdownContent = event.target.closest('.dropdown').querySelector('.dropdown-content');
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        }

        // Cierra el modal si el usuario hace clic fuera de él
        window.onclick = function(event) {
            const modal = document.getElementById('modalPython');
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
       
        // Función para mostrar un mensaje personalizado (reemplazo de alert)
        function showMessage(message) {
            document.getElementById('messageBoxText').innerText = message;
            document.getElementById('messageBox').style.display = 'block';
        }

        // Función para mostrar la sección activa
        function mostrarSeccion(id) {
            const secciones = document.querySelectorAll('main section');
            secciones.forEach(sec => sec.classList.remove('active'));
            document.getElementById(id).classList.add('active');

            // Ocultar el formulario de encuesta y mostrar el botón "Abrir Encuesta" si se cambia de sección
            if (id !== 'encuesta') {
                document.getElementById('formularioEncuesta').style.display = 'none';
                const openSurveyButton = document.querySelector('#encuesta .button');
                if (openSurveyButton) {
                    openSurveyButton.style.display = 'inline-block';
                }
            } else {
                // Si la sección de encuesta se activa, asegúrate de que el botón esté visible si el formulario está oculto
                const form = document.getElementById('formularioEncuesta');
                const openSurveyButton = document.querySelector('#encuesta .button');
                if (form.style.display === 'none' && openSurveyButton.style.display === 'none') {
                    openSurveyButton.style.display = 'inline-block';
                }
            }
        }

        // Función para manejar el envío de la encuesta
        function enviarEncuesta(event) {
            event.preventDefault(); // Evita el envío del formulario por defecto

            const form = document.getElementById('formularioEncuesta');
                const preguntas = [
    { name: 'p1', correctAnswer: 'Interpretado', question: '¿Qué tipo de lenguaje es Python?' },
    { name: 'p2', correctAnswer: 'print()', question: '¿Qué instrucción imprime en consola?' },
    { name: 'p3', correctAnswer: 'def mi_funcion():', question: '¿Cómo se define una función?' },
    { name: 'p4', correctAnswer: 'list', question: '¿Qué estructura guarda múltiples valores?' },
    { name: 'p5', correctAnswer: '# comentario', question: '¿Cuál es el símbolo para comentarios?' },
    { name: 'p6', correctAnswer: 'False', question: '¿Qué valor booleano representa falso?' },
    { name: 'p7', correctAnswer: 'pandas', question: '¿Qué biblioteca se usa para ciencia de datos?' },
    // Nuevas preguntas
    { name: 'p8', correctAnswer: 'append()', question: '¿Cuál es el método para agregar un elemento al final de una lista en Python?' },
    { name: 'p9', correctAnswer: '"', question: '¿Qué símbolo se usa para definir una cadena de texto en Python?' },
    { name: 'p10', correctAnswer: 'if', question: '¿Cómo se llama la estructura condicional en Python?' },
    { name: 'p11', correctAnswer: 'len()', question: '¿Cuál es la función para obtener la longitud de una lista?' },
    { name: 'p12', correctAnswer: 'for', question: '¿Qué comando se usa para repetir un bloque en Python?' },
    { name: 'p13', correctAnswer: '.py', question: '¿Cuál es la extensión estándar de archivos Python?' },
    { name: 'p14', correctAnswer: 'int()', question: '¿Qué función se usa para convertir un string a entero?' },
    { name: 'p15', correctAnswer: 'class', question: '¿Qué palabra clave se usa para definir una clase en Python?' }
];

            let correctas = 0;
            let todasRespondidas = true;
            let preguntasIncorrectas = [];

            preguntas.forEach((pregunta, index) => {
                const radios = form.elements[pregunta.name];
                let respuestaSeleccionada = null;
                for (let i = 0; i < radios.length; i++) {
                    if (radios[i].checked) {
                        respuestaSeleccionada = radios[i].value;
                        break;
                    }
                }

                if (respuestaSeleccionada === null) {
                    todasRespondidas = false;
                } else if (respuestaSeleccionada === pregunta.correctAnswer) {
                    correctas++;
                } else {
                    // Agregar pregunta incorrecta a la lista
                    preguntasIncorrectas.push({
                        numero: index + 1,
                        pregunta: pregunta.question,
                        respuestaUsuario: respuestaSeleccionada,
                        respuestaCorrecta: pregunta.correctAnswer
                    });
                }
            });

            if (!todasRespondidas) {
                showMessage('Por favor, responde todas las preguntas antes de enviar.');
                return false;
            }

            // Mostrar resultados detallados
            mostrarResultadosDetallados(correctas, preguntas.length, preguntasIncorrectas);

            return false; // Previene el envío real del formulario
        }

        // Nueva función para mostrar resultados detallados
        function mostrarResultadosDetallados(correctas, totalPreguntas, preguntasIncorrectas) {
            // Ocultar el formulario
            document.getElementById('formularioEncuesta').style.display = 'none';
            
            // Calcular porcentaje
            const porcentaje = Math.round((correctas / totalPreguntas) * 100);
            
            // Crear contenido de resultados
            let resultadosHTML = `
                <div id="resultadosExamen" style="background-color: #f0f0f0; padding: 20px; border-radius: 8px; margin-top: 20px;">
                    <h3 style="color: #2c3e50; margin-bottom: 20px;">Resultados del Examen</h3>
                    
                    <div style="padding: 15px; border-radius: 8px; margin-bottom: 20px; ${porcentaje >= 70 ? 'background-color: #d4edda; border: 2px solid #c3e6cb; color: #155724;' : 'background-color: #f8d7da; border: 2px solid #f5c6cb; color: #721c24;'}">
                        <h4 style="margin: 0 0 10px 0;">Tu puntuación: ${correctas}/${totalPreguntas} (${porcentaje}%)</h4>
                        <p style="margin: 0; font-weight: bold;">${porcentaje >= 70 ? '¡Excelente trabajo! Has aprobado el examen.' : 'Necesitas estudiar un poco más. Revisa los temas y vuelve a intentarlo.'}</p>
                    </div>
            `;

            // Mostrar preguntas incorrectas si las hay
            if (preguntasIncorrectas.length > 0) {
                resultadosHTML += `
                    <div style="background-color: #fff3cd; border: 2px solid #ffeaa7; border-radius: 8px; padding: 15px; margin-top: 15px;">
                        <h4 style="color: #856404; margin-bottom: 15px;"> Preguntas enla cuales fallaste:</h4>
                `;
                
                preguntasIncorrectas.forEach((item, index) => {
                    resultadosHTML += `
                        <div style="background-color: white; border-left: 4px solid #dc3545; padding: 12px; margin-bottom: 10px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <p style="margin: 0 0 8px 0; font-weight: bold; color: #dc3545; font-size: 1.1em;">
                                ${item.numero}. ${item.pregunta}
                            </p>
                            <p style="margin: 0 0 5px 0; color: #6c757d;">
                                <strong>Tu respuesta:</strong> <span style="color: #dc3545; background-color: #f8d7da; padding: 2px 6px; border-radius: 3px;">${item.respuestaUsuario}</span>
                            </p>
                            <p style="margin: 0; color: #6c757d;">
                                <strong>Respuesta correcta:</strong> <span style="color: #28a745; background-color: #d4edda; padding: 2px 6px; border-radius: 3px;">${item.respuestaCorrecta}</span>
                            </p>
                        </div>
                    `;
                });
                
                resultadosHTML += '</div>';
            } else {
                resultadosHTML += `
                    <div style="background-color: #d4edda; border: 2px solid #c3e6cb; border-radius: 8px; padding: 15px; margin-top: 15px;">
                        <h4 style="color: #155724; margin: 0 0 10px 0;">¡Perfecto! 🎉</h4>
                        <p style="color: #155724; margin: 0;">Has respondido todas las preguntas correctamente. ¡Excelente conocimiento de Python!</p>
                    </div>
                `;
            }

            // Agregar botón para reintentar
            resultadosHTML += `
                    <div style="text-align: center; margin-top: 20px;">
                        <button onclick="reiniciarExamen()" style="background-color: #3498db; color: white; padding: 12px 24px; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem; font-weight: bold; transition: background-color 0.3s ease;">
                            Intentar de nuevo el examen
                        </button>
                    </div>
                </div>
            `;

            // Insertar los resultados después del formulario
            const encuestaSection = document.getElementById('encuesta');
            const existingResults = document.getElementById('resultadosExamen');
            if (existingResults) {
                existingResults.remove();
            }
            encuestaSection.insertAdjacentHTML('beforeend', resultadosHTML);
        }

        // Nueva función para reiniciar el examen
        function reiniciarExamen() {
            // Eliminar resultados
            const resultados = document.getElementById('resultadosExamen');
            if (resultados) {
                resultados.remove();
            }
            
            // Mostrar el botón de abrir examen
            document.querySelector('#encuesta .button').style.display = 'inline-block';
            
            // Limpiar y ocultar el formulario
            const form = document.getElementById('formularioEncuesta');
            form.reset();
            form.style.display = 'none';
        }

        // Mostrar la sección de inicio al cargar la página
        document.addEventListener('DOMContentLoaded', () => {
            mostrarSeccion('introduccion-a-python'); // Muestra la sección de introducción al cargar
        });