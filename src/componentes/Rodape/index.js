//src/componentes/Rodape/index.js
import './Rodape.css'

const Rodape = () => {
    return (
    <footer className="footer">
        <section className='redesSociais'>
            <ul>
                <li>
                    <a href="https://m.facebook.com/AluraCursosOnline/" target="_blank">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/AluraOnline?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/aluraonline/" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section className='redesSociais'>
            <img src="/imagens/logo.png" alt=""/>
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape