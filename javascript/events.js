var enter1 = 0;
var leave1 = 0;
var enter2 = 0;
var leave2 = 0;
var over1 = 0;
var out1 = 0;
var over2 = 0;
var out2 = 0;

$().ready(function () {
    
    //EJEMPLO 1
    $('#padre1example1').on({
        mouseenter: function(){
            enter1++;
            $("#p1").text("MouseEnter: " + enter1);
        },
        mouseleave: function(){
            leave1++;
            $("#p2").text("Mouseleave: " + leave1);
        }
    });
    $('#hijo1example1').on({
        mouseenter: function(){
            enter2++;
            $('#p3').text("Mouseenter: " + enter2);
        },
        mouseleave: function(){
            leave2++;
            $('#p4').text("Mouseleave: " + leave2);
        }
    });

    $('#padre2example1').on({
        mouseover: function(){
            over1++;
            $('#p5').text("Mouseover: " + over1);
        },
        mouseout: function(){
            out1++;
            $('#p6').text("Mouseout: " + out1);
        }
    });
    $('#hijo2example1').on({
        mouseover: function(){
            over2++;
            $('#p7').text("Mouseover: " + over2);
        },
        mouseout: function(){
            out2++;
            $('#p8').text("Mouseout: " + out2);
        }
    });

    //EJEMPLO 2
    $('#inputex2').on({
        keydown: function(){
            $('#kp, #ku').css('background-color', 'unset');
            $('#kd').css('background-color', 'blue');
        },
        keypress: function(){
            $('#kd, #ku').css('background-color', 'unset');
            $('#kp').css('background-color', 'blue');
        },
        keyup: function(){
            $('#kd, #kp').css('background-color', 'unset');
            $('#ku').css('background-color', 'blue');
        }
    });

    /* EJEMPLO 3 */
    $('#inputex3').on({
        focusin: function(){
            $("#capa1ex3").append("<p>Input1: FocusIn</p>");
        },
        focusout: function(){
            $("#capa1ex3").append("<p>Input1: FocusOut</p>");
        },
        focus: function(){
            $("#capa1ex3").append("<p>Input1: Focus</p>");
        },
        blur: function(){
            $("#capa1ex3").append("<p>Input1: Blur</p>");
        },
        change: function(){
            alert('change');
        }
    });
    $('#input2ex3').on({
        focusin: function(){
            $("#capa2ex3").append("<p>Input2: FocusIn</p>");
        },
        focusout: function(){
            $("#capa2ex3").append("<p>Input2: FocusOut</p>");
        },
        focus: function(){
            $("#capa2ex3").append("<p>Input2: Focus</p>");
        },
        blur: function(){
            $("#capa2ex3").append("<p>Input2: Blur</p>");
        },
        change: function(){
            alert("chage");
        }
    });
    $('#capa1ex3').on({
        focusin: function(){
            $("#capa1ex3").append("<p>Capa1: FocusIn</p>");
        },
        focusout: function(){
            $("#capa1ex3").append("<p>Capa1: FocusOut</p>");
        },
        focus: function(){
            $("#capa1ex3").append("<p>Capa1: Focus</p>");
        },
        blur: function(){
            $("#capa1ex3").append("<p>Capa1: Blur</p>");
        }
    });
    $('#capa2ex3').on({
        focusin: function(){
            $("#capa2ex3").append("<p>Capa2: FocusIn</p>");
        },
        focusout: function(){
            $("#capa2ex3").append("<p>Capa2: FocusOut</p>");
        },
        focus: function(){
            $("#capa2ex3").append("<p>Capa2: Focus</p>");
        },
        blur: function(){
            $("#capa2ex3").append("<p>Capa2: Blur</p>");
        }
    });

    $('#selectex3').change(function(){
        $('#valueselect').text( $(this).val());
    });
    $('#inputchangeex3').change(function(){
        $('#valueinputex3').text($('#inputchangeex3').val());
    });

    $('#inputex3select').select(function(){
        $('#valueinputselectex3').fadeIn(200).delay(700).fadeOut(200);
    });

    $('#formex3').submit(function(){
        alert("Formulario enviado :D");
    });

    //EJEMPLO 4
    $(window).unload(function(){
        alert("hola");
    });

});