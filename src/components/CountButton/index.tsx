import { useState, ChangeEvent } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { WrapperCountButton } from './styles'

export function CountButton() {
  const [count, setCount] = useState(1)

  function onDecrementAmount() {
    count - 1 > 0 && setCount(count - 1)
  }

  function onIncrementAmount() {
    count + 1 <= 10 && setCount(count + 1)
  }

  function handleChangeCount(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.valueAsNumber > 0 && event.target.valueAsNumber <= 10) {
      setCount(event.target.valueAsNumber)
    }
  }

  return (
    <WrapperCountButton>
      <button type="button" onClick={onDecrementAmount}>
        <Minus size={14} weight="bold" />
      </button>

      <input
        type="number"
        min={1}
        max={10}
        onChange={handleChangeCount}
        value={count}
      />

      <button type="button" onClick={onIncrementAmount}>
        <Plus size={14} weight="bold" />
      </button>
    </WrapperCountButton>
  )
}
