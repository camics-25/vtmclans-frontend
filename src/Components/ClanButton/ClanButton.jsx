import "./ClanButton.css";

function ClanButton({ text, onClick }) {
  return (
    <button tabindex="-1" aria-label="botao de selecionar clã" className="clan-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default ClanButton;


