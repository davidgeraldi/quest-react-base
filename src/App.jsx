import './App.css'
import Paragraph from './components/paragraph/text'
import Button from './components/button/button'

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
