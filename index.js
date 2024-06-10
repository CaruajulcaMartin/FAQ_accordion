document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los elementos con la clase 'item-header' y 'accordion-content'
    const headers = document.querySelectorAll('.item-header');
    const contents = document.querySelectorAll('.accordion-content');
    const icons = document.querySelectorAll('.icon');

    // Inicializar el acordeón para que solo el primer ítem esté activo
    contents.forEach((content, index) => {
        if (index === 0) {
            content.style.display = 'block';
            icons[index].src = '/assets/images/icon-minus.svg';
        } else {
            content.style.display = 'none';
            icons[index].src = '/assets/images/icon-plus.svg';
        }
    });

    // Iterar sobre cada encabezado y agrega un evento de clic
    headers.forEach((header, index) => {
        header.addEventListener('click', function () {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.icon');

            if (content.style.display === 'block') {
                content.style.display = 'none';
                icon.src = '/assets/images/icon-plus.svg';
            } else {
                content.style.display = 'block';
                icon.src = '/assets/images/icon-minus.svg';
            }

            // Cerrar otros elementos abiertos
            contents.forEach((otherContent, otherIndex) => {
                if (otherContent !== content) {
                    otherContent.style.display = 'none';
                    icons[otherIndex].src = '/assets/images/icon-plus.svg';
                }
            });
        });
    });
});

