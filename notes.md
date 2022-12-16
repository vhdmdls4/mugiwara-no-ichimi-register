React.StrictMode serve para ajudar no desenvolvimento, mensagens de erro mais amigáveis por exemplo.

O arquivo de teste.js geralmente é um teste automatizado para fornecer dados sobre a aplicação web em desenvolvimento, nesse projeto não trataremos dele.

importante: 
https://www.alura.com.br/artigos/conhecendo-arrow-functions

componente em React começa com letra maiúscula

o import do componente pode ser feito sem especificar o nome do arquivo se você colocar o javascript correspondente como index.js

nesse caso, no app.js só será digitado:
import nome-do-componente from './componentes/nome-do-componente';

podemos separar o componente em arquivo js diferente do index, e usar no index apenas:
import { componente } from "./componente-pasta";
export default Componente

isso permite com que escolhamos qual componente exportar dentro do index;

para isso é preciso reescrever o componente.js como
export const Componente = () => {

}

lembrar de importar o css para o componente em questão no .js do componente, não no index.

reactstrictmode faz a renderização duplicada dos componentes para validação e verificação, quando subir para produção isso não acontecerá;

é possível criar componentes baseados em classes: https://pt-br.reactjs.org/docs/components-and-props.html


