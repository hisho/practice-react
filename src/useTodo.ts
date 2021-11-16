import { ChangeEvent, useState } from 'react'
import { v4 } from 'uuid'

export const useTodo = () => {
  const [inputText, setInputText] = useState('')
  const [todoList, setTodoList] = useState<
    {
      uuid: string
      todo: string
    }[]
  >([])

  const onChangeInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const onAdd = () => {
    if (inputText.length === 0) return
    setTodoList((prevState) => [
      ...prevState,
      {
        uuid: v4(),
        todo: inputText,
      },
    ])
    setInputText('')
  }

  //削除するメソッド
  const onDelete = (uuid: string) => {
    setTodoList((prevState) => {
      return prevState.filter((n) => n.uuid !== uuid)
    })
  }

  return {
    inputText,
    onChangeInputText,
    onAdd,
    todoList,
    onDelete,
  }
}

export type useTodoHooksResult = ReturnType<typeof useTodo>
