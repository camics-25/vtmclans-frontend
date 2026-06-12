import { useState } from "react";
import ClanCard from "../Components/ClanCard/ClanCard";
import ClanButton from "../Components/ClanButton/Clanbutton";
import clans from "../Data/clans";

function Home(){

  const [clanSelecionado, setClanSelecionado] = useState(null);
  const [bloodEffect, setBloodEffect] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const [listaClans, setListaClans] = useState(clans);


    // { nome: "BanuHaqim", camarilla: clans.BanuHaqim.camarilla, caminhoImagem: clans.BanuHaqim.imagem, disciplinas: clans.BanuHaqim.disciplinas },
    // { nome: "Brujah", camarilla: clans.Brujah.camarilla, caminhoImagem: clans.Brujah.imagem, disciplinas: clans.Brujah.disciplinas },
    // { nome: "Gangrel", camarilla: clans.Gangrel.camarilla, caminhoImagem: clans.Gangrel.imagem, disciplinas: clans.Gangrel.disciplinas },
    // { nome: "Hecata", camarilla: clans.Hecata.camarilla, caminhoImagem: clans.Hecata.imagem, disciplinas: clans.Hecata.disciplinas  },
    // { nome: "Lasombra", camarilla: clans.Lasombra.camarilla, caminhoImagem: clans.Lasombra.imagem, disciplinas: clans.Lasombra.disciplinas  },
    // { nome: "Malkavian", camarilla: clans.Malkavian.camarilla, caminhoImagem: clans.Malkavian.imagem, disciplinas: clans.Malkavian.disciplinas  },
    // { nome: "Ministry", camarilla: clans.Ministry.camarilla, caminhoImagem: clans.Ministry.imagem, disciplinas: clans.Ministry.disciplinas  },
    // { nome: "Nosferatu", camarilla: clans.Nosferatu.camarilla, caminhoImagem: clans.Nosferatu.imagem, disciplinas: clans.Nosferatu.disciplinas  },
    // { nome: "Ravnos", camarilla: clans.Ravnos.camarilla, caminhoImagem: clans.Ravnos.imagem, disciplinas: clans.Ravnos.disciplinas  },
    // { nome: "Salubri", camarilla: clans.Salubri.camarilla, caminhoImagem: clans.Salubri.imagem, disciplinas: clans.Salubri.disciplinas  },
    // { nome: "Toreador", camarilla: clans.Toreador.camarilla, caminhoImagem: clans.Toreador.imagem, disciplinas: clans.Toreador.disciplinas  },
    // { nome: "Tremere", camarilla: clans.Tremere.camarilla, caminhoImagem: clans.Tremere.imagem, disciplinas: clans.Tremere.disciplinas  },
    // { nome: "Tzimisce", camarilla: clans.Tzimisce.camarilla, caminhoImagem: clans.Tzimisce.imagem, disciplinas: clans.Tzimisce.disciplinas  },
    // { nome: "Ventrue", camarilla: clans.Ventrue.camarilla, caminhoImagem: clans.Ventrue.imagem, disciplinas: clans.Ventrue.disciplinas  }
 

    const totalClans = listaClans.length;

   function selecionarClan(nome) {
    setBloodEffect(true);

    setTimeout(() => {
      setMensagem(
        `Você selecionou o clan ${nome}, redirecionando para criação de personagem...`
      );
    }, 1200);

    setTimeout(() => {
      setClanSelecionado(nome);
    }, 2000);
  }

  return (
    <div className={`app ${bloodEffect ? "blood" : ""}`}>
      <h1>Clans - VTM</h1>
      <h2>Total de Clãs: {totalClans}</h2>

      <section className="center">
        {listaClans.map((clans) => (
          <ClanCard
            key={clans.id}
            id={clans.id}
            nome={clans.nome}
            imagem={clans.imagem}
            camarilla={clans.camarilla}
            disciplinas={clans.disciplinas}
            onSelect={() => selecionarClan(clans.nome)}
          />
        ))}
          </section>

        {mensagem && <div className="message">{mensagem}</div>}
    </div>
  );
}

export default Home;