let bntList = document.getElementById('bnt-list');
let bntListUsers = document.getElementById('bnt-listUsers');
let recebido = document.getElementById('inlineRadio1');
let enviado = document.getElementById('inlineRadio2');
let inputID = document.getElementById('inputID');
let corpoTabela = document.getElementById('corpo-tabela');
let listAll = document.getElementById('bnt-list-all');



bntListUsers.addEventListener('click', async () => {
while (corpoTabela.firstChild) {
  corpoTabela.removeChild(corpoTabela.firstChild);
}

let response = await fetch(`http://localhost:4000/list`);
let infos = await response.json();

for (let info of infos) {
  let tr = document.createElement('tr');
  let tdId = document.createElement('td');
  let tdName = document.createElement('td');
  let tdCreatedAt = document.createElement('td');
  let tdUpdatedAt = document.createElement('td');
  
  tdId.innerText = info.id;
  tdName.innerText = info.name;
  tdCreatedAt.innerText = info.createdAt;
  tdUpdatedAt.innerText = info.updatedAt;

  tr.appendChild(tdId);
  tr.appendChild(tdName);
  tr.appendChild(tdCreatedAt);
  tr.appendChild(tdUpdatedAt);

  corpoTabela.appendChild(tr);

}

console.log(infos)
return infos;
});

bntList.addEventListener('click', async () => {

  while (corpoTabela.firstChild) {
    corpoTabela.removeChild(corpoTabela.firstChild);
  }

  let userid = inputID.value;

  let type = '';
  if (enviado.checked) {
    type = 'sent'
  } else if (recebido.checked) {
    type = 'received'
  }

  let response = await fetch(`http://localhost:4000/pix/${userid}/${type}`);
  let infos = await response.json();

  for (let info of infos) {
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdCreatedAt = document.createElement('td');
    let tdUpdatedAt = document.createElement('td');
    let tdValue = document.createElement('td');
    let tdIdRecebedor = document.createElement('td');
    let tdNomeRecebedor = document.createElement('td');
    let tdIdEnvio = document.createElement('td');
    let tdNomeEnvio = document.createElement('td');
    


    tdId.innerText = info.id;

    if (info.name !== undefined) {
      tdName.innerText = info.name;
    } else {
      tdName.innerText = 'Nome não disponível';
    }  
    
    tdCreatedAt.innerText = info.createdAt;
    tdUpdatedAt.innerText = info.updatedAt;
    tdValue.innerText = info.value;
    tdIdRecebedor.innerText = info.recipient.id;
    tdNomeRecebedor.innerText = info.recipient.name;
    tdIdEnvio.innerText = info.sender.id;
    tdNomeEnvio.innerText = info.sender.name;



    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdUpdatedAt);
    tr.appendChild(tdValue);
    tr.appendChild(tdIdRecebedor);
    tr.appendChild(tdNomeRecebedor);
    tr.appendChild(tdIdEnvio);
    tr.appendChild(tdNomeEnvio);



    corpoTabela.appendChild(tr);

  }


  console.log(infos)
  return infos;
  });

  listAll.addEventListener('click', async () => {

    while (corpoTabela.firstChild) {
      corpoTabela.removeChild(corpoTabela.firstChild);
    }

    let response = await fetch(`http://localhost:4000/listpix`);
    let infos = await response.json();


    
  for (let info of infos) {
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdCreatedAt = document.createElement('td');
    let tdUpdatedAt = document.createElement('td');
    let tdValue = document.createElement('td');
    let tdIdRecebedor = document.createElement('td');
    let tdNomeRecebedor = document.createElement('td');
    let tdIdEnvio = document.createElement('td');
    let tdNomeEnvio = document.createElement('td');
    



    tdId.innerText = info.id;

    if (info.name !== undefined) {
      tdName.innerText = info.name;
    } else {
      tdName.innerText = 'Nome não disponível';
    }

    tdCreatedAt.innerText = info.createdAt;
    tdUpdatedAt.innerText = info.updatedAt;
    tdValue.innerText = info.value;
    tdIdRecebedor.innerText = info.recipient.id;
    tdNomeRecebedor.innerText = info.recipient.name;
    tdIdEnvio.innerText = info.sender.id;
    tdNomeEnvio.innerText = info.sender.name;



    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdUpdatedAt);
    tr.appendChild(tdValue);
    tr.appendChild(tdIdRecebedor);
    tr.appendChild(tdNomeRecebedor);
    tr.appendChild(tdIdEnvio);
    tr.appendChild(tdNomeEnvio);



    corpoTabela.appendChild(tr);

  }

  })
