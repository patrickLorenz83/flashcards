import React, { Component } from 'react'
import { Text, View }       from 'react-native'

export default class QuizView extends Component {

    state = {
        deckTitle: '',
        questions: {
            answer: '',
            question: '',
            correct: undefined
        }
    }

    componentDidMount() {
        const { deck } = this.props.navigation.state.params
        this.setState({
            deckTitle: deck.title,
            questions: deck.questions
        })
    }

    render() {
        console.log('quiz state', this.state)
        return (
            <View>
                <Text>QuizView</Text>
            </View>
        )
    }
}