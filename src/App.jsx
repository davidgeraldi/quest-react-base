import './App.css'
import './components/text'
import Paragraph from './components/text'

function App() {
  return (
    <>
      <Paragraph /> {/*paragrafo quando nao há as props passadas, com props padrao*/}
      <Paragraph label="texto passado pela prop label" color="red"/> {/*paragrafo quando se passa props */}
    </>
  )
}

export default App
