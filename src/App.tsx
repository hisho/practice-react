import './app.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)

  //増えるは5で止まる
  //減るは0で止まる
  return (
    <div>
      <div className="App">{count}</div>
      <button
        disabled={count >= 5}
        type={'button'}
        onClick={() => {
          setCount((prevState) => prevState + 1)
        }}
      >
        増える
      </button>
      <button
        disabled={count <= 0}
        type={'button'}
        onClick={() => {
          setCount((prevState) => prevState - 1)
        }}
      >
        減る
      </button>
      <button
        type={'button'}
        onClick={() => {
          setCount(0)
        }}
      >
        リセット
      </button>
    </div>
  )
}

export default App
