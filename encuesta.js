
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
                { name: 'p1', correctAnswer: 'Interpretado' },
                { name: 'p2', correctAnswer: 'print()' },
                { name: 'p3', correctAnswer: 'def mi_funcion():' },
                { name: 'p4', correctAnswer: 'list' },
                { name: 'p5', correctAnswer: '# comentario' },
                { name: 'p6', correctAnswer: 'False' },
                { name: 'p7', correctAnswer: 'pandas' }
            ];

            let correctas = 0;
            let todasRespondidas = true;

            preguntas.forEach(pregunta => {
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
                }
            });

            if (!todasRespondidas) {
                showMessage('Por favor, responde todas las preguntas antes de enviar.');
                return false;
            }

            const totalPreguntas = preguntas.length;
            const mensaje = `Has respondido ${correctas} de ${totalPreguntas} preguntas correctamente.`;
            showMessage(mensaje);

            // Opcional: Resetear el formulario después de enviar
            form.reset();
            form.style.display = 'none'; // Ocultar el formulario
            document.querySelector('#encuesta .button').style.display = 'inline-block'; // Mostrar el botón "Abrir Encuesta"

            return false; // Previene el envío real del formulario
        }

        // Mostrar la sección de inicio al cargar la página
        document.addEventListener('DOMContentLoaded', () => {
            mostrarSeccion('introduccion-a-python'); // Muestra la sección de introducción al cargar
        });
