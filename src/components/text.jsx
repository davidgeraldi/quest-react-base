// import React from 'react'
import './text.css'

const Paragraph = ({label, color}) => {
    return (
        <p className="text uppercase" style={{color: color}}>{label}</p>
    )
}

Paragraph.defaultProps = {
    color: 'blue',
    label: 'Texto padrão',
}

export default Paragraph;