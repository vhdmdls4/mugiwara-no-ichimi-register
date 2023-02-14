import { useState } from "react"
import Banner from "./componentes/Banner"
import Formulario from "./componentes/Formulario"
import Divisao from "./componentes/Divisao"
import Rodape from "./componentes/Rodape/Rodape"

function App() {
  const [colaboradores, setColaborador] = useState([])

  const novoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaborador([...colaboradores, colaborador])
  }

  const equipes = [
    {
      nome: "Capitão",
      corPrimario: "#F6F6F6",
      corSecundario: "#00BFFF",
    },
    {
      nome: "Imediato",
      corPrimario: "#EFEFEF",
      corSecundario: "#FFA07A",
    },
    {
      nome: "Navegadores",
      corPrimario: "#E8F0F2",
      corSecundario: "#FFD700",
    },
    {
      nome: "Atiradores",
      corPrimario: "#F2F2F2",
      corSecundario: "#7FFFD4",
    },
    {
      nome: "Cozinheiros",
      corPrimario: "#F8F8F8",
      corSecundario: "#BA55D3",
    },
    {
      nome: "Médicos",
      corPrimario: "#F5F5F5",
      corSecundario: "#32CD32",
    },
    {
      nome: "Arqueólogos",
      corPrimario: "#F0F8FF",
      corSecundario: "#FF69B4",
    },
    {
      nome: "Construtores",
      corPrimario: "#FAF0E6",
      corSecundario: "#9400D3",
    },
    {
      nome: "Músicos",
      corPrimario: "#F4F4F4",
      corSecundario: "#FF4500",
    },
  ]

  return (
    <div className="App">
      <Banner />
      <Formulario
        nomeEquipes={equipes.map((squad) => squad.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          novoColaboradorAdicionado(colaborador)
        }
      />
      {equipes.map((squad) => (
        <Divisao
          key={squad.nome}
          nome={squad.nome}
          corPrimaria={squad.corPrimario}
          corSecundaria={squad.corSecundario}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipe === squad.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  )
}

export default App
