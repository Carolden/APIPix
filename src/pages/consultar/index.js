let bntList = document.getElementById('bnt-list');

bntList.addEventListener('click', async () => {
  let res = await fetch('http://localhost:3000/batata');
  console.log(res.json);
});
