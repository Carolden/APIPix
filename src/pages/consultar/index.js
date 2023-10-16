let bntList = document.getElementById('bnt-list');

bntList.addEventListener('click', async () => {
let response = await fetch(`http://localhost:4000/batata`);
let infos = await response.json();
console.log(infos)
return infos;
});

