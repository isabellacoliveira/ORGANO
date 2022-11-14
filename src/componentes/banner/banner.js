// para que ele leve o arquivo css em consideração, devemos fazer o import do mesmo 
import './banner.css'

function Banner() {
    // javascript sem react 
    // return de multiplas linhas 
    return (
        // isso se chama jsx: como o react trabalha com a parte visual , transforma em elementos do dom 
        // devemos usar className pois class é uma palavra reservada do js 
        <header className='banner'>
            <img src="../imagens/banner.png" alt="banner principal da página do organo"></img>
        </header>
    )
}
// estamos exportanto uma função 
export default Banner 
// temos que retornar essa função lá no corpo da página 