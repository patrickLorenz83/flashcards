import { fetchDecks, setDecks } from '../utils/decks'

export const decks = () => fetchDecks()

export const deck = async (title) => {
    const decksToFilter = await  decks()
    return decksToFilter.filter(deck => deck.title === title)[0]
}

export const addDeck = async (title) => {
    let newDecks = await decks()
    newDecks ? newDecks.push({ title, questions: [] }) : newDecks = [{ title, questions: [] }]
    setDecks(newDecks)
}

export const addCard = (title, card) => {
    const allDecksToUpdate = decks()
    allDecksToUpdate.filter(deck => deck.title === title).questions.push(card)
    setDecks(allDecksToUpdate)
}

