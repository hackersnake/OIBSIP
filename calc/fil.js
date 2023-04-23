let str = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{button.addEventListener('click',(vari)=>{
    if(vari.target.innerHTML == '=')
    {
        str=eval(str);
        document.querySelector('input').value = str;
    
    }
    else if(vari.target.innerHTML == 'AC')
    {
        str=""
        document.querySelector('input').value = str;
    
    }

    else if(vari.target.innerHTML == 'DEL')
    {
        str=""
        document.querySelector('input').value = str;
    
    }

    else{

    console.log(vari.target)
    str=str+vari.target.innerHTML;
    document.querySelector('input').value = str;
    }
})
})