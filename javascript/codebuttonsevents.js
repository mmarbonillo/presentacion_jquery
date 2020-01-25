$(function () {
    $('#example1code').click(function(){
        $('#literal1').toggle(1000);
    });
    $('#closeexample1').click(function(){
        $('#literal1').animate({
            height: 'hide'
          });
    });

    $('#example2code').click(function(){
        $('#literal2').toggle(1000);
    });
    $('#closeexample2').click(function(){
        $('#literal2').animate({
            height: 'hide'
          });
    });

    $('#example3code').click(function(){
        $('#literal3').toggle(1000);
    });
    $('#closeexample3').click(function(){
        $('#literal3').animate({
            height: 'hide'
          });
    });
});