import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {
    // vamos criar uma lista de times 
    const times = [
        'Progamação', 
        'Front-end', 
        'Data-Science', 
        'Devops', 
        'UX e Design',  
        'Mobile', 
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        // para evitar que a página seja recarregada quando apertamos o botão 
        evento.preventDefault()
        console.log("Form foi submetido")
    }
    return (
        <section className="formulario">
            {/* poderiamos fazer com o clique do botão , porém não vamos conseguir fazer a validação 
                ex: se o campo foi ou não preenchido */}
                {/* quando o form acontecer, esse método será executado  */}
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="cargo" placeholder="Digite seu cargo"/>
                <CampoTexto obrigatorio={true} label="imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}
export default Formulario