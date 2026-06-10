import banuHaqimImagem from "../assets/banu-haqim.jpg";
import brujahImagem from "../assets/brujah.jpg";
import gangrelImagem from '../assets/gangrel.jpg';

import hecataImagem from "../assets/hecata.jpg";
import lasombraImagem from '../assets/lasombra.jpg';
import malkavianImagem from '../assets/malkavian.jpg';

import ministryImagem from "../assets/ministry.jpg";
import nosferatuImagem from "../assets/nosferatu.jpg";
import ravnosImagem from "../assets/ravnos.jpg";

import salubriImagem from "../assets/salubri.jpg";
import toreadorImagem from "../assets/toreador.jpg";
import tremereImagem from "../assets/tremere.jpg";

import tzimisceImagem from "../assets/tzimisce.jpg";
import ventrueImagem from "../assets/ventrue.jpg";

const clans = [
  {
    id: 1,
    nome: "BanuHaqim",
    camarilla: false,
    imagem: banuHaqimImagem,
    lore: "Assassinos disciplinados que seguem um código de honra sombrio e silencioso.",
    disciplinas: ["Ofuscação", "Quietus", "Celeridade"]
  },

  {
    id: 2,
    nome: "Brujah",
    camarilla: true,
    imagem: brujahImagem,
    lore: "Rebeldes passionais que lutam contra a autoridade e defendem a liberdade.",
    disciplinas: ["Potência", "Presença", "Celeridade"]
  },

  {
    id: 3,
    nome: "Gangrel",
    camarilla: true,
    imagem: gangrelImagem,
    lore: "Viajantes selvagens ligados à natureza e ao instinto animal.",
    disciplinas: ["Animalismo", "Fortitude", "Proteanismo"]
  },

  {
    id: 4,
    nome: "Hecata",
    camarilla: false,
    imagem: hecataImagem,
    lore: "Família sombria ligada à morte, espíritos e necromancia.",
    disciplinas: ["Auspex", "Domínio da Morte", "Fortitude"]
  },

  {
    id: 5,
    nome: "Lasombra",
    camarilla: false,
    imagem: lasombraImagem,
    lore: "Senhores das sombras e manipuladores do poder através da escuridão.",
    disciplinas: ["Domínio das Sombras", "Potência", "Obtenebração"]
  },

  {
    id: 6,
    nome: "Malkavian",
    camarilla: true,
    imagem: malkavianImagem,
    lore: "Profetas da loucura que veem verdades escondidas na insanidade.",
    disciplinas: ["Auspex", "Demência", "Ofuscação"]
  },

  {
    id: 7,
    nome: "Ministry",
    camarilla: false,
    imagem: ministryImagem,
    lore: "Sedutores e manipuladores que usam desejo e fé como armas.",
    disciplinas: ["Ofuscação", "Presença", "Animalismo"]
  },

  {
    id: 8,
    nome: "Nosferatu",
    camarilla: true,
    imagem: nosferatuImagem,
    lore: "Monstros escondidos nas sombras, mestres da informação secreta.",
    disciplinas: ["Ofuscação", "Animalismo", "Potência"]
  },

  {
    id: 9,
    nome: "Ravnos",
    camarilla: false,
    imagem: ravnosImagem,
    lore: "Trapaceiros errantes que vivem de ilusões e liberdade.",
    disciplinas: ["Quimerismo", "Animalismo", "Fortitude"]
  },

  {
    id: 10,
    nome: "Salubri",
    camarilla: false,
    imagem: salubriImagem,
    lore: "Curadores raros e perseguidos, ligados ao equilíbrio espiritual.",
    disciplinas: ["Auspex", "Fortitude", "Valeren"]
  },

  {
    id: 11,
    nome: "Toreador",
    camarilla: true,
    imagem: toreadorImagem,
    lore: "Artistas e hedonistas obcecados por beleza e perfeição.",
    disciplinas: ["Auspex", "Presença", "Rapidez"]
  },

  {
    id: 12,
    nome: "Tremere",
    camarilla: true,
    imagem: tremereImagem,
    lore: "Feiticeiros do sangue que controlam magia vampírica proibida.",
    disciplinas: ["Taumaturgia", "Auspex", "Domínio"]
  },

  {
    id: 13,
    nome: "Tzimisce",
    camarilla: false,
    imagem: tzimisceImagem,
    lore: "Senhores da carne que moldam corpos como esculturas vivas.",
    disciplinas: ["Vicissitude", "Animalismo", "Auspex"]
  },

  {
    id: 14,
    nome: "Ventrue",
    camarilla: true,
    imagem: ventrueImagem,
    lore: "Nobres líderes que controlam poder, disciplina e hierarquia.",
    disciplinas: ["Domínio", "Fortitude", "Presença"]
  }
];
export default clans