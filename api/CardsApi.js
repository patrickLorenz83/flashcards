import { fetchDecks, setDecks } from '../utils/decks'

export const decks = () => fetchDecks()

export const deck = async (title) => {
    const decksToFilter = await  decks()
    return decksToFilter.filter(deck => deck.title === title).shift()
}

export const addDeck = async (title) => {
    let newDecks = await decks()
    newDecks ? newDecks.push({ title, questions: [] }) : newDecks = [{ title, questions: [] }]
    setDecks(newDecks)
}

export const addCard = async (title, card) => {
    const allDecksToUpdate = await decks()
    allDecksToUpdate.filter(deck => deck.title === title).shift().questions.push(card)
    setDecks(allDecksToUpdate)
}

