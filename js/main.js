

const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        menuItems.forEach(i => i.classList.remove('selected'));
        
        item.classList.add('selected');
      });
    });



document.addEventListener('DOMContentLoaded', () =>{
    fetch('home.html')
      .then(response => response.text())  
      .then(data => {
          conteudo.innerHTML = data;
      })
      .catch(error => {
          console.error('Erro ao carregar o conteúdo:', error);
      })   
});


function carregarConteudo(pagina){
    var conteudo = document.getElementById('conteudo');

    switch (pagina){
        case 'home':
        {
            fetch('home.html')
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

        case 'velas-perfumadas':
        {
            fetch('perfumadas.html')
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
            fetch('decorativas.html')
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
            fetch('kits.html')
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
            fetch('massagem.html')
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
            fetch('portavelas.html')
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

const btnLupa = document.getElementById('btn-lupa');
const campoPesquisa = document.querySelector('#barra-pesquisa input');
const botaoPesquisa = document.querySelector('#barra-pesquisa button');
const barraPesquisa = document.getElementById('barra-pesquisa');

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

document.addEventListener('DOMContentLoaded', () => {
      // Carrega o conteúdo do carrossel.html automaticamente
      fetch('carrossel.html')
        .then(response => response.text())
        .then(html => {
          document.getElementById('carrosel-inicio').innerHTML = html;

           // Adiciona eventos de clique nas imagens do carrossel
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

    function adicionarEventosCards() {
      const cards = document.querySelectorAll('img[data-produto]');
      cards.forEach(card => {
        const produto = card.dataset.produto;
        if (produto) {
          card.style.cursor = 'pointer';
          card.addEventListener('click', () => {
            window.location.href = `detalhes.html?produto=${produto}`;
          });
        }
      });
    }