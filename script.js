document.addEventListener('DOMContentLoaded', () => {
    const categoryButton = document.getElementById('category-selection');
    const manualEntryButton = document.getElementById('manual-entry');
    const categorySelectionDiv = document.querySelector('.category-selection');
    const manualInputDiv = document.querySelector('.manual-input');

    categoryButton.addEventListener('click', () => {
        categorySelectionDiv.style.display = 'block';
        manualInputDiv.style.display = 'none';
    });

    manualEntryButton.addEventListener('click', () => {
        manualInputDiv.style.display = 'block';
        categorySelectionDiv.style.display = 'none';
    });

 });

 document.addEventListener('DOMContentLoaded', () => {
    const categoryButton = document.getElementById('category-selection');
    const manualEntryButton = document.getElementById('manual-entry');
    const categorySelectionDiv = document.querySelector('.category-selection');
    const manualInputDiv = document.querySelector('.manual-input');
    const categoriesSelect = document.getElementById('categories');
    const infraccionesSelect = document.getElementById('infracciones');
    const infraccionDetalle = document.getElementById('infraccionDetalle');

    // Función para mostrar/ocultar secciones
    function toggleSection(sectionToShow) {
        const sections = [categorySelectionDiv, manualInputDiv];
        sections.forEach((section) => {
            if (section === sectionToShow) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Evento de clic para el botón 'Seleccionar Categoría'
    categoryButton.addEventListener('click', () => {
        toggleSection(categorySelectionDiv);
    });

    // Evento de clic para el botón 'Ingreso Manual'
    manualEntryButton.addEventListener('click', () => {
        toggleSection(manualInputDiv);
    });

    // Ejemplo de estructura de datos para infracciones basadas en categorías seleccionadas
    const infraccionesPorCategoria = {
        "Control Vehicular": [
          {nombre: "No presentar Tarjeta de Circulación o presentarla vencida", articulo: "Art. 32", fraccion: "I", inciso: ""},
          {nombre: "No portar holograma de circulación", articulo: "Art. 33", fraccion: "II", inciso: ""},
          {nombre: "Circular sin placas", articulo: "Art. 47", fraccion: "VII", inciso: "d)"},
          {nombre: "Circular en sentido contrario", articulo: "Art. 47", fraccion: "VII", inciso: "e)"},
          {nombre: "No respetar los límites de velocidad establecidos en el presente reglamento", articulo: "Art. 47", fraccion: "VII", inciso: "f)"},
          {nombre: "Instalar o utilizar radares o antiradares", articulo: "Art. 47", fraccion: "VII", inciso: "g)"},
          {nombre: "Instalar o utilizar elementos para evitar lectura de placa por dispositivos", articulo: "Art. 47", fraccion: "VII", inciso: "h)"},
          {nombre: "Circular o estacionar en zona exclusiva para uso ciclista", articulo: "Art. 47", fraccion: "VII", inciso: "i)"},
          // Asumiendo más infracciones aquí...
        ],
        "Equipo para la Circulación de Vehículos": [
            {nombre: "Traer parabrisas estrellados o polarizados, o con cualquier otro aditamento que impida la Visibilidad.", articulo: "Art. 35", fraccion: "II", inciso: ""},
            {nombre: "Carecer de luces direccionales de destello, faros, cuartos, reflejantes, indicadoras de reversa y luz roja trasera.", articulo: "Art. 35", fraccion: "II", inciso: ""},
            {nombre: "Escape fuera de lugar autorizado, en mal estado o con alteración de características.", articulo: "Art. 35", fraccion: "II", inciso: ""},
            {nombre: "Falta del tapón del tanque de combustible.", articulo: "Art. 35", fraccion: "II", inciso: ""},
            {nombre: "Transporte escolar sin las condiciones adecuadas", articulo: "Art. 35", fraccion: "II", inciso: ""}
            // Continuar con más infracciones según sea necesario
        ],
        
        "Ascenso y Descenso de Pasajeros": [
    {nombre: "Realizar ascenso y descenso de pasajeros en lugares no autorizados para tal efecto.", articulo: "Art. 36", fraccion: "III", inciso: ""},
    {nombre: "Rebasar el cupo establecido en la tarjeta de circulación para ascenso y descenso.", articulo: "Art. 36", fraccion: "III", inciso: ""}
    // Añadir más infracciones según sea necesario para esta categoría
],

    };

    // Manejar cambio en la selección de categoría
    categoriesSelect.addEventListener('change', function() {
        const categoriaSeleccionada = this.value;
        const infracciones = infraccionesPorCategoria[categoriaSeleccionada] || [];
        infraccionesSelect.innerHTML = '<option value="">Seleccione una infracción...</option>';
        infracciones.forEach(infraccion => {
            const option = new Option(infraccion.nombre, infraccion.nombre);
            infraccionesSelect.add(option);
        });
        infraccionesSelect.style.display = 'block';
    });

    // Manejar cambio en la selección de infracción
    infraccionesSelect.addEventListener('change', function() {
        const infraccionSeleccionada = this.value;
        const categoriaSeleccionada = categoriesSelect.value;
        const detalles = infraccionesPorCategoria[categoriaSeleccionada].find(inf => inf.nombre === infraccionSeleccionada);
        
        if (detalles) {
            infraccionDetalle.innerHTML = `Artículo: ${detalles.articulo}, Fracción: ${detalles.fraccion}, Inciso: ${detalles.inciso || 'N/A'}`;
            infraccionDetalle.style.display = 'block';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Define los artículos, fracciones e incisos como objetos para fácil acceso
    const articlesData = [
        {
            article: "Art.32 Y 33 CONTROL VEHICULAR",
            fractions: [
                { name: "Fracción I", incises: ["Inciso a", "Inciso b"] },
                { name: "Fracción II", incises: [] },
                { name: "Fracción III", incises: ["Inciso a"] },
            ]
        },
        {
            article: "Art.35 EQUIPO PARA LA CIRCULACION DE VEHICULOS",
            fractions: [
                { name: "Fracción IV", incises: [] },
                { name: "Fracción V", incises: ["Inciso a", "Inciso b", "Inciso c"] },
            ]
        },
        {
            article: "Art.36 ASCENSO Y DESCENSO DE PASAJEROS",
            fractions: [
                { name: "Fracción I", incises: [] },
            ]
        },
        {
            article: "Art.37 y 38 TRANSPORTE DE CARGA Y SUS MANIOBRAS",
            fractions: [
                { name: "Fracción II", incises: ["Inciso a"] },
                { name: "Fracción III", incises: [] },
            ]
        },
        {
            article: "Art.40,41 Y 44 TRANSPORTE DE CARGA PELIGROSA",
            fractions: [
                { name: "Fracción I", incises: [] },
                { name: "Fracción II", incises: ["Inciso a", "Inciso b"] },
            ]
        },
    ];

    const articleSelect = document.getElementById('manualArticle');
    const fractionSelect = document.getElementById('manualFraction');
    const inciseSelect = document.getElementById('manualIncise');

    // Llenar la lista de artículos
    articlesData.forEach((item) => {
        const option = new Option(item.article, item.article);
        articleSelect.add(option);
    });

    // Manejador para cambio de artículo
    articleSelect.addEventListener('change', function() {
        fractionSelect.innerHTML = '<option>Seleccione una Fracción...</option>';
        inciseSelect.innerHTML = '<option>Seleccione un Inciso (Solo si aplica)...</option>';

        const selectedArticle = this.value;
        const foundArticle = articlesData.find(article => article.article === selectedArticle);

        if (foundArticle) {
            foundArticle.fractions.forEach(fraction => {
                const option = new Option(fraction.name, fraction.name);
                fractionSelect.add(option);
            });
        }
    });

    // Manejador para cambio de fracción
    fractionSelect.addEventListener('change', function() {
        inciseSelect.innerHTML = '<option>Seleccione un Inciso (Solo si aplica)...</option>';

        const selectedArticle = articleSelect.value;
        const selectedFraction = this.value;

        const foundArticle = articlesData.find(article => article.article === selectedArticle);
        const foundFraction = foundArticle?.fractions.find(fraction => fraction.name === selectedFraction);

        if (foundFraction) {
            foundFraction.incises.forEach(incise => {
                const option = new Option(incise, incise);
                inciseSelect.add(option);
            });

            if (foundFraction.incises.length === 0) {
                inciseSelect.add(new Option('N/A', 'N/A'));
            }
        }
    });


    const submitButton = document.getElementById('submitManual'); // Asegúrate de que este es el ID de tu botón de enviar
    const resultDiv = document.getElementById('infraccionDetalle'); // Este es el contenedor donde se mostrarán los resultados

    submitButton.addEventListener('click', () => {
        // Obtiene los valores seleccionados
        const article = document.getElementById('manualArticle').value;
        const fraction = document.getElementById('manualFraction').value;
        let incise = document.getElementById('manualIncise').value;

        // Si no se ha seleccionado un inciso o es el texto placeholder, muestra 'N/A'
        if (incise === "Seleccione un Inciso (Solo si aplica)..." || incise === "") {
            incise = 'N/A';
        }

        const reasonInput = document.getElementById('manualReason');
        const reason = reasonInput.value;

        // Compone el HTML con la información seleccionada y lo muestra en resultDiv
        resultDiv.innerHTML = `
            <div>
                <strong>Artículo seleccionado:</strong> ${article}<br>
                <strong>Fracción seleccionada:</strong> ${fraction}<br>
                <strong>Inciso seleccionado:</strong> ${incise === "" ? 'N/A' : incise}<br>
                <strong>Motivo:</strong> ${reason}
            </div>
        `;

        // Asegúrate de que resultDiv es visible
        resultDiv.style.display = 'block';
    });
});
