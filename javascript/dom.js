$().ready(function(){
    //EJEMPLO 1
    $('#example1button').click(function(){
        $('p.ex01').removeClass('fondoazul').addClass('rojo');
    });
    $('#example2button').click(function(){
        $('p.ex01').removeClass('rojo').addClass('fondoazul');
    });
    $('#example3button').click(function(){
        $('p.ex01').removeClass('rojo fondoazul')
        $('p.ex01').toggleClass('rojoyazul');
    });
});