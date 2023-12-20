const renderDarkMode = (darkMode, lightMode) => {
    const buttonController = document.querySelector('.mode__controller');
    const html = document.querySelector('html');

    const modePreference = JSON.parse(localStorage.getItem('dark__mode'));

    const pathToSVGLight = darkMode;
    const pathToSVGDark = lightMode;

    if(modePreference) {
        buttonController.innerHTML = `<img src="${pathToSVGDark}" alt="Botão alterar modo de exibição">`;
        html.classList.add('dark__mode');
    } else {
        buttonController.innerHTML = `<img src="${pathToSVGLight}" alt="Botão alterar modo de exibição">`;
        html.classList.remove('dark__mode');
    }

    buttonController.addEventListener('click', () => {
        html.classList.toggle('dark__mode');

        if(html.classList.contains('dark__mode')) {
            buttonController.innerHTML = `<img src="${pathToSVGDark}" alt="Seu Texto Alternativo">`;
            localStorage.setItem('dark__mode', true);
        } else {
            buttonController.innerHTML = `<img src="${pathToSVGLight}" alt="Seu Texto Alternativo">`;
            localStorage.setItem('dark__mode', false);
        }
    });
}

export {renderDarkMode};