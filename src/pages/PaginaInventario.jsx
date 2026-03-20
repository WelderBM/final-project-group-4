import { useInventario } from '../contexts/InventarioContext'
import FormularioItem from '../components/FormularioItem'
import ItemCard from '../components/ItemCard'
function PaginaInventario() {
  const { itens } = useInventario()
  return (
    <div className="pagina-inventario">
      <h1> Meu Inventário</h1>
      
      {/* Formulário criado pela Pessoa 3 */}
      <FormularioItem />
      
      {/* Lista de itens - renderização condicional */}
      {itens.length === 0 ? (
        <p className="lista-vazia">
          Nenhum item cadastrado ainda. Adicione o primeiro!
        </p>
      ) : (
        <div className="lista-itens">
          {/* .map() transforma cada item em um componente */}
          {itens.map(item => (
            <ItemCard 
              key={item.id}
              id={item.id}
              nome={item.nome}
              categoria={item.categoria}
              raridade={item.raridade}
              ano={item.ano}
            />
          ))}
        </div>
      )}
    </div>
  )
}
export default PaginaInventario