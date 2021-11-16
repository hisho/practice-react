import { useTodoHooksResult } from './useTodo'

type TodoInputProps = Pick<
  useTodoHooksResult,
  'inputText' | 'onChangeInputText' | 'onAdd'
>

export const TodoInput = ({
  inputText,
  onChangeInputText,
  onAdd,
}: TodoInputProps) => {
  return (
    <>
      <input
        type="text"
        name={'todo'}
        value={inputText}
        onChange={onChangeInputText}
      />
      <button type={'button'} onClick={onAdd}>
        追加
      </button>
    </>
  )
}
