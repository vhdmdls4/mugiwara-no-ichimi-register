import "./CardColaborador.css"

export default function CardColaborador({
  nome,
  habilidade,
  recompensa,
  imagem,
  backgroundColor,
}) {
  const style = {
    backgroundColor: backgroundColor,
  }

  return (
    <div className="colaborador">
      <div className="cabecalho" style={style}>
        <img src={imagem} alt={`Foto de ${nome}`} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{habilidade}</h5>
        <h5>{recompensa}</h5>
      </div>
    </div>
  )
}
