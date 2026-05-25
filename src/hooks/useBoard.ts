import { useState } from 'react'
import { INITIAL_COLUMNS } from '@/constants'
import type { Card } from '@/types'

export function useBoard() {
  const [columns, setColumns] = useState(INITIAL_COLUMNS)

  function addCard(columnId: string, cardData: Omit<Card, 'id'>) {
    const newCard = { id: crypto.randomUUID(), ...cardData }

    const result = columns.map((column) =>
      column.id === columnId
        ? { ...column, cards: [...column.cards, newCard] }
        : column
    )
    setColumns(result)
  }

  function moveCard() {}

  function editCard() {}

  function deleteCard(cardId: string, columnId: string): void {
    const result = columns.map((column) =>
      column.id === columnId
        ? {
            ...column,
            cards: column.cards.filter((card) => card.id !== cardId),
          }
        : column
    )
    setColumns(result)
  }

  return { columns, addCard, moveCard, editCard, deleteCard }
}
