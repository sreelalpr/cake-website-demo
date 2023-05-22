document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementById('hover-effect');

    h1.addEventListener('mouseover', () => {
        h1.classList.add('hovered');
    });

    h1.addEventListener('mouseout', () => {
        h1.classList.remove('hovered');
    });
});