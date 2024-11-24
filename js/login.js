import { createClient } from '@supabase/supabase-js';
// Configuración de Supabase
const supabaseUrl = 'https://ojttvkkrabmwqpwjptoz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qdHR2a2tyYWJtd3Fwd2pwdG96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMTA5NzMsImV4cCI6MjA0Nzg4Njk3M30.br1r-8cpAeXJIBz2CsIRT5bge4qwJ7jC9qzI401xegA'
const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', () => {
    const bcrypt = window.bcrypt;
    if (!bcrypt) {
        console.error("bcrypt no está disponible");
        return;
    }

    // **Inicio de sesión**
    document.querySelector(".submitUsuario").addEventListener("click", async (e) => {
        e.preventDefault();

        const usuario = document.querySelector(".usuario").value;
        const contraseña = document.querySelector(".contraseña").value;

        if (usuario && contraseña) {
            const { data, error } = await supabase.from("user").select("*").eq("user", usuario);

            if (error || !data || data.length === 0) {
                alert("Usuario no encontrado");
            } else {
                const user = data[0];
                const validPassword = bcrypt.compareSync(contraseña, user.password);

                if (validPassword) {
                    alert("Inicio de sesión exitoso");
                    console.log("Bienvenido, " + user.tipo);
                } else {
                    alert("Contraseña incorrecta");
                }
            }
        } else {
            alert("Por favor, completa todos los campos");
        }
    });
});
