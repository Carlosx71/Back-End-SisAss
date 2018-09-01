/*Script de autênticação de login
--------------------------------------------------------------------*/
function validarLogin(){

    var usuario = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var done = 0;

    if (usuario == "admin@admin" && senha == "admin") {
        
        window.location = "index.html";
        done = 1;
    } if (done == 0) {

        alert("Usuário ou senha incorretos"+ usuario + senha);
    }
}