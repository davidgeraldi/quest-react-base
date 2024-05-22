import './paragraph.css'

const Paragraph = ({label, color}) => <p className="text uppercase" style={{color: color}}>{label}</p>

Paragraph.defaultProps = {
    color: 'blue',
    label: 'Texto padrão',
}

export default Paragraph;