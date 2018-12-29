window.onload = function(){
    const click = document.querySelector('.tamgiac');
    const list = document.querySelector('.danhsach');
    var i=0;

    click.addEventListener('click', (e) => {
        if(i%2==0){
            list.style.display = "initial";
            click.style.color = "white";
        }else{
            list.style.display = "none";
            click.style.color = "black";
        }
        i++;
    });
}