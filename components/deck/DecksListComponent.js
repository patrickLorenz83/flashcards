import React, { Component }                               from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as CardsApi                                      from '../../api/CardsApi'
import { gray }                                           from '../../utils/colors'
import globalStyles                                       from '../../utils/globalStyles'

export default class DecksListComponent extends Component {

    state = {
        decks: []
    }

    componentDidMount() {
        this.readDecks()
    }

    async shouldComponentUpdate() {
        const fetchedDecks = await CardsApi.decks()
        if ( fetchedDecks && JSON.stringify(this.state.decks) !== JSON.stringify(fetchedDecks.map(deck => ({
            title: deck.title,
            count: deck.questions.length
        }))) ) {
            this.readDecks(fetchedDecks)
            return true
        }
        return false
    }


    /**
     * Fetching the decks and adding the required data to the state.
     *
     * @returns {Promise<void>}
     */
    readDecks = async (decks) => {
        const decksList = decks ? decks: await CardsApi.decks()
        decksList && decksList.length > 0 && this.setState(state => (
            {
                ...state,
                decks: decksList.map(deck => ({
                    title: deck.title,
                    count: deck.questions.length
                }))
            })
        )
    }

    render() {
        const decks = this.state.decks.map(deck => (
            <TouchableOpacity key={ deck.title }
                              style={ [ globalStyles.deck ] }
                              onPress={ () => this.props.navigation.navigate(
                                  'DeckView',
                                  {
                                      title: deck.title,
                                      refresh: () => this.readDecks()
                                  }
                              ) }>
                <Text style={ styles.text }>{ deck.title }</Text>
                <Text style={ [ styles.text, { color: gray } ] }>{ deck.count } Cards</Text>
            </TouchableOpacity>
        ))
        return (
            <ScrollView style={ styles.container }>
                { decks }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    text: {
        textAlign: 'center',
        flex: 1
    },
})
