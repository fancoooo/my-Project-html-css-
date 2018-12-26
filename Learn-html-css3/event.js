

window.onload = function(){
    const info = [
        {
            a: ['https://codepen.io/FreeCodeCamp/pen/PNKdjo','https://codepen.io/FreeCodeCamp/pen/mVEJag'],
            img: ['https://cloud.githubusercontent.com/assets/15967809/17642772/7d02406c-6171-11e6-8c79-40a2933163dc.png','https://cloud.githubusercontent.com/assets/15967809/17642773/7d08cb94-6171-11e6-8c45-22e7cf64683e.png'],
            content: ['JavaScript Calculator','Map Data Across the Globe']
        },
        {
            a: ['https://codepen.io/FreeCodeCamp/pen/wGqEga','https://codepen.io/FreeCodeCamp/pen/KzXQgy'],
            img: ['https://cloud.githubusercontent.com/assets/15967809/17642774/7d091806-6171-11e6-8d47-ecf2f2833fe2.png','https://cloud.githubusercontent.com/assets/15967809/17642775/7d354304-6171-11e6-8b56-66eee4681d88.png'],
            content: ['Wikipedia Viewer','Tic Tac Toe Game']
        }
    ];
    var i = 0;
    const btn = document.querySelector('button');
    const project = document.getElementById('projects');
    console.log(project);
    function createContent(content,m) {
        const div = document.createElement('div');
        div.classList.add('big');

        function createA(link,img,cont) {
            const a = document.createElement('a');
            a.setAttribute('href',link);
            a.classList.add('project-tile');
            const im = document.createElement('img');
            im.setAttribute('src',img);
            im.setAttribute('alt','project');
            const div = document.createElement('div');
            div.textContent = cont;
            a.appendChild(im);
            a.appendChild(div); 
            return a;
        }

        div.appendChild(createA(content[m]['a'][0],content[m]['img'][0],content[m]['content'][0]));
        div.appendChild(createA(content[m]['a'][1],content[m]['img'][1],content[m]['content'][1]));
        return div;
    }

    btn.addEventListener('click', (e) => {
        project.appendChild(createContent(info,i));
        i++;
    });
}