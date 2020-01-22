$().ready(function(){
    //EJEMPLO 1
    $('#example1code').click(function(){
        $('#literal1').toggle(1000);
    });
    $('#closeexample1').click(function(){
        $('#literal1').animate({
            height: 'hide'
          });
    });

    //EJEMPLO 2
    $('#example2code').click(function(){
        $('#literal2').toggle(1000);
    });
    $('#closeexample2').click(function(){
        $('#literal2').animate({
            height: 'hide'
          });
    });
    $('#example22code').click(function(){
        $('#literal22').toggle(1000);
    });
    $('#closeexample22').click(function(){
        $('#literal22').animate({
            height: 'hide'
          });
    });

    //EJEMPLO 4
    $('#example4code').click(function(){
        $('#literal4').toggle(1000);
    });
    $('#closeexample4').click(function(){
        $('#literal4').animate({
            height: 'hide'
          });
    });
})