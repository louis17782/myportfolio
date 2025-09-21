const form = document.getElementById('contact-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      const response = await fetch('https://express-mailer-production.up.railway.app', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'luissanteliz22@gmail.com',
          subject: `Nuevo mensaje de ${name}`,
          text: `Email: ${email}\n\nMensaje:\n${message}`
        })
      });

      const result = await response.text();
      if (response.ok) {
        alert('✅ Mensaje enviado con éxito');
        form.reset();
      } else {
        alert('❌ Error al enviar el mensaje: ' + result);
      }
    } catch (err) {
      console.error('Error:', err);
      alert('⚠️ Hubo un problema al enviar el mensaje');
    }
  });