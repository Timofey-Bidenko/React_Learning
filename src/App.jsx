import data from './data'
import Header from './components/Header'
import Menu from './components/Menu'

function App() {
  return (<>
  <Header/>
  <Menu data={data}/>
  </>)
}

export default App