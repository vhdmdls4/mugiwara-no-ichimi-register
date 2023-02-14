import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from "react"
import Divisao from "../Divisao"

const Formulario = (props) => {
  const [nome, setNome] = useState("")
  const [recompensa, setRecompensa] = useState("")
  const [habilidade, setHabilidade] = useState("")
  const [imagem, setImagem] = useState("")
  const [equipe, setEquipe] = useState("Capitão")

  const aoSubmeter = (event) => {
    event.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      recompensa,
      habilidade,
      imagem,
      equipe,
    })
    setNome("")
    setRecompensa("")
    setHabilidade("")
    setImagem("")
    setEquipe("")
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSubmeter}>
        <h2>Preencha os dados do nakama para criar um card</h2>
        <CampoTexto
          label="Nome"
          obrigatorio={true}
          placeholder="Digite o nome e alcunha"
          valor={nome}
          type="text"
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Habilidade"
          obrigatorio={true}
          placeholder="Digite aqui a habilidade especial (sem haki)"
          valor={habilidade}
          type="text"
          aoAlterado={(valor) => setHabilidade(valor)}
        />
        <CampoTexto
          label="Recompensa"
          obrigatorio={true}
          placeholder="Digite o valor da recompensa em milhões"
          valor={recompensa}
          type="number"
          aoAlterado={(valor) => setRecompensa(valor)}
        />
        <CampoTexto
          label="Imagem"
          obrigatorio={true}
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          type="url"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="À qual divisão de comandante faz parte?"
          itens={props.nomeEquipes}
          valor={equipe}
          aoAlterado={(valor) => setEquipe(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  )
}

export default Formulario
