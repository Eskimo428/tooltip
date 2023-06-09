let tooltips = Array.from(document.querySelectorAll('.has-tooltip'));
let activeTooltip = null;

tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', (event) => {
        event.preventDefault();
        let tooltipPosition = tooltip.getAttribute('data-position');
        
        let tooltipText = tooltip.querySelector('.tooltip-text');
        
        if (!tooltipText) {
            tooltipText = document.createElement('span');
            tooltipText.classList.add('tooltip-text');
            tooltip.appendChild(tooltipText);
        }
        
        tooltipText.textContent = tooltip.getAttribute('title');
        
        // Определение положения подсказки
        let tooltipTop, tooltipLeft;
        if (tooltipPosition === 'top') {
            tooltipTop = tooltip.offsetTop / 1.2 ;
            tooltipLeft = tooltip.offsetLeft;
        } else if (tooltipPosition === 'bottom') {
            tooltipTop = tooltip.offsetTop + tooltip.offsetHeight;
            tooltipLeft = tooltip.offsetLeft;
        } else if (tooltipPosition === 'left') {
            tooltipTop = tooltip.offsetTop;
            tooltipLeft = tooltip.offsetLeft / 2
        } else if (tooltipPosition === 'right') {
            tooltipTop = tooltip.offsetTop;
            tooltipLeft = tooltip.offsetLeft + tooltip.offsetWidth;
        }
        
        tooltipText.style.top = tooltipTop + 'px';
        tooltipText.style.left = tooltipLeft + 'px';
        
        if (activeTooltip && activeTooltip !== tooltip) {
            activeTooltip.querySelector('.tooltip-text').classList.remove('tooltip_active');
        }
        
        tooltipText.classList.toggle('tooltip_active');
        activeTooltip = tooltip;
    });
});
