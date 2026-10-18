        // Obtiene referencias a los elementos del DOM para el modal
        const modal = document.getElementById('customModal');
        const modalMessage = document.getElementById('modalMessage');
        const modalInput = document.getElementById('modalInput');
        const modalOkBtn = document.getElementById('modalOkBtn');
        const modalCancelBtn = document.getElementById('modalCancelBtn');
        const resultadosDiv = document.getElementById('resultados');

        // Función personalizada para mostrar un mensaje de alerta
        function showAlert(message) {
            return new Promise(resolve => {
                modalMessage.textContent = message;
                modalInput.classList.add('hidden');
                modalCancelBtn.classList.add('hidden');
                modalOkBtn.onclick = () => {
                    modal.classList.add('hidden');
                    resolve();
                };
                modal.classList.remove('hidden');
            });
        }

        // Función personalizada para solicitar un valor (prompt)
        function showPrompt(message) {
            return new Promise(resolve => {
                modalMessage.textContent = message;
                modalInput.value = '';
                modalInput.classList.remove('hidden');
                modalCancelBtn.classList.remove('hidden');
                modalOkBtn.onclick = () => {
                    modal.classList.add('hidden');
                    resolve(modalInput.value);
                };
                modalCancelBtn.onclick = () => {
                    modal.classList.add('hidden');
                    resolve(null);
                };
                modal.classList.remove('hidden');
            });
        }

        // Función para limpiar la pantalla de resultados
        function clearResults() {
            resultadosDiv.innerHTML = '';
        }

        // Función del ejercicio 1: Calcular el mayor de tres números
        async function calcularMayor() {
            clearResults();
            try {
                const aStr = await showPrompt("Ingresa el primer número:");
                if (aStr === null) return;
                const a = Number(aStr);
                
                const bStr = await showPrompt("Ingresa el segundo número:");
                if (bStr === null) return;
                const b = Number(bStr);

                const cStr = await showPrompt("Ingresa el tercer número:");
                if (cStr === null) return;
                const c = Number(cStr);

                if (isNaN(a) || isNaN(b) || isNaN(c)) {
                    await showAlert("Por favor, ingresa solo números válidos.");
                    return;
                }

                let mayor = Math.max(a, b, c);
                await showAlert(`El mayor de los tres números es: ${mayor}`);
                resultadosDiv.textContent = `Números ingresados: ${a}, ${b}, ${c}\nResultado: El mayor es ${mayor}`;
            } catch (e) {
                console.error(e);
            }
        }

        // Función del ejercicio 2: Verificar si es mayor o menor de edad
        async function verificarEdad() {
            clearResults();
            try {
                const edadStr = await showPrompt("Ingresa tu edad:");
                if (edadStr === null) return;
                const edad = Number(edadStr);

                if (isNaN(edad)) {
                    await showAlert("Por favor, ingresa una edad válida.");
                    return;
                }

                if (edad >= 18) {
                    await showAlert("Eres mayor de edad.");
                    resultadosDiv.textContent = `Edad ingresada: ${edad}\nResultado: Eres mayor de edad.`;
                } else {
                    await showAlert("Eres menor de edad.");
                    resultadosDiv.textContent = `Edad ingresada: ${edad}\nResultado: Eres menor de edad.`;
                }
            } catch (e) {
                console.error(e);
            }
        }

        // Función del ejercicio 3: Tabla de multiplicar
        async function tablaMultiplicar() {
            clearResults();
            try {
                const numeroStr = await showPrompt("Ingresa un número para ver su tabla:");
                if (numeroStr === null) return;
                const numero = Number(numeroStr);

                if (isNaN(numero)) {
                    await showAlert("Por favor, ingresa un número válido.");
                    return;
                }

                let tablaTexto = `Tabla del ${numero}:\n`;
                for (let i = 1; i <= 10; i++) {
                    tablaTexto += `${numero} x ${i} = ${numero * i}\n`;
                }
                
                await showAlert(tablaTexto);
                resultadosDiv.textContent = tablaTexto;
            } catch (e) {
                console.error(e);
            }
        }