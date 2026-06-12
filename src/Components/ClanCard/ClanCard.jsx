import "./ClanCard.css";
import ClanButton from "../ClanButton/ClanButton";
import { Link } from "react-router-dom";


function ClanCard({ nome, imagem, camarilla, disciplinas, id, onSelect }) {
  return (
<Link to={`/vtmclans-frontend/${id}`}>
    <div className="card-container">
      <div className="card">



      
        {/* FRONT */}
        <div className="card-front">
          <img src={imagem} alt={nome} />
          <h3>{nome}</h3>
          <p>
            Membro da Camarilla: {camarilla ? "Sim" : "Não"} 
          </p>
        </div>

        {/* BACK */}
        <div className="card-back">
          <h4>Disciplinas:</h4>

          <ul className="disciplinas-list">
            {disciplinas.map((d, i) => (
              <li key={i}>{d}</li>))}</ul>
        

          <ClanButton text="Selecionar Clan" onClick={onSelect} />
        </div>
      </div>
    </div>
</Link>
  );
}

export default ClanCard;