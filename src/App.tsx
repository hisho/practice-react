import { useTodo } from './useTodo'

function App() {
  const { inputText, onChangeInputText, onAdd, todoList, onDelete } = useTodo()

  return (
    <div style={{ width: '30rem', margin: '0 auto' }}>
      <h1>TODO APP</h1>
      <input
        type="text"
        name={'todo'}
        value={inputText}
        onChange={onChangeInputText}
      />
      <button type={'button'} onClick={onAdd}>
        追加
      </button>
      <div>
        <ul>
          {todoList.map(({ todo, uuid }) => (
            <li key={`todo_${uuid}`}>
              {todo}
              <button type={'button'} onClick={() => onDelete(uuid)}>
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
