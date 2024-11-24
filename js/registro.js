import { createClient } from '@supabase/supabase-js';
// Configuración de Supabase
const supabaseUrl = 'https://ojttvkkrabmwqpwjptoz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qdHR2a2tyYWJtd3Fwd2pwdG96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMTA5NzMsImV4cCI6MjA0Nzg4Njk3M30.br1r-8cpAeXJIBz2CsIRT5bge4qwJ7jC9qzI401xegA'
const supabase = createClient(supabaseUrl, supabaseKey);

document.querySelector(".submitRegistro").addEventListener("click", async (e) => {
    e.preventDefault();
  
    const registroUsuario = document.getElementById("registroUsuario").value;
    const registroContraseña = document.getElementById("registroContraseña").value;
    const registroRol = document.getElementById("registroRol").value;
  
    if (registroUsuario && registroContraseña && registroRol) {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(registroContraseña, salt);
  
      const { error } = await supabase
        .from("user")
        .insert([
          {
            user: registroUsuario,
            password: hashPassword,
            tipo: registroRol,
          },
        ]);
  
      if (error) {
        if (error.code === '23505') {
          alert("El usuario ya existe");
        } else {
          alert("Error al registrar usuario: " + error.message);
        }
      } else {
        alert("Usuario registrado con éxito");
        window.location.href = "login.html";
      }
    } else {
      alert("Por favor, completa todos los campos");
    }
  });
  