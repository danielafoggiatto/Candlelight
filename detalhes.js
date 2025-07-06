document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const produto = params.get('produto');

  const dados = {
    'fresh-bamboo': {
      nome: 'Vela Fresh Bamboo',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/freshbamboo.jpg',
    },
    'alecrim': {
      nome: 'Vela de Alecrim',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/alecrim.jpg',
    },
    'figo': {
      nome: 'Vela de Figo',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/figo.jpg',
    },
    'peace': {
      nome: 'Vela Peace',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/peace.jpg',
    },
    'lavanda': {
      nome: 'Vela de Lavanda',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/lavanda.jpg',
    },
    'flores': {
      nome: 'Vela Flores do Campo',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/campo.jpg',
    },
    'rosas': {
      nome: 'Vela de Rosas',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/rosa.jpg',
    },
    'mel': {
      nome: 'Vela Mel e Canela',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/producao3.jpg',
    },
    'jasmin': {
      nome: 'Vela mini de Jasmin',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/jasmin.jpg',
    },
    'piramide': {
      nome: 'Vela Pirâmide',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/pirâmide.jpg',
    },
    'dado': {
      nome: 'Vela Dado',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/dado.jpg',
    },
    'bebe': {
      nome: 'Vela Pés de Bebê',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/bebê.jpg',
    },
    'santo': {
      nome: 'Vela Santo',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/santo.jpg',
    },
    'borboleta': {
      nome: 'Vela Borboleta',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/borboleta.jpg',
    },
    'flor': {
      nome: 'Vela Flor',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/flor.jpg',
    },
    'kit1': {
      nome: 'Kit Velas Peace & Joy',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/duo.png',
    },
    'kit2': {
      nome: 'Kit Vela Dado',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/dado.jpg',
    },
    'kit3': {
      nome: 'Kit 10 mini velas de Jasmin',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/jasmin.jpg',
    },
    'kit4': {
      nome: 'Kit 3 velas',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/formas.jpg',
    },
    'kit5': {
      nome: 'Kit 5 velas Pirâmide',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/pirâmides.jpg',
    },
    'kit6': {
      nome: 'Kit 5 velas de Flor',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/kit1.jpg',
    },
    'cacau': {
      nome: 'Vela para Massagem - Cacau',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/massagem.jpg',
    },
    'cravo': {
      nome: 'Vela para Massagem - Cravo e Canela',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/massagem2.jpg',
    },
    'baunilha': {
      nome: 'Vela para Massagem - Baunilha',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/massagem3.jpg',
    },
    'pv1': {
      nome: 'Porta Vela Ferro',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/portavelas1.jpg',
    },
    'pv2': {
      nome: 'Porta Vela Iluminado',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/portavelas2.jpg',
    },
    'pv3': {
      nome: 'Porta Vela Delicado',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/portavelas3.jpg',
    },
    'pv4': {
      nome: 'Porta Vela Gatinho',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/portavelas6.jpg',
    },
    'pv5': {
      nome: 'Porta Vela Cerâmica',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/portavelas4.jpg',
    },
    'pv6': {
      nome: 'Porta Vela Tradicional',
      descricao: 'É conhecida por seu aroma leve, refrescante e natural — uma combinação que remete à pureza, equilíbrio e natureza. Com notas verdes e suaves, essa fragrância cria um ambiente calmo e revigorante. É perfeita para usar em momentos de autocuidado, meditação ou na decoração de ambientes modernos e minimalistas.',
      imagem: 'img/portavelas5.jpg',
    },



  };

  const produtoDados = dados[produto];

  if (produtoDados) {
    document.getElementById('detalhe-produto').innerHTML = `

      <div class="container mt-5">
        <div class="card mx-auto d-flex border-0" style="max-width: 900px;">
          <div class="row g-0 align-items-center ">

            <div class="col-md-6 d-flex justify-content-center ">
              <img src="${produtoDados.imagem}" id="img-big" class="img-fluid rounded-start" alt="${produtoDados.nome}" style="max-height: 400px; max-width: 450px; object-fit: cover;">
            </div>

            <div class="col-md-6 ps-2 d-flex align-items-center justify-content-center">
              <div class="card-body text-center">
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
  } else {
    document.getElementById('detalhe-produto').innerHTML = `
      <div class="alert alert-danger">Produto não encontrado.</div>
    `;
  }
});



// Cria um estilo para hover na imagem
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