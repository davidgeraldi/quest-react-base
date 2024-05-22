import './button.css'

const showButtonProps = (label, color) => alert(`O texto do botão clicado é "${label}" e a cor do texto é "${color}"`)

const Button = ({label = 'Clique aqui', color = 'blue'}) => <button className='button' style={{color: color}} onClick={() => showButtonProps(label, color)}>{label}</button>


// Button.defaultProps = {
//     label: 'Clique aqui',
//     color: 'blue'
// }

export default Button