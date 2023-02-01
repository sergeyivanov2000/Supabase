
// смена темы
let switcherTheme = document.querySelector('.footer__switcher');
let toggleTheme = document.querySelector('.footer__toggle');

toggleTheme.addEventListener('click', (event) => {
    switcherTheme.classList.toggle('footer__switcher--light');
    let bodyElement =  document.body;
    bodyElement.classList.toggle('body-light');
    bodyElement.classList.toggle('font-content-dark');

    let h1Elems = document.querySelectorAll('h1');
    h1Elems.forEach(item => item.classList.toggle('font-primary-dark'));

    let h2Elems = document.querySelectorAll('h2');
    h2Elems.forEach(item => item.classList.toggle('font-primary-dark'));

    let h4Elems = document.querySelectorAll('h4');
    h4Elems.forEach(item => item.classList.toggle('font-primary-dark'));

    let aElems = document.querySelectorAll('a');
    aElems.forEach(item => item.classList.toggle('font-content-dark'));

    let example = document.querySelector('.example');
    example.classList.toggle('example-light');
    example.firstElementChild.classList.toggle('font-primary-dark');

    let deploy = document.querySelector('.deploy');
    deploy.classList.toggle('deploy-borderBottom-light');

    let codewindowAll = document.querySelectorAll('.codewindow');
    codewindowAll.forEach( item => item.classList.toggle('codewindow-light'));

    let sliderContent = document.querySelectorAll('.slider__text--big');
    sliderContent.forEach( item => item.classList.toggle('font-primary-dark'));

    let codewindowRows = document.querySelectorAll('.codewindow__rows');
    codewindowRows.forEach( item => item.classList.toggle('font-primary-dark'));

    let codewindowCopyAll = document.querySelectorAll('.codewindow__copy');
    codewindowCopyAll.forEach( item => item.classList.toggle('codewindow__copy-light'));

    let authExplore = document.querySelector('.auth__explore');
    authExplore.classList.toggle('auth__explore-light');

    let buttons = document.querySelectorAll('.button');
    buttons.forEach( item => item.classList.toggle('button-light'));

    let deployButton = document.querySelectorAll('.deploy__button');
    deployButton.forEach( item => item.classList.toggle('deploy__button-light'));

    let linksBody = document.querySelectorAll('.links__body');
    linksBody.forEach( item => item.classList.toggle('links__body-light'));

    let footerToggle = document.querySelector('.footer__toggle');
    footerToggle.classList.toggle('footer__toggle-light');
    
    let headerArrows = document.querySelectorAll('.header__menu-link--arrow');
    headerArrows.forEach( item => item.classList.toggle('header__menu-link-dark--arrow'));

});



// копирование
let allDoc = document.body;

allDoc.addEventListener('click', (event) => {
    if(event.target.closest('.codewindow__copy')) {
        event.preventDefault();
        let copyButton = event.target.closest('.codewindow__copy');
        let copyButtonText = copyButton.querySelector('.codewindow__copy-text');
        let sliderWindow = copyButton.closest('.slider__window');
        let codeElement = sliderWindow.querySelector('.codewindow__rows');
        let writeText = codeElement.textContent;
        
        // Запись кода в буфер
        navigator.clipboard.writeText(writeText);

        // Чтение из буфера
        //let readText = navigator.clipboard.readText();

        let allCopyButtons = document.querySelectorAll('.codewindow__copy-text');

        allCopyButtons.forEach((item) => {
            item.innerHTML = 'Copy';
        });

        copyButtonText.innerHTML = 'Copied';
       
    }
});