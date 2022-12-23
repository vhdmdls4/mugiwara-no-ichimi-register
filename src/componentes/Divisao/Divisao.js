import "./Divisao.css"

export const Divisao = (props) => {
  return (
    <section className="divisao" style={{ backgroundColor: props.corPrimaria }}>
      <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
    </section>
  )
}
