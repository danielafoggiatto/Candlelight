
const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menuItems.forEach(i => i.classList.remove('selected'));
      
      item.classList.add('selected');
    });
  });

document.addEventListener('DOMContentLoaded', () =>{
  fetch('/interface/navbar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar').innerHTML = html;
      
      const btnLupa = document.getElementById('btn-lupa');
      const campoPesquisa = document.querySelector('#barra-pesquisa input');
      const botaoPesquisa = document.querySelector('#barra-pesquisa button');
      const barraPesquisa = document.getElementById('barra-pesquisa');

      if (btnLupa) {
        btnLupa.addEventListener('click', (e) => {
          campoPesquisa.classList.toggle('d-none');
          botaoPesquisa.classList.toggle('d-none');
          campoPesquisa.focus();
          e.stopPropagation();
        });

        document.addEventListener('click', (e) => {
          if (!barraPesquisa.contains(e.target) && !btnLupa.contains(e.target)) {
            campoPesquisa.classList.add('d-none');
            botaoPesquisa.classList.add('d-none');
          }
        });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            campoPesquisa.classList.add('d-none');
            botaoPesquisa.classList.add('d-none');
          }
        });
      }

      const botaoCarrinho = document.querySelectorAll('.carrinhodecompras');
      botaoCarrinho.forEach(botao => {
        botao.style.cursor = 'pointer';
        botao.addEventListener('click', () => {
          window.location.href = '/interface/carrinho.html';
        });
      });

      const login = document.querySelector('#login-cadastro');
      if (login) {
        login.addEventListener('click', () => {
          window.location.href = '/interface/login.html';
        });
      }
    })
    .catch(error => {
      console.error('Erro ao carregar a navbar:', error);
  });

    
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/index') {
    fetch('/interface/home.html')
      .then(response => response.text())  
      .then(data => {
        const conteudo = document.getElementById('conteudo');
        if (conteudo) conteudo.innerHTML = data;
      })
      .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
    });
  }



  fetch('/interface/carrossel.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('carrosel-inicio').innerHTML = html;

      document.querySelectorAll('#carrosel-inicio .card img').forEach(img => {
        img.addEventListener('click', () => {
          const produto = img.dataset.produto;
          if (produto) {
            window.location.href = `/interface/detalhes.html?produto=${produto}`;
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

function carregarConteudo(pagina){
  var conteudo = document.getElementById('conteudo');
  
  switch (pagina){
    case 'home':
    {
      fetch('/interface/home.html')
        .then(response => response.text())
        .then(data => {
          const detalheProduto = document.getElementById('detalhe-produto');
          if (detalheProduto) detalheProduto.innerHTML = '';

          const carrosselInicio = document.getElementById('carrosel-inicio');
          if (carrosselInicio) carrosselInicio.innerHTML = '';

          conteudo.innerHTML = data;
          adicionarEventosCards();

          fetch('/interface/carrossel.html')
            .then(response => response.text())
            .then(html => {
              const carroselContainer = document.getElementById('carrosel-inicio');
              if (carroselContainer) {
                carroselContainer.innerHTML = html;

                document.querySelectorAll('#carrosel-inicio .card img').forEach(img => {
                  img.addEventListener('click', () => {
                    const produto = img.dataset.produto;
                    if (produto) {
                      window.location.href = `/interface/detalhes.html?produto=${produto}`;
                    }
                  });
                  img.style.cursor = 'pointer';
                });
              }
            })
            .catch(error => {
              console.error('Erro ao carregar o carrossel:', error);
            });
      })
      .catch(error => {
        console.error('Erro ao carregar o conteúdo:', error);
      });
    }
    break;

    case 'velas-perfumadas':
    {
      fetch('/interface/perfumadas.html')
        .then(response => response.text())
        .then(data => {
          conteudo.innerHTML = data;
          adicionarEventosCards();
        })
        .catch(error => {
          console.error('Erro ao carregar o conteúdo:', error);
        });
    }
    break;

    case 'decorativas':
    {
      fetch('/interface/decorativas.html')
        .then(response => response.text())
        .then(data => {
          conteudo.innerHTML = data;
          adicionarEventosCards();
        })
        .catch(error => {
          console.error('Erro ao carregar o conteúdo:', error);
        });
    }
    break;

    case 'kits':
    {
      fetch('/interface/kits.html')
        .then(response => response.text())
        .then(data => {
          conteudo.innerHTML = data;
          adicionarEventosCards();
        })
        .catch(error => {
          console.error('Erro ao carregar o conteúdo:', error);
        });
    }
    break;

    case 'velas-massagem':
    {
      fetch('/interface/massagem.html')
        .then(response => response.text())
        .then(data => {
          conteudo.innerHTML = data;
          adicionarEventosCards();
        })
        .catch(error => {
          console.error('Erro ao carregar o conteúdo:', error);
        });
    }
    break;
    
    case 'porta-velas':
    {
      fetch('/interface/portavelas.html')
        .then(response => response.text())
        .then(data => {
          conteudo.innerHTML = data;
          adicionarEventosCards();
        })
        .catch(error => {
          console.error('Erro ao carregar o conteúdo:', error);
        });
    }
    break;

    default:
      break;
    }
}


function scrollCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  if (!track) return;

  const card = track.querySelector('.card');
  if (!card) return;

  const style = getComputedStyle(track);
  const gap = parseInt(style.gap) || 0;
  const scrollAmount = card.offsetWidth + gap;

  track.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth',
  });
}





function adicionarEventosCards() {
  const cards = document.querySelectorAll('img[data-produto]');
  cards.forEach(card => {
    const produto = card.dataset.produto;
    if (produto) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        window.location.href = `/interface/detalhes.html?produto=${produto}`;
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  adicionarEventosCards();
});

function adicionarAoCarrinho(event, botao) {
  event.preventDefault();

  const produtoId = botao.dataset.produto;
  const produto = dados[produtoId];

  let carrinho = JSON.parse(localStorage.getItem('carrinho'));

  const produtoExistente = carrinho.find(item => item.nome === produto.nome);
  if (produtoExistente) {
    produtoExistente.quantidade++;
  } else {
    carrinho.push({
      id: Date.now(), 
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco,
      imagem: produto.imagem,
      quantidade: 1
    });
  }
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  const alerta = document.getElementById('alerta-carrinho');
  alerta.classList.remove('d-none');
  alerta.classList.add('show');

  setTimeout(() => {
    alerta.classList.remove('show');
    alerta.classList.add('d-none');
  }, 3000);
}

