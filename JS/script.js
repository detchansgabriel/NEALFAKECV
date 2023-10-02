
/* Destaco cuando hay interaccion con la foto de Neal*/ 

document.getElementById('mi-foto').addEventListener('mouseover',function(){
    console.log('Usuario paso el mouse sobre la foto de Neal.');
    document.getElementById('mi-foto').style.outline='solid 8px gold'
    
    
});
document.getElementById('mi-foto').addEventListener('mouseout',function(){
    console.log('Usuario saco el mouse sobre la foto de Neal.');
    
    document.getElementById('mi-foto').style.outline='solid 2px #453c2b'
});

document.getElementById('mi-foto').addEventListener('click', function(){
    console.log('Usuario hizo click en: foto de Neal.');
});

/* Destaco cuando hay interaccion con el boton de Australia*/ 

document.getElementById('button-left').addEventListener('mouseover',function(){
    console.log('Usuario paso el mouse sobre el botón de Conozca Australia.');
    document.getElementById('button-left').style.color='gold'
    document.getElementById('button-left').style.outline='solid 8px silver'
});
document.getElementById('button-left').addEventListener('mouseout',function(){
    console.log('Usuario saco el mouse de el botón de Conozca Australia.');
    document.getElementById('button-left').style.outline='solid  3px white'
    document.getElementById('button-left').style.color='white';

    /* Destaco cuando hay interaccion con el boton de Argentina*/ 
});

document.getElementById('button-right').addEventListener('mouseover',function(){
    console.log('Usuario paso el mouse sobre el botón de Conozca Argentina.');
    document.getElementById('button-right').style.color='gold'
    document.getElementById('button-right').style.outline='solid 8px silver'
});
document.getElementById('button-right').addEventListener('mouseout',function(){
    console.log('Usuario saco el mouse de el botón de Conozca Argentina.');
    document.getElementById('button-right').style.color='white';
    document.getElementById('button-right').style.outline='solid 3px white'
});