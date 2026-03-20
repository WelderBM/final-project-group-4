import { useParams, useNavigate } from 'react-router-dom'
import { useInventario } from '../contexts/InventarioContext'
import Categoria from '../components/Categoria'
function PaginaDetalhes() {
  // useParams() pega o valor dinâmico da URL
  // Se a URL é /item/42, então id = '42' (string!)
  const { id } = useParams()

  // useNavigate() permite navegar por código
  const navigate = useNavigate()
  const { buscarItem, removerItem } = useInventario()
  // buscarItem já converte o id para número
  const item = buscarItem(id)
  // Se não encontrar o item, mostra mensagem de erro
  if (!item) {
    return (
      <div className="pagina-detalhes">
        <h1>Item não encontrado</h1>
        <p>O item que você procura não existe no inventário.</p>
        <button onClick={() => navigate('/inventario')}>
          ← Voltar para o inventário
        </button>
      </div>
    )
  }
  // Função que remove e redireciona
  const handleRemover = () => {
    // window.confirm() mostra uma caixa de confirmação
    if (window.confirm(`Remover "${item.nome}"?`)) {
      removerItem(item.id)
      navigate('/inventario') // redireciona após remover
    }
  }
  return (
    <div className="pagina-detalhes">
      {/* navigate(-1) volta para a página anterior */}
      <button onClick={() => navigate(-1)} className="btn-voltar">
        ← Voltar
      </button>
      <div className="detalhe-card">
        <h1>{item.nome}</h1>
        {/* Componente Categoria criado pela Colega */}
        <Categoria nome={item.categoria} />
        <div className="detalhe-info">
          <p><strong>Raridade:</strong> {item.raridade}</p>
          <p><strong>Ano:</strong> {item.ano}</p>
          {/* Renderiza notas só se existir */}
          {item.notas && (
            <p><strong>Notas:</strong> {item.notas}</p>
          )}
        </div>
        <button onClick={handleRemover} className="btn-remover">
          Remover do inventário
        </button>
      </div>
    </div>
  )
}
export default PaginaDetalhes
