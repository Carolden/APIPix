/*
Crie uma página da web simples com um campo de entrada onde os usuários
podem inserir o ISBN do livro e um botão "Buscar" para iniciar a busca;
Utilize a documentação da API fornecida para realizar a(s) requisição(ões) necessária(s) para obter os dados do ISBN informado;
Lide com a resposta da API para extrair as informações do livro, incluindo título, autor(es), editora, sinopse, etc. Certifique-se de lidar com possíveis casos em que a resposta possa não conter todas as informações;
As informações deverão ser exibidas na tela através de elementos como parágrafos, divs e spans, para mostrar os dados de maneira organizada. Exiba também a imagem da capa do livro, se disponível na resposta da API;
Estilize a página e os elementos HTML para melhorar a apresentação e a
experiência do usuário. Use CSS para formatar o texto, ajustar o layout e
tornar a página atraente;
Teste a funcionalidade da página inserindo diferentes números ISBN para
garantir que a busca e a exibição das informações do livro funcionem
corretamente;
*/


let isbn = document.querySelector('.isbn');
let button = document.querySelector('.button');
let displayTitle = document.querySelector('.displayTitle');
let displaySubtitle = document.querySelector('.displaySubtitle');
let displayAuthor = document.querySelector('.displayAuthor');
let displaySinopse = document.querySelector('.displaySinopse');
let displayEditora = document.querySelector('.displayEditora');







async function getIsbn (code) {
  let response = await fetch(`https://brasilapi.com.br/api/isbn/v1/${code}`);
  let infos = await response.json();
  return infos;
}

button.addEventListener('click', () => {
    setIsbn(isbn.value);    
});

async function setIsbn (code) {
    let livro = await getIsbn(code);

    if(livro.subtitle == null || undefined) {
        displaySubtitle.innerHTML = " SUBTITULO: NÃO ENCONTRADO";
    } else {
        displaySubtitle.innerHTML = " SUBTITULO: " + livro.subtitle;
    }

    if(livro.title == null || undefined) {
        displayTitle.innerHTML = " TITULO: NÃO ENCONTRADO";
    } else {
        displayTitle.innerHTML = "TITULO: " +  livro.title;
    }

    if(livro.authors == null || undefined) {
        displayAuthor.innerHTML = " AUTOR: NÃO ENCONTRADO";
    } else {
        displayAuthor.innerHTML = "AUTOR: " + livro.authors;
    }

    
    if(livro.synopsis == null || undefined) {
        displaySinopse.innerHTML = " SINOPSE: NÃO ENCONTRADA";
    } else {
        displaySinopse.innerHTML = "SINOPSE: " + livro.synopsis;
    }

    if(livro.publisher == null || undefined) {
        displayEditora.innerHTML = " EDITORA: NÃO ENCONTRADA";
    } else {
        displayEditora.innerHTML = "EDITORA: " + livro.publisher;
    }
    
}


