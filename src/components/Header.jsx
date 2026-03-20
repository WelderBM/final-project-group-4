function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <span>🗂️</span>
                <h1>Minha Coleção</h1>
            </div>
            <nav className="header-nav">
                <a href="/">Início</a>
                <a href="/inventario">Inventário</a>
            </nav>
        </header>
    )
}
export default Header