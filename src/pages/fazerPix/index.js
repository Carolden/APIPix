let remetenteID = document.getElementById('remetenteID');
let destinatarioID = document.getElementById('destinatarioID');
let valor = document.getElementById('valor');
let enviar = document.getElementById('enviar');


if (enviar) {
enviar.addEventListener('click', async () => {

    const requestBody = {
      senderId: remetenteID.value,
      recipientId: destinatarioID.value,
      value: valor.value
    }

    const response = await fetch(`http://localhost:4000/sendpix`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
  })};
