import { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [todoList, setTodoList] = useState([
    {
      todo: '文字1',
    },
    {
      todo: '文字2',
    },
    {
      todo: '文字3',
    },
    {
      todo: '文字4',
    },
  ])

  //削除するメソッド
  const onDelete = (todo: string) => {
    setTodoList((prevState) => {
      return prevState.filter((n) => n.todo !== todo)
    })
  }

  return (
    <div style={{ width: '30rem', margin: '0 auto' }}>
      <h1>TODO APP</h1>
      <input
        type="text"
        name={'todo'}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() =>
          setTodoList((prevState) => [...prevState, { todo: inputText }])
        }
      >
        追加
      </button>
      <p>{inputText}</p>
      <div>
        <ul>
          {todoList.map((item, index) => {
            return (
              <li key={`todo_${index}`}>
                {item.todo}
                <button type={'button'} onClick={() => onDelete(item.todo)}>
                  削除
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
