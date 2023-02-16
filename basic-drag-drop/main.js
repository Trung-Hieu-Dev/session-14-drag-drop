//what to drag
function drag (ev) {  
    ev.dataTransfer.setData('text', ev.target.id);
}

//where to drop - ondragover()
function allowDrop(ev) {  
    ev.preventDefault();
}

//do drop
function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
}