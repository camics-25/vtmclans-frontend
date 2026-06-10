import { useParams } from "react-router-dom"
import clans from "../Data/clans"

function Clans(){
    const {clanId}= useParams()
    const clan = clans.find((clan) => clan.id === Number(clanId))

    return(
    <>
    <h1>{clan.nome}</h1>
    </>
    )
}

export default Clans