$().ready(function(){
    //EJEMPLO 1
    $('#parrafoEjemplo').click(function(){
        alert('Has pinchado el párrafo');
    });

    //EJEMPLO 2
    $('.capa1').click(function(){
        $('.capa2').css('background-color', 'unset');
        $('.capa1').css('background-color', 'red');
    });
    $('.capa2').click(function(){
        $('.capa1').css('background-color', 'unset');
        $('.capa2').css('background-color', 'blue');
    });
    $('#restartej2').click(function(){
        $('.capa1, .capa2').css('background-color', 'unset');
    });

    //EJEMPLO 3
    $('.clase1, .clase3').click(function(){
        $('.clase1, .clase3').css('background-color', 'red');
    });
    $('.clase2, .clase4').click(function(){
        $('.clase2, .clase4').css('background-color', 'blue');
    });
    $('#restartej3').click(function(){
        $('.clase1, .clase2, .clase3, .clase4').css('background-color', 'unset');
    });

    //EJEMPLO 4
    $('#firstchildex4').click(function(){
        $("#example4 p:first-child").css("background-color", "yellow");
    });
    $('#example4reset').click(function(){
        $("#example4 p:first-child").css("background-color", "unset");
    });

    //EJEMPLO 5
    $('#firstchildAex5').click(function(){
        $('#example5 a:first-of-type').css("background-color", "yellow");
    });
    $('#firstchildPex5').click(function(){
        $('#example5 p:first-of-type').css("background-color", "red");
    });
    $('#example5reset').click(function(){
        $('#example5 a:first-of-type').css("background-color", "unset");
        $('#example5 p:first-of-type').css("background-color", "unset");
    });

    //EJEMPLO 6
    $('#lastchildex6').click(function(){
        $('#example6 p:last-child').css("background-color", "yellow");
    });
    $('#example6reset').click(function(){
        $('#example6 p:last-child').css("background-color", "unset");
    });

    //EJEMPLO 7
    $('#lastchildAex7').click(function(){
        $('#example7 a:last-of-type').css("background-color", "yellow");
    });
    $('#lastchildPex7').click(function(){
        $('#example7 p:last-of-type').css("background-color", "red");
    });
    $('#example7reset').click(function(){
        $('#example7 a:last-of-type').css("background-color", "unset");
        $('#example7 p:last-of-type').css("background-color", "unset");
    });

    //EJEMPLO 8
    $('#ex8button').click(function(){
        $('#example8 p:nth-child(2)').css("background-color", "yellow");
    });
    $('#example8reset').click(function(){
        $('#example8 p:nth-child(2)').css("background-color", "unset");
    });

    //EJEMPLO 9
    $('#ex9button1').click(function(){
        $('#example9 p:nth-last-child(3)').css("background-color", "unset");
        $('#example9 p:nth-last-child(2)').css("background-color", "yellow");
    });
    $('#ex9button2').click(function(){
        $('#example9 p:nth-last-child(2)').css("background-color", "unset");
        $('#example9 p:nth-last-child(3)').css("background-color", "yellow");
    });
    $('#example9reset').click(function(){
        $('#example9 p:nth-last-child(2), #example9 p:nth-last-child(3)').css("background-color", "unset");
    });

    //EJEMPLO 10
    $('#ex10button1').click(function(){
        $('#example10 a:nth-last-of-type(2)').css("background-color", "unset");
        $('#example10 p:nth-last-of-type(2)').css("background-color", "yellow");
    });
    $('#ex10button2').click(function(){
        $('#example10 p:nth-last-of-type(2)').css("background-color", "unset");
        $('#example10 a:nth-last-of-type(2)').css("background-color", "yellow");
    });
    $('#example10reset').click(function(){
        $('#example10 p:nth-last-of-type(2), #example10 a:nth-last-of-type(2)').css("background-color", "unset");
    });
    
});