import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corPrimaria}
    const borda = { borderColor: props.corSecundaria}
    return (
       ( props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={borda}>{props.nome}</h3>
            <div className='colaboradores'>             
                {props.colaboradores.map(colaborador => <Colaborador 
                                                            corDeFundo={props.corSecundaria}
                                                            key={colaborador.nome}
                                                            nome={colaborador.nome} 
                                                            cargo={colaborador.cargo} 
                                                            imagem={colaborador.imagem}
                                                        />)}
            </div>
        </section>
        : '' 
    )
}

export default Time 