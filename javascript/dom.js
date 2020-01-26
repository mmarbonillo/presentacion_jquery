$().ready(function(){
    //EJEMPLO 1
    $('#example1button').click(function(){
        $('p.ex01').removeClass('fondoazul').addClass('rojo');
    });
    $('#example1button2').click(function(){
        $('p.ex01').removeClass('rojo').addClass('fondoazul');
    });
    $('#example1button3').click(function(){
        $('p.ex01').removeClass('rojo fondoazul')
        $('p.ex01').toggleClass('rojoyazul');
    });

    //EJEMPLO 2
    $('#example2button').click(function(){
        $('.capaex2 > p').before('<p class="ex2new">Párrafo before</p>');
    });
    $('#example2button2').click(function(){
        $('<p class="ex2new">Párrafo insertAfter</p>').insertAfter('.capaex2 > p');
    });
    $('#example2button3').click(function(){
        $('.capaex2').prepend('<p class="ex2new">Párrafo prepend</p>');
    });
    $('#example2button4').click(function(){
        $('<p class="ex2new">Párrafo appendTo</p>').appendTo('.capaex2');
    });
    $('#example2button5').click(function(){
        $('p.ex2new').replaceWith('<a class="ex2new" href="#">Enlace de reemplazo');
    });
    $('#example2button6').click(function(){
        alert($('div.capaex2').text());
    });
    $('#example2button7').click(function(){
        $('.capaex2').empty();
    });
    $('#example2reset').click(function(){
        $('.ex2new').remove();
    });

    //EJEMPLO 2.2
    $('#example22button1').click(function(){
        var value = $('#example22input').val();
        $('#contentex22').append('<p>' + value +'</p>');
        $('#example22input').val('');
    });
    $('#example22button2').click(function(){
        var value = $('#example22input').val();
        $('#contentex22 > p').text(value);
        $('#example22input').val('');
    });
    $('#example22button3').click(function(){
        var value = $('#content22 > *').html();
        $('#contentex22').empty();
        $('#contentex22').text(value);
        $('#example22input').val('');
    });

    //EJEMPLO 3
    $('#example3button').click(function(){
        alert("Atributo checked = " + $("#radio2").attr("checked") + "\n" + "Propiedad checked = " + $("#radio2").prop("checked"));
    });
    $('#example3button2').click(function(){
        alert("Atributo name = " + $("#radio2").attr("name") + "\n" + "Propiedad name = " + $("#radio2").prop("name"));
    });
    $('#example3button3').click(function(){
        var atributo = $('#attrex3').val();
        var valor = $('#valex3').val();
        $('#parrafoex3').css(atributo, valor);
        $('#attrex3').val('');
        $('#valex3').val('');
    });
    $('#eye').click(function(){
        $('#difpropattr').toggle(1000);
    });

    //EJEMPLO4
    $('#example4button1').click(function(){
        var height = $('#capaex4').height(); 
        var innerHeight = $('#capaex4').innerHeight();
        var outerHeight = $('#capaex4').outerHeight();
        alert("Height: " + height + "\n" + "InnerHeight: " + innerHeight + 
        "\n" + "OuterHeight: " + outerHeight);
    });
    $('#example4button2').click(function(){
        var width = $('#capa2ex4').width();
        var innerWidth = $('#capa2ex4').innerWidth();
        var outerWidth = $('#capa2ex4').outerWidth();
        alert("Width: " + width + "\n" + "InnerWidth: " + innerWidth + 
        "\n" + "OuterWidth: " + outerWidth);
    });

    //EJEMPLO 5
    $('#example5button1').click(function(){
        $('#capaex5 > *').wrap( "<div class='new'><p>Capa WRAP</p></div>" );
    });
    $('#example5button2').click(function(){
        $('#capaex5 > *').wrapAll( "<div class='new'><p>Capa WRAPALL</p></div>" );
    });
    $('#example5button3').click(function(){
        $('#capaex5 > *').wrapInner( "<div class='newinner new'><p>Capa WRAPINNER</p></div>" );
    });
    $('#example5button4').click(function(){
        $('#capaex5 > *').unwrap();
    });

});