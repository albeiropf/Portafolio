$(document).ready(function () {
    $("#contactForm").on("submit", function (e) {
      e.preventDefault(); // Evita el envío predeterminado del formulario
  
      // Obtener los valores del formulario
      const name = $("#name").val();
      const email = $("#email").val();
      const message = $("#message").val();
  
      // Verificar que los campos no estén vacíos
      if (name === "" || email === "" || message === "") {
        $("#statusMessage").text("Por favor, completa todos los campos.").css("color", "red");
        return;
      }
  
      // Enviar datos a través de EmailJS
      emailjs.send("service_opvb46c", "template_b7ameqa", { // colocar las claves que me hacen falta del aplicativo primero service 
        name: name,
        email: email,
        message: message,
      })
      .then(function (response) {
        $("#statusMessage").text("Mensaje enviado con éxito.").css("color", "green");
        $("#contactForm")[0].reset(); // Limpiar el formulario
      })
      .catch(function (error) {
        console.error("Error:", error);
        $("#statusMessage").text("Ocurrió un error. Intenta de nuevo.").css("color", "red");
      });
    });
  });