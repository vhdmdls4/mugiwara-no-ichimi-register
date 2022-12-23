import { useState } from "react"
import Banner from "./componentes/Banner"
import Formulario from "./componentes/Formulario"
import Divisao from "./componentes/Divisao"

function App() {
  const [colaboradores, setColaborador] = useState([])

  const novoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaborador([...colaboradores, colaborador])
  }

  const equipes = [
    {
      nome: "Capitão",
      corPrimario: "#d9f7e9",
      corSecundario: "#57c278",
    },
    {
      nome: "Imediato",
      corPrimario: "#00BFFF",
      corSecundario: "#1E90FF",
    },
    {
      nome: "Navegadores",
      corPrimario: "#DAA520",
      corSecundario: "#40E0D0",
    },
    {
      nome: "Atiradores",
      corPrimario: "#DB7093",
      corSecundario: "#F4A460",
    },
    {
      nome: "Cozinheiros",
      corPrimario: "#32CD32",
      corSecundario: "#EE82EE",
    },
    {
      nome: "Médicos",
      corPrimario: "#40E0D0",
      corSecundario: "#6B8E23",
    },
    {
      nome: "Arqueólogos",
      corPrimario: "#9932CC",
      corSecundario: "#00FF7F",
    },
    {
      nome: "Construtores",
      corPrimario: "#00FA9A",
      corSecundario: "#DDA0DD",
    },
    {
      nome: "Músicos",
      corPrimario: "#FF6347",
      corSecundario: "#800080",
    },
    {
      nome: "Timoneiros",
      corPrimario: "#9370DB",
      corSecundario: "#DC143C",
    },
  ]

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          novoColaboradorAdicionado(colaborador)
        }
      />
      {equipes.map((equipeEspecifica) => (
        <Divisao
          key={equipeEspecifica.nome}
          nome={equipeEspecifica.nome}
          corPrimaria={equipeEspecifica.corPrimario}
          corSecundaria={equipeEspecifica.corSecundario}
        />
      ))}
    </div>
  )
}

export default App
