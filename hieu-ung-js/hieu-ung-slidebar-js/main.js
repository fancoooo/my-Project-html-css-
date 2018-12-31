window.onload = () => {
    const btn = document.querySelector('.button');
    const den = document.querySelector('.den');
    const list = document.querySelector('.silde');

    btn.addEventListener('click', (e) => {
        list.classList.toggle('push');
        list.classList.toggle('lis');
        btn.classList.toggle('but');
        den.classList.toggle('hien');
    });
}