import CardColaborador from "../CardColaborador/CardColaborador"
import "./Divisao.css"

export const Divisao = (props) => {
  return props.colaboradores.length > 0 ? (
    <section className="divisao" style={{ backgroundColor: props.corPrimaria }}>
      <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <CardColaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            equipe={colaborador.equipe}
            habilidade={colaborador.habilidade}
            imagem={colaborador.imagem}
            recompensa={`₿${colaborador.recompensa}.000.000,00`}
            backgroundColor={props.corSecundaria}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  )
}
