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

    // const response = await fetch('http://177.44.248.24/pix-api/pix', {
    const response = await fetch(`http://localhost:4000/sendpix/${senderId}/${recipientId}/${value}`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
  })};
