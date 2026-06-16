import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import clans from "../Data/clans"
import "./Clans.css"

function Clans(){
    const { clanId } = useParams()
    const clan = clans.find((clan) => clan.id === Number(clanId))

    if (!clan) return <h1>Clã não encontrado</h1>

    return(
      <div className="clan-page">
        <Link to="/vtmclans-frontend/">← Voltar</Link>

        <div className="clan-detail-card">
          <img src={clan.imagem} alt={clan.nome} />
          
          <h1>{clan.nome}</h1>
          <p>Membro da Camarilla: {clan.camarilla ? "Sim" : "Não"}</p>
          <p>{clan.lore}</p>

          <h2>Disciplinas:</h2>
          <ul>
            {clan.disciplinas.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    )
}

export default Clans