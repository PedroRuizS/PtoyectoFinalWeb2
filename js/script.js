
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ojttvkkrabmwqpwjptoz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qdHR2a2tyYWJtd3Fwd2pwdG96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMTA5NzMsImV4cCI6MjA0Nzg4Njk3M30.br1r-8cpAeXJIBz2CsIRT5bge4qwJ7jC9qzI401xegA'
const supabase = createClient(supabaseUrl, supabaseKey)




const registroUsuario = document.getElementById("registroUsuario").value;
const registroContraseña = document.getElementById("registroContraseña").value;
const registroRol = document.getElementById("registroRol").value;
const usuario = document.querySelector(".usuario").value;
const contraseña = document.querySelector(".contraseña").value;


//si se le da click a crear cuenta sale el de crear cuenta
document.querySelector(".crearCuenta").addEventListener('click', function() {
    document.getElementById('loginDiv').style.display = 'none';
    document.getElementById('registroDiv').style.display = 'block';  
});
// si se le da click a inicio de sesion regresa el div de inicio de sesion 
document.querySelector(".inicioSesion").addEventListener('click', function() {
    document.getElementById('loginDiv').style.display = 'block';
    document.getElementById('registroDiv').style.display = 'none';  
});


//SIGN UPPPPP
document.querySelector(".submitRegistro").addEventListener("click", async function (e) {
    e.preventDefault();

    const registroUsuario = document.getElementById("registroUsuario").value;
    const registroContraseña = document.getElementById("registroContraseña").value;
    const registroRol = document.getElementById("registroRol").value;

    if (registroUsuario && registroContraseña) {
        // Hashear la contraseña
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(registroContraseña, salt);

        // Crear usuario en Supabase
        let { data, error } = await supabase.from("usuarios").insert({
            email: registroUsuario,
            password: hashedPassword,
            role: registroRol,
        });

        if (error) {
            console.error("Error al registrar usuario:", error.message);
            alert("Error al registrar usuario: " + error.message);
        } else {
            alert("Usuario registrado con éxito");
            document.getElementById('registroDiv').style.display = 'none';
            document.getElementById('loginDiv').style.display = 'block';
        }
    } else {
        alert("Por favor, completa todos los campos");
    }
});