const formulario = document.querySelector("form");
const contas = document.querySelector(".container2");
const contasCriadas = [];

formulario.addEventListener("submit", function (event) {
  const dados = Object.fromEntries(new FormData(formulario).entries());

  adicionarCard(dados);
  event.preventDefault();
  this.reset()

});

function adicionarCard(dados) {
  contasCriadas.push(dados);

  contas.innerHTML = "";
  contasCriadas.forEach((conta) => {
    const card = document.createElement("div");
    
    card.innerHTML = 
    `<p> ${conta.Titulo}    </p>
    <p> ${conta.Email}      </p>
    <div class="imagem"><img src="${conta.Link}"></img></div>
    <p>  ${conta.Descricao}  </p>`
   
    card.setAttribute("class", "card");
    contas.appendChild(card);
    
    let primeiroPost = contas.firstChild;
    contas.insertBefore(card, primeiroPost)
  });
}

