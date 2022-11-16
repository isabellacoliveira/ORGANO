import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'
import {useState} from 'react';

const Formulario = (props) => {
    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        // console.log("Form foi submetido", nome, cargo, imagem, time)
        // ao inves de fazer esse console log, fazemos: 
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
        // além disso, quero apagar o que foi digitado com o clique do botão 
        // para limpar o formulário após cadastrar 
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        
        
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    // chamamos a função com o valor que recebemos de cada estado, por isso o estado recebe o valor 
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    // agora passamos isso para extrair e pegar somente os nomes dos times 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor =>  setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}
export default Formulario