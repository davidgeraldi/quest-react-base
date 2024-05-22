import './App.css'
import Paragraph from './components/paragraph/paragraph.jsx'
import Button from './components/button/button.jsx'

function App() {
  return (
    <>
      <Paragraph />
      <Paragraph label="texto passado pela prop label" color="red"/> 
      <Paragraph label="outro texto passado pela prop label" color="green"/>

      <Button />
      <Button label='botao com label' color="orange"/>
    </>
  )
}

export default App
