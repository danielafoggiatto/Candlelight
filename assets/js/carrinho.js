let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const tabelaBody = document.getElementById('tabela-carrinho');
    const totalEl = document.getElementById('total');
    let ultimoRemovido = null;
    let timerDesfazer = null;

    function formatarPreco(valor) {
      return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function atualizarCarrinho() {
      tabelaBody.innerHTML = '';
      let total = 0;

      carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>
            <img src="${item.imagem}" alt="${item.nome}" class="produto-imagem me-3" />
            ${item.nome}
          </td>
          <td>${formatarPreco(item.preco)}</td>
          <td>
            <div class="d-flex align-items-center">
              <button class="btn btn-sm btn-outline-secondary me-2 btn-diminuir" data-id="${item.id}">-</button>
              <span>${item.quantidade}</span>
              <button class="btn btn-sm btn-outline-secondary ms-2 btn-aumentar" data-id="${item.id}">+</button>
            </div>
          </td>
          <td>${formatarPreco(subtotal)}</td>
          <td>
            <button class="btn btn-sm btn-remover" data-id="${item.id}" title="Remover produto">X</button>
          </td>
        `;
        tabelaBody.appendChild(tr);
      });

      totalEl.textContent = `Total: ${formatarPreco(total)}`;
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      adicionarEventosCarrinho();
    }

    function adicionarEventosCarrinho() {
      document.querySelectorAll('.btn-remover').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          const index = carrinho.findIndex(item => item.id == id);
          if (index > -1) {
            ultimoRemovido = carrinho[index];
            carrinho.splice(index, 1);
            atualizarCarrinho();
            mostrarBotaoDesfazer();
          }
        });
      });

      document.querySelectorAll('.btn-diminuir').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          const item = carrinho.find(p => p.id == id);
          if (item && item.quantidade > 1) {
            item.quantidade--;
            atualizarCarrinho();
          }
        });
      });

      document.querySelectorAll('.btn-aumentar').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          const item = carrinho.find(p => p.id == id);
          if (item) {
            item.quantidade++;
            atualizarCarrinho();
          }
        });
      });
    }

    function mostrarBotaoDesfazer() {
      const container = document.getElementById('desfazer-container');
      container.style.display = 'block';

      if (timerDesfazer) clearTimeout(timerDesfazer);
      timerDesfazer = setTimeout(() => {
        container.style.display = 'none';
        ultimoRemovido = null;
      }, 5000);
    }

    document.getElementById('btn-desfazer')?.addEventListener('click', () => {
      if (ultimoRemovido) {
        carrinho.push(ultimoRemovido);
        atualizarCarrinho();
        ultimoRemovido = null;
        document.getElementById('desfazer-container').style.display = 'none';
        if (timerDesfazer) clearTimeout(timerDesfazer);
      }
    });

    document.getElementById('btn-voltar')?.addEventListener('click', () => {
      window.history.back();
    });

    atualizarCarrinho();

    
    

