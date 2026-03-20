function FormularioItem() {
    return <div>Formulário - Em construção</div>
} import { useState, useRef } from 'react';
import { useInventario } from '../contexts/InventarioContext';

function FormularioItem() {
  // Pega a função de adicionar do contexto [cite: 21]
  const { adicionarItem } = useInventario();
  
  // Referência para o input de nome (para foco automático) [cite: 21, 53]
  const nomeInputRef = useRef(null);
  
  // Estado do formulário - um objeto único para organização [cite: 21, 22]
  const [form, setForm] = useState({
    nome: '',
    categoria: '',
    raridade: 'Comum',
    ano: new Date().getFullYear(),
    notas: '',
  });
  
  // Estado para mensagens de erro de validação [cite: 21, 46]
  const [erros, setErros] = useState({});

  // Handler único: usa o 'name' do input para atualizar o estado [cite: 26, 47]
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Atualiza apenas o campo que mudou usando computed property [cite: 26, 27]
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Limpa o erro do campo assim que o usuário volta a digitar [cite: 26]
    if (erros[name]) {
      setErros(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validação: Nome (mín. 3 carac.) e Ano (1900 até atual) [cite: 31, 48, 49]
  const validar = () => {
    const novosErros = {};
    
    // Validação do nome com trim() [cite: 31, 32]
    if (!form.nome.trim()) {
      novosErros.nome = 'Nome é obrigatório';
    } else if (form.nome.trim().length < 3) {
      novosErros.nome = 'Nome deve ter pelo menos 3 caracteres';
    }
    
    // Validação do ano [cite: 31]
    const anoNum = parseInt(form.ano);
    const anoAtual = new Date().getFullYear();
    if (anoNum < 1900 || anoNum > anoAtual) {
      novosErros.ano = `Ano deve ser entre 1900 e ${anoAtual}`;
    }
    
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página [cite: 35, 36, 50]
    
    if (!validar()) {
      nomeInputRef.current?.focus(); // Foca no erro [cite: 35, 53]
      return;
    }
    
    // Criação do objeto com ID único e valores limpos [cite: 35, 36]
    const novoItem = {
      id: Date.now(),
      nome: form.nome.trim(),
      categoria: form.categoria.trim() || 'Geral',
      raridade: form.raridade,
      ano: parseInt(form.ano),
      notas: form.notas.trim(),
    };
    
    adicionarItem(novoItem); // Chama função do contexto [cite: 35, 51]
    
    // Reseta o formulário e devolve o foco ao nome [cite: 35, 52, 53]
    setForm({
      nome: '',
      categoria: '',
      raridade: 'Comum',
      ano: new Date().getFullYear(),
      notas: '',
    });
    nomeInputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-item">
      <h2>➕ Adicionar Item</h2>
      
      {/* Campo Nome - obrigatório [cite: 40] */}
      <div className="campo">
        <label>
          Nome do item *
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            ref={nomeInputRef}
            placeholder="Ex: Vinil Abbey Road"
          />
        </label>
        {erros.nome && <span className="erro">{erros.nome}</span>}
      </div>

      {/* Campo Categoria [cite: 40] */}
      <div className="campo">
        <label>
          Categoria
          <input
            type="text"
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            placeholder="Ex: Música, Cards"
          />
        </label>
      </div>

      {/* Campo Raridade [cite: 40] */}
      <div className="campo">
        <label>
          Raridade
          <select name="raridade" value={form.raridade} onChange={handleChange}>
            <option value="Comum">Comum</option>
            <option value="Incomum">Incomum</option>
            <option value="Raro">Raro</option>
            <option value="Ultra Raro">Ultra Raro</option>
            <option value="Lendário">Lendário</option>
          </select>
        </label>
      </div>

      {/* Campo Ano [cite: 40] */}
      <div className="campo">
        <label>
          Ano de aquisição
          <input
            type="number"
            name="ano"
            value={form.ano}
            onChange={handleChange}
            min="1900"
            max={new Date().getFullYear()}
          />
        </label>
        {erros.ano && <span className="erro">{erros.ano}</span>}
      </div>

      {/* Campo Notas [cite: 40] */}
      <div className="campo">
        <label>
          Notas (opcional)
          <textarea
            name="notas"
            value={form.notas}
            onChange={handleChange}
            placeholder="Detalhes adicionais..."
            rows="3"
          />
        </label>
      </div>

      <button type="submit" className="btn-adicionar">
        Adicionar ao inventário
      </button>
    </form>
  );
}

export default FormularioItem;
