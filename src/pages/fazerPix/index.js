let remetenteID = document.getElementById('remetenteID');
let destinatarioID = document.getElementById('destinatarioID');
let valor = document.getElementById('valor');
let button = document.getElementById('button');


button.addEventListener('click', async () => {

  let response = await fetch(`http://localhost:4000/sendpix/:senderid/:recipientid/:value'`);
  let infos = await response.json();
  console.log(infos)
  return infos;
  });
