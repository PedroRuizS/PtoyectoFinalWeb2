const usuario = document.querySelector(".usuario");
const contraseña = document.querySelector(".contraseña");

document.querySelector(".crearCuenta").addEventListener('click', function() {
    document.getElementById('loginDiv').style.display= 'none';
    document.getElementById('crearCuentaDiv').style.display= 'block';  
});