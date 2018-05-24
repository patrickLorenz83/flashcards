import React, { Component }             from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { green, lightPurp, red, white } from '../../utils/colors'
import DoneComponent                    from './DoneComponent'
import globalStyles                     from '../../utils/globalStyles'

export default class QuizView extends Component {

    state = {
        deckTitle: '',
        showAnswer: false,
        questions: [ {
            answer: '',
            question: '',
            correct: undefined
        } ],
        quizIndex: 0,
        correctAnswers: 0
    }

    componentDidMount() {
        const { deck } = this.props.navigation.state.params
        this.setState(state => ({
            ...state,
            deckTitle: deck.title,
            questions: [
                ...deck.questions.map(question => ({
                    ...question,
                    correct: undefined
                }))
            ],
        }))
    }

    resetQuiz = () => {
        this.setState(state => ({
            ...state,
            correctAnswers: 0,
            quizIndex: 0,
            showAnswer: false,
            questions: [
                ...this.state.questions.map(question => ({
                    ...question,
                    correct: undefined
                }))
            ],
        }))
    }

    render() {
        const { showAnswer, quizIndex } = this.state

        if ( quizIndex >= this.state.questions.length ) {
            return (
                <View style={ globalStyles.screenContainer }>
                    <DoneComponent correctAnswers={ this.state.correctAnswers }
                                   totalAnswers={ this.state.questions.length }
                                   deckTitle={ this.state.deckTitle }
                                   restartQuiz={ this.resetQuiz }
                                   { ...this.props }/>
                    }
                </View>
            )
        }

        return (
            <View style={ globalStyles.screenContainer }>
                <Text>{ this.state.questions.filter(question => question.correct !== undefined).length } / { this.state.questions.length }</Text>
                <View>
                    <Text style={ globalStyles.textInputLabel }>Question</Text>
                    <Text style={ { marginTop: 5 } }>{ this.state.questions[ quizIndex ].question }</Text>
                    {
                        !showAnswer &&
                        < TouchableOpacity style={ [ globalStyles.button, globalStyles.buttonShadow, { backgroundColor: lightPurp } ] }
                                           onPress={ () => {
                                               this.setState(state => ({
                                                   ...state,
                                                   showAnswer: true
                                               }))
                                           } }>
                            <Text style={ { color: white, textAlign: 'center' } }>show answer</Text>
                        </TouchableOpacity>
                    }

                </View>
                {
                    showAnswer &&
                    <View>
                        <Text style={ globalStyles.textInputLabel }>Answer</Text>
                        <Text style={ { marginTop: 5 } }>{ this.state.questions[ quizIndex ].answer }</Text>
                        <View style={ {
                            flex: 1,
                            marginRight: 10,
                            marginLeft: 10,
                            justifyContent: 'space-around',
                            flexDirection: 'row'
                        } }>
                            < TouchableOpacity style={ [ globalStyles.button, globalStyles.buttonShadow, { backgroundColor: green } ] }
                                           onPress={ () => {
                                               this.setState(state => ({
                                                   ...state,
                                                   questions: [
                                                       ...this.state.questions,
                                                       ...this.state.questions[ quizIndex ].correct = true
                                                   ],
                                                   quizIndex: this.state.quizIndex + 1,
                                                   correctAnswers: this.state.correctAnswers + 1,
                                                   showAnswer: false
                                               }))
                                           } }>
                            <Text style={ { color: white, textAlign: 'center' } }>correct</Text>
                        </TouchableOpacity>
                            < TouchableOpacity style={ [ globalStyles.button, globalStyles.buttonShadow, { backgroundColor: red } ] }
                                               onPress={ () => {
                                               this.setState(state => ({
                                                   ...state,
                                                   questions: [
                                                       ...this.state.questions,
                                                       ...this.state.questions[ quizIndex ].correct = false
                                                   ],
                                                   quizIndex: this.state.quizIndex + 1,
                                                   showAnswer: false
                                               }))
                                           } }>
                            <Text style={ { color: white, textAlign: 'center' } }>incorrect</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        )
    }
}