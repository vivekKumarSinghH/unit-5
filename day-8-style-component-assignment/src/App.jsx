
import './App.css'
import { Button } from './components/Button'

function App() {

  return (
    <div className="App">

<Button color="white" bg="#2490fd" border="none"> Primary Button</Button>
<Button color="black" bg="white" border="1px solid #EEEEEE">Default Button</Button>
<Button color="black" bg="white" border="1px dashed #EEEEEE">Dashed Button</Button>
<br/>
<Button color="black" bg="white" border="none">Text Button</Button>
<Button color="#2490fd" bg="white" border="none">Link Button</Button>
    </div>
  )
}

export default App
