let addbut = document.getElementById('adddata');
let todolist = document.getElementById('todolist');
let takedata=document.getElementById('takedata');

addbut.addEventListener('click',function(){
    var content = document.createElement('p');
    content.classList.add('content-style');
    content.innerText = takedata.value;
    todolist.appendChild(content);
    takedata.value="";
    content.addEventListener('click',function(){
        var cont = content.innerText;
        todocomp.appendChild(content);
        
        
        
    })
    content.addEventListener('dblclick', function(){
        todocomp.removeChild(content);
    })
})