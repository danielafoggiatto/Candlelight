document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const produto = params.get('produto');
  const produtoDados = dados[produto];

  if (produtoDados) {
    document.getElementById('detalhe-produto').innerHTML = `

      <div class="container mt-5">
        <div class="card mx-auto d-flex border-0" style="max-width: 900px;">
          <div class="row g-0 align-items-center ">

            <div class="col-md-7 d-flex justify-content-center ">
              <img src="${produtoDados.imagem}" id="img-big" class="img-fluid rounded-start" alt="${produtoDados.nome}" style="max-height: 400px; max-width: 450px; object-fit: cover;">
            </div>

            <div class="col-md-5  d-flex align-items-center justify-content-center">
              <div class="card-body text-center ps-sm-5 p-2">
                <h5 class="card-title">${produtoDados.nome}</h5>
                <p class="card-text">${produtoDados.descricao}</p>
                <a href="#" class="btn btn-success">Adicionar ao Carrinho</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center m-3 m-lg-5 py-md-2">
        <button type="button" class="btn btn-outline-success" onclick="history.back()">
          ← Voltar
        </button>
      </div>
    `;
  } 
});

const style = document.createElement('style');
style.innerHTML = `
  #img-big:hover {
    transform: scale(1.45);
    transition: transform 0.5s linear;
    cursor: zoom-in;
    border-radius: 2%;
  }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
  fetch('/interface/carrossel.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('carrosel-inicio').innerHTML = html;

      document.querySelectorAll('#carrosel-inicio .card img').forEach(img => {
        img.addEventListener('click', () => {
          const produto = img.dataset.produto;
          if (produto) {
            window.location.href = `detalhes.html?produto=${produto}`;
          }
        });
        img.style.cursor = 'pointer';
      }); 
    })
    .catch(error => {
      console.error('Erro ao carregar o carrossel:', error);
      document.getElementById('carrosel-inicio').innerHTML = '<p>Erro ao carregar carrossel.</p>';
    });
});

    