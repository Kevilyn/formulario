const formulario = document.querySelector("form");
const contas = document.querySelector("main");
const contasCriadas = [];

formulario.addEventListener("submit", function (event) {
  const dados = Object.fromEntries(new FormData(formulario).entries());

  adicionarCard(dados);
  event.preventDefault();
  this.reset();
});

function adicionarCard(dados) {
  contasCriadas.push(dados);

  contas.innerHTML = "";
  contasCriadas.forEach((conta) => {
    const card = document.createElement("div");

    card.innerHTML = 
    `<h2> ${conta.Titulo}    </h2>
    <p> ${conta.Data}</p>
    <p> ${conta.Email}</p>
    <img src="${conta.Link}">
    <p>  ${conta.Descricao}</p>`;

    card.setAttribute("class", "card");
    contas.appendChild(card);

    let primeiroPost = contas.firstChild;
    contas.insertBefore(card, primeiroPost);
  });
}

function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}