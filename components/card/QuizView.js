import React, { Component }             from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { green, red, white }            from '../../utils/colors'
import DoneComponent                    from './DoneComponent'

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
        console.log('quiz state', this.state)
        const { showAnswer, quizIndex } = this.state

        if ( quizIndex >= this.state.questions.length ) {
            return <DoneComponent correctAnswers={ this.state.correctAnswers }
                                  totalAnswers={ this.state.questions.length }
                                  deckTitle={ this.state.deckTitle }
                                  restartQuiz={ this.resetQuiz }
                                  { ...this.props }/>
        }

        return (
            <View>
                <Text>{ this.state.questions.filter(question => question.correct !== undefined).length } / { this.state.questions.length }</Text>
                <Text>QuizView</Text>
                <View>
                    <Text>Question</Text>
                    <Text>{ this.state.questions[ quizIndex ].question }</Text>
                    {
                        !showAnswer &&
                        < TouchableOpacity style={ {
                            backgroundColor: green,
                            height: 80,
                            justifyContent: 'center',
                            marginTop: 10
                        } }
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
                        <Text>Answer</Text>
                        <Text>{ this.state.questions[ quizIndex ].answer }</Text>
                        < TouchableOpacity style={ {
                            backgroundColor: green,
                            height: 80,
                            justifyContent: 'center',
                            marginTop: 10
                        } }
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
                        < TouchableOpacity style={ {
                            backgroundColor: red,
                            height: 80,
                            justifyContent: 'center',
                            marginTop: 10
                        } }
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
                }
            </View>
        )
    }
}