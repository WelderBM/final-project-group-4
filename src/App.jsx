import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PaginaInicio from './pages/PaginaInicio'
import PaginaInventario from './pages/PaginaInventario'
import PaginaDetalhes from './pages/PaginaDetalhes'
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada'

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/inventario" element={<PaginaInventario />} />
          <Route path="/item/:id" element={<PaginaDetalhes />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App