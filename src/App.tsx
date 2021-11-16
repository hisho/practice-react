import { useTodo } from './useTodo'
import { TodoInput } from './TodoInput'

function App() {
  const { inputText, onChangeInputText, onAdd, todoList, onDelete } = useTodo()

  return (
    <div style={{ width: '30rem', margin: '0 auto' }}>
      <h1>TODO APP</h1>
      <TodoInput
        inputText={inputText}
        onChangeInputText={onChangeInputText}
        onAdd={onAdd}
      />
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
