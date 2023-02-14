import "./ListaSuspensa.css"

export const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        title="seleção"
        name="seleção"
        onChange={(event) => props.aoAlterado(event.target.value)}
        required={props.obrigatorio}
        value={props.value}
      >
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}
