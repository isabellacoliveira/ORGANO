import './CampoTexto.css'
const CampoTexto = (props) => {
    // aqui temos acesso ao evento de digitação 
    // vamos então guardar a referência em uma variável 
    let valor = 'Isabella Oliveira'

    const aoDigitado = (evento) => {
        // devemos pegar o valor que está sendo digitado 
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="campoTexto">
            <label>
                {props.label}
            </label>      
           {/* toda vez que isso for alterado, ou seja, o usuário digitar, quero executar uma ação */}
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}
export default CampoTexto