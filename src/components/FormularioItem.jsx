import { useRef, useState } from "react";
import { useInventario } from "../contexts/InventarioContext";

function FormularioItem() {
  const { adicionarItem } = useInventario();

  const nomeInputRef = useRef(null);

  const [form, setForm] = useState({
    nome: '',
    categoria: '',
    raridade: 'Comum',
    ano: new Date().getFullYear(),
    notas: '',
  });

  const [erros, setErros] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(prev => ({ ...prev, [name]: value }));

    if (erros[name]) {
      setErros(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validar = () => {
    const novosErros = {};

    if (!form.nome.trim()) {
      novosErros.nome = 'Nome é obrigatório';
    } else if (form.nome.trim().length < 3) {
      novosErros.nome = 'Nome deve ter pelo menos 3 caracteres';
    }

    const anoNum = parseInt(form.ano);
    const anoAtual = new Date().getFullYear();
    if (anoNum < 1900 || anoNum > anoAtual) {
      novosErros.ano = `Ano deve ser entre 1900 e ${anoAtual}`;
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validar()) {
      nomeInputRef.current?.focus();
      return;
    }

    const novoItem = {
      id: Date.now(),
      nome: form.nome.trim(),
      categoria: form.categoria.trim() || 'Geral',
      raridade: form.raridade,
      ano: parseInt(form.ano),
      notas: form.notas.trim(),
    };

    adicionarItem(novoItem);

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
