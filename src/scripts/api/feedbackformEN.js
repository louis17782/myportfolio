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
          name: name,
          email: email,
          message: message,
          subject: `Nuevo mensaje de ${name}`,
          text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
        })
      });

      const result = await response.text();
      if (response.ok) {
        const confirmation = document.createElement('div');
        confirmation.innerHTML = `
        <div id="confirmation-message" style="
          background-color: #090C14;
          color: #ffa500;
          padding: 15px;
          margin-top: 20px;
          border: 1px solid #d38d0a;;
          border-radius: 5px;
          font-family: Arial, sans-serif;
          animation: fadeIn 0.5s ease-in-out;
          ">
          ✅ Your message has been sent successfully!
        </div>
        `;
        form.parentElement.appendChild(confirmation);
        setTimeout(() => {
          confirmation.remove();
        }, 5000);
        form.reset();
      } else {
        alert('❌ Failed to send your message: ' + result);
      }
    } catch (err) {
      console.error('Error:', err);
      alert('⚠️ There was a problem sending your message');
    }
  });