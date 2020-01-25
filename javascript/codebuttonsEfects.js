$().ready(function(){
    //EJEMPLO 1
    $('#examplecode1').click(function(){
        $('#literal1').toggle(1000);
    });
    $('#closeexample1').click(function(){
        $('#literal1').animate({
            height: 'hide'
          });
    });

    //EJEMPLO 2
    $('#examplecode2').click(function(){
        $('#literal2').toggle(1000);
    });
    $('#closeexample2').click(function(){
        $('#literal2').animate({
            height: 'hide'
          });
    });

    //EJEMPLO 3
    $('#examplecode3').click(function(){
        $('#literal3').toggle(1000);
    });
    $('#closeexample3').click(function(){
        $('#literal3').animate({
            height: 'hide'
          });
    });
    
});