const main_div = document.querySelector('.content-container');
window.addEventListener('keydown', (e) => {
    console.log(e);
    main_div.textContent = e.key;
});