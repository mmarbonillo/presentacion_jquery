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
})