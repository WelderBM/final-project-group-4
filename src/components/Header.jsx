function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <span>🗂️</span>
                <h1>Minha Coleção</h1>
            </div>
             <nav className="header-nav">
        {/* NavLink recebe uma função em className */}
        {/* isActive é true quando a URL atual combina com 'to' */}
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => 
            isActive ? 'nav-link ativo' : 'nav-link'
          }
        >
          Início
        </NavLink>
        
        <NavLink 
          to="/inventario"
          className={({ isActive }) => 
            isActive ? 'nav-link ativo' : 'nav-link'
          }
        >
          Inventário
        </NavLink>
      </nav>
        </header>
    )
}
export default Header