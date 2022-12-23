import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from "react"
import Divisao from "../Divisao"

const Formulario = (props) => {
  const [nome, setNome] = useState("")
  const [funcao, setFuncao] = useState("")
  const [recompensa, setRecompensa] = useState("")
  const [habilidade, setHabilidade] = useState("")
  const [imagem, setImagem] = useState("")
  const [equipe, setEquipe] = useState("")

  const aoSubmeter = (event) => {
    event.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      funcao,
      recompensa,
      habilidade,
      imagem,
      equipe,
    })
  }

  const equipes = [
    "Capitão",
    "Imediato",
    "Navegadores",
    "Atiradores",
    "Cozinheiros",
    "Médicos",
    "Arqueólogos",
    "Construtores",
    "Músicos",
    "Timoneiros",
  ]

  return (
    <section className="formulario">
      <form onSubmit={aoSubmeter}>
        <h2>Preencha os dados do nakama para criar um card</h2>
        <CampoTexto
          label="Nome"
          obrigatorio={true}
          placeholder="Digite seu nome e alcunha"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label="Função"
          obrigatorio={true}
          placeholder="Digite seu cargo na tripulação"
          valor={funcao}
          aoAlterado={(valor) => setFuncao(valor)}
        />
        <CampoTexto
          label="Recompensa"
          obrigatorio={true}
          placeholder="Digite o valor de sua recompensa"
          valor={recompensa}
          aoAlterado={(valor) => setRecompensa(valor)}
        />
        <CampoTexto
          label="Habilidade"
          obrigatorio={true}
          placeholder="Digite aqui sua habilidade especial (sem haki)"
          valor={habilidade}
          aoAlterado={(valor) => setHabilidade(valor)}
        />
        <CampoTexto
          label="Imagem"
          obrigatorio={true}
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Qual divisão de comandante você faz parte?"
          itens={equipes}
          valor={equipe}
          aoAlterado={(valor) => setEquipe(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  )
}

export default Formulario
