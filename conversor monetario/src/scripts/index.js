import { renderDarkMode } from "./renderDarkMode.js";

const checkInput = () => {
    const buttonConvert = document.querySelector('.convert__button');

    buttonConvert.addEventListener('click', () => {
        console.log('test');
    });
}

checkInput();

renderDarkMode('src/assets/svg/dark_mode.svg', 'src/assets/svg/light_mode.svg');