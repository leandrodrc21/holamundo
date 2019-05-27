$(document).ready(function() {
    onClick();
});

function onClick() {
    $("#recuperarPass").on("click", function() {
        var correo = $("#usuario").val();
        if (validarEspaciosVacios(correo)) {
            var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
            if (regex.test($('#usuario').val().trim())) {
                /*    const parametros = {
                       correo: correo,
                       action: "actualizar"
                   };
                 const url = "https://www.humanword.tk/webServices/aplicativo/cambiarPass.php";*/
                $(".pesonaM").hide();
                // $.post(url, parametros, function(data, status) {
                //   alert(status);
                // });
                /*  var parametros = {
                     correo: correo,
                     action: "actualizar"
                 };
                 $.ajax({
                     type: "POST",
                     crossDomain: true,
                     cache: false,
                     url: "https://www.humanword.tk/webServices/aplicativo/cambiarPass.php",
                     data: parametros,
                     success: function(data) {
                        alert(data);
                     }
                 });*/
            

       


             $.ajax({
 type: "GET",
 url:"https://ejmploos.000webhostapp.com/webServices/aplicativo/cambiarPass.php",
 data: dataString,
 crossDomain: true,
 cache: false,
 beforeSend: function(){ $("#delete").val('Connecting...');},
 success: function(data){
 if(data=="success")
 {
 alert("Deleted");
 
 }
 else if(data=="error")
 {
 alert("error");
 }
 }
 });
 
            } else {
                alert('La direccón de correo no es válida');
            }
            //$.mobile.changePage('#pageError', 'pop', true, true);
        }
    });
}

function ajax(url, data) {
    var ajax = $.ajax({
        "method": "GET",
        "url": url,
        "data": data
    })
    return ajax;
}

function validarEspaciosVacios(texto) {
    var text = texto.trim();
    if (text.length == 0) {
        return false;
    } else {
        return true;
    }
}