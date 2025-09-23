const form = document.getElementById('contact-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      const response = await fetch('https://express-mailer-production.up.railway.app/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: `Nuevo mensaje de ${name}`,
          text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
        })
      });

      const result = await response.text();
      if (response.ok) {
        const confirmation = document.createElement('div');
        confirmation.innerHTML = `
        <div id="confirmation-message" style="
          background-color: #d4edda;
          color: #155724;
          padding: 15px;
          margin-top: 20px;
          border: 1px solid #c3e6cb;
          border-radius: 5px;
          font-family: Arial, sans-serif;
          animation: fadeIn 0.5s ease-in-out;
          ">
          ✅ ¡Tu mensaje ha sido enviado con éxito!
        </div>
        `;
        form.parentElement.appendChild(confirmation);
        setTimeout(() => {
          confirmation.remove();
        }, 5000);
        form.reset();
      } else {
        alert('❌ Error al enviar el mensaje: ' + result);
      }
    } catch (err) {
      console.error('Error:', err);
      alert('⚠️ Hubo un problema al enviar el mensaje');
    }
  });