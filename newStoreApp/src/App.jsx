
import './App.css'
import Store from './Store'
import { CurrencyContextProvider } from './context/currencies-context'

function App() {

  return (
    <div className="App">
      <CurrencyContextProvider>
          <Store />
      </CurrencyContextProvider>
      
    </div>
  )
}

export default App
