let bntList = document.getElementById('bnt-list');
let bntList2 = document.getElementById('bnt-list');
let recebido = document.getElementById('inlineRadio1');
let enviado = document.getElementById('inlineRadio2');
let inputID = document.getElementById('inputID');


bntList.addEventListener('click', async () => {
  let userid = inputID.value;

  let type = '';
  if (enviado.checked) {
    type = 'sent'
  } else if (recebido.checked) {
    type = 'received'
  }
  let response = await fetch(`http://localhost:4000/pix/${userid}/${type}`);
  let infos = await response.json();
  console.log(infos)
  return infos;
  });
