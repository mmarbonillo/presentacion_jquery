$().ready(function(){
    
    //EJEMPLO 1
    $('#ex1button').click(function(){
        $('#felixex1').show(1000);
    });
    $('#ex1button2').click(function(){
        $('#felixex1').hide(1500);
    });
    $('#ex1button3').click(function(){
        $('#felixex1').toggle();
    });

    //EJEMPLO 2
    $('#ex2button1').click(function(){
        $('#profesex2').fadeIn(1000);
    });
    $('#ex2button2').click(function(){
        $('#profesex2').fadeOut(2000);
    });
    $('#ex2button3').click(function(){
        $('#profesex2').fadeTo(2000, 0.3);
    });
    $('#ex2button4').click(function(){
        $('#profesex2').fadeToggle(1500);
    });

    //EJEMPLO 3
    $('#ex3button1').click(function(){
        $('#felixex3').slideDown(800);
    });
    $('#ex3button2').click(function(){
        $('#felixex3').slideUp(1200);
    });
    $('#ex3button3').click(function(){
        $('#felixex3').slideToggle(1500);
    });

});