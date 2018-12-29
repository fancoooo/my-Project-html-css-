window.onload = () => {
    const ano = document.querySelector('.ano');
    const btn = document.querySelector('.btn');
    var i=0;

    btn.addEventListener('click', (event) => {
        btn.disabled = true;
        if(i%2==0){
            ano.classList.remove('dichve');
            ano.classList.add('dichdi');
        }else{
            ano.classList.remove('dichdi');
            ano.classList.add('dichve');
        }
        i++;
        setTimeout(() => {
            btn.disabled = false;
        },2000);
    });
}