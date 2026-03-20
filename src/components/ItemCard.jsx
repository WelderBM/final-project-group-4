import { Link } from "react-router-dom";
import { useInventario } from "../contexts/InventarioContext";
import Categoria from "./Categoria";

function ItemCard({ id, nome, categoria, raridade, ano }) {
  const { removerItem } = useInventario();

  const getRaridadeCor = () => {
    switch (raridade) {
      case "Ultra Raro":
        return "#9c27b0";
      case "Lendário":
        return "#ff9800";
      case "Raro":
        return "#2196f3";
      case "Incomum":
        return "#4caf50";
      default:
        return "#757575";
    }
  };

  const handleRemover = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (window.confirm(`Remover "${nome}" do inventário?`)) {
      removerItem(id);
    }
  };

  return (
    <div className="item-card">
      <div className="item-card-header">
        <h3>{nome}</h3>
        <span className="raridade-header" style={{ backgroundColor: getRaridadeCor() }}>
          {raridade}
        </span>
      </div>
      <div className="item-card-body">
        <Categoria nome={categoria || "Geral"} />
        <span className="ano">📅 {ano}</span>
      </div>
      <div className="item-card-acoes">
        <Link to={`/item/${id}`} className="btn-detalhes">
          Ver detalhes
        </Link>
        <button onClick={handleRemover} className="btn-remover-card">
          Remover 🗑️
        </button>
      </div>
    </div>
  );
}
export default ItemCard;
