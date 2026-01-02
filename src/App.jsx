import { GameHeader } from "./components/GameHeader"

const cardValues=[
  "Apple",
  "Banana",
  "orange",
  "pear",
  "kiwi",
  "melon",
  "mango",
  "Apple",
  "Banana",
  "orange",
  "pear",
  "kiwi",
  "melon",
  "mango"
]

function App() {
  
  return (
    <div className="app"><GameHeader score={3} moves={10}/></div>
  )
}

export default App
