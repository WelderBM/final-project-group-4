import { Link } from 'react-router-dom'
import { useInventario } from '../contexts/InventarioContext'
function PaginaInicio() {
  // useInventario() acessa os dados do contexto global
  const { itens, totalItens } = useInventario()
  // Estatísticas calculadas a partir dos itens
  // Set remove duplicatas, spread converte para array
  const categorias = [...new Set(itens.map(item => item.categoria))]
  
  // Filtra itens raros ou ultra raros
  const raros = itens.filter(item => 
    item.raridade === 'Raro' || item.raridade === 'Ultra Raro'
  ).length
  return (
    <div className="pagina-inicio">
      <h1> Bem-vindo à sua Coleção</h1>
      <p>Gerencie seu inventário de itens colecionáveis.</p>
      
      <div className="dashboard-cards">
        <div className="dash-card">
          <strong>{totalItens}</strong>
          <span>itens no total</span>
        </div>
        
        <div className="dash-card">
          <strong>{categorias.length}</strong>
          <span>categorias</span>
        </div>
        
        <div className="dash-card">
          <strong>{raros}</strong>
          <span>itens raros</span>
        </div>
      </div>
      
      {/* Link navega sem recarregar a página */}
      <Link to="/inventario" className="btn-primario">
        Ver meu inventário →
      </Link>
    </div>
  )
}
export default PaginaInicio