import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
     console.log(props.itens) 
     console.log(props.label) 
    return (
        <div className="listaSuspensa">
            <label>
                ${props.label}
            </label>
            <select required={props.obrigatorio}>
                    {props.itens.map(item => { 
                        return <option key={item}>{item}</option>
                    })}
            </select>
        </div>
    );
}

export default ListaSuspensa
