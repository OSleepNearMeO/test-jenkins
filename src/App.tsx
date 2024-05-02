
import './App.css'
const productMode = process.env.NODE_ENV;
function App() {

  return (
    <>
      hello react this is {productMode}
    </>
  )
}

export default App
