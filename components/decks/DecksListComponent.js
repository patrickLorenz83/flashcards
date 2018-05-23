import React, { Component }                   from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import * as CardsApi                          from '../../api/CardsApi'
import { gray }                               from '../../utils/colors'

export default class DecksListComponent extends Component {

    state = {
        decks: []
    }

    async componentDidMount() {
        await this.readDecks()
    }

    async componentWillReceiveProps() {
        await this.readDecks()
    }

    async readDecks() {
        const decksList = await CardsApi.decks()
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
        console.log('decks list state', this.state)
        const decks = this.state.decks.map(deck => (
            <View key={ deck.title }
                  style={ [ styles.decks ] }>
                <Text style={ styles.text }>{ deck.title }</Text>
                <Text style={ [ styles.text, { color: gray } ] }>{ deck.count } Cards</Text>
            </View>
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
    },
    decks: {
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 100,
        paddingRight: 100,
        borderWidth: 1,
        borderRadius: 3,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.40)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    text: {
        textAlign: 'center'
    },
})
