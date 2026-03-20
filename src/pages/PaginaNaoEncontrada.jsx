import { Link } from 'react-router-dom'
function PaginaNaoEncontrada() {
  return (
    <div className="pagina-404">
      <h1>404</h1>
      <p>Ops! Esta página não existe.</p>
      <Link to="/">Voltar para o início</Link>
    </div>
  )
}
export default PaginaNaoEncontrada