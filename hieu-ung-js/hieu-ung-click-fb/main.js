window.onload = () => {
    const click = document.querySelectorAll('.icon');
    for (let i = 0; i < click.length; i++) {
        click[i].onclick = function(e){

            this.classList.toggle('mautrang');
            const b = e.target.parentNode;
            for(let j=0;j<click.length;j++){
                if(click[j] !== b){
                    click[j].classList.remove('mautrang');
                }
                
            }
          
            const danhsach = document.querySelectorAll('.danhsach');
          
            const hien = document.getElementById(this.getAttribute('data-click'));
            hien.classList.toggle('an');
            const a = e.target.parentNode.nextElementSibling;
            for(let k=0;k<danhsach.length;k++){
                if(danhsach[k] !== a){
                    danhsach[k].classList.remove('an');
                }
            }
        }
        
    }
    
}