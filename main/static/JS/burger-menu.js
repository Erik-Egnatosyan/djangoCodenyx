window.onload = () => {
    button = document.getElementsByClassName('burger-button')[0]
    menu = document.getElementsByClassName('burger-menu')[0]

    button.addEventListener('click', function() {
        menu.classList.toggle('visible');
    });
}