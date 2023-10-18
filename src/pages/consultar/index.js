let bntList = document.getElementById('bnt-list');
let bntList2 = document.getElementById('bnt-list');


// bntList.addEventListener('click', async () => {
// let response = await fetch(`http://localhost:4000/list`);
// let infos = await response.json();
// console.log(infos)
// return infos;
// });

bntList.addEventListener('click', async () => {
  let userid = 3; //TRAZER DO HTML O COMPONENTE
  let type = 'sent'; //TRAZER DO HTML O COMPONENTE
  let response = await fetch(`http://localhost:4000/pix/${userid}/${type}`);
  let infos = await response.json();
  console.log(infos)
  return infos;
  });
