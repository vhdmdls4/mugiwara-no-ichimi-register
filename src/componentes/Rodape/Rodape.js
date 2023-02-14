import "./Rodape.css"

export default function Rodape() {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://www.facebook.com/vhduartelima/" target="_blank">
              <img id="icons" src="/imagens/fb.png" alt="Ícone do facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vhmdl/" target="_blank">
              <img id="icons" src="/imagens/in.png" alt="Ícone do linkedIn" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/vhmartins07/" target="_blank">
              <img id="icons" src="/imagens/ig.png" alt="Ícone do instagram" />
            </a>
          </li>
          <li>
            <a href="https://github.com/vhdmdls4" target="_blank">
              <img id="icons" src="/imagens/gh.png" alt="Ícone do github" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <a href="#">
          <img
            src="/imagens/logo.png"
            width="128px"
            alt="Jolly Roger Mugiwaras"
          />
        </a>
      </section>
      <section>
        <p>© Desenvolvido por Victor Hugo</p>
      </section>
    </footer>
  )
}
