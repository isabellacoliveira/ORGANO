import './Botao.css'

const Botao = (props) => {
    return (<button className='botao'>
        {/* esse botão recebeu um texto nesse caso, mas ele poderia ser uma imagem  */}
        {/* o react nos traz formas de passar coisas para dentro  */}
        {/* em nosso caso é um texto, mas se quisessemos poderiamos passar uma imagem ou outras coisas  */}
            {props.children}
        </button>
    )
}

export default Botao