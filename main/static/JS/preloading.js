let supermask = document.querySelector('.supermask');
window.addEventListener('load', () => {
    supermask.classList.add('superhiden');
    setTimeout(()=>{
        supermask.remove();
     },0)
});

