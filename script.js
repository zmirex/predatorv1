function initCustomCursor() {
    const cursorDot = document.createElement('div');
    const cursorOutline = document.createElement('div');
    
    cursorDot.className = 'cursor-dot';
    cursorOutline.className = 'cursor-outline';
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);
    
    document.addEventListener('mousemove', e => {
        requestAnimationFrame(() => {
            cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursorOutline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    });
    
    // Efecto hover en elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, input, .menu-btn, .price-btn, .cta-btn');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('cursor-hover');
        });
    });
}

document.addEventListener('DOMContentLoaded', initCustomCursor);
