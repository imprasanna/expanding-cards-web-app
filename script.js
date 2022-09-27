const panels = document.querySelectorAll(".panel");

contractOtherPanels();

panels.forEach(expPanel);

function expPanel(individualPanel) {
    individualPanel.addEventListener('click', () => {
        contractOtherPanels();
        individualPanel.classList.add('active');
    });
}

function contractOtherPanels() {
    panels.forEach( (individualPanel) => {
    individualPanel.classList.remove('active');
    });
}