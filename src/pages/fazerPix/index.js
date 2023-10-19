let remetenteID = document.getElementById('remetenteID');
let destinatarioID = document.getElementById('destinatarioID');
let valor = document.getElementById('valor');
let enviar = document.getElementById('enviar');
let corpoTabela = document.getElementById('corpo-tabela');


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

      let tr = document.createElement('tr');
      let tdId = document.createElement('td');
      let tdValor = document.createElement('td');
      let tdSenderId = document.createElement('td');
      let tdRecipientId = document.createElement('td');
      let tdCreatedAt = document.createElement('td');
      let tdUpdatedAt = document.createElement('td');

      tdId.innerText = data.id;
      tdValor.innerText = data.value;
      tdSenderId.innerText = data.senderId;
      tdRecipientId.innerText = data.recipientId;
      tdUpdatedAt.innerText = data.updatedAt;
      tdCreatedAt.innerText = data.createdAt;

      tr.appendChild(tdId);
      tr.appendChild(tdValor);
      tr.appendChild(tdSenderId);
      tr.appendChild(tdRecipientId);
      tr.appendChild(tdUpdatedAt);
      tr.appendChild(tdCreatedAt);

      corpoTabela.appendChild(tr);



  })};
