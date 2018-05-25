import React, { Component }                             from 'react'
import { Text, TouchableOpacity, View }                 from 'react-native'
import * as CardApi                                     from '../../api/CardsApi'
import { gray, lightPurp, purple, white }               from '../../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../../utils/notifications'
import globalStyles                                     from '../../utils/globalStyles'

class DeckView extends Component {

    state = {
        deck: {
            questions: []
        }
    }
    static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.title })

    async componentWillReceiveProps(nextProps) {
        const deck = await CardApi.deck(nextProps.navigation.state.params.title)
        this.setState({ deck })
    }

    async componentDidMount() {
        const deck = await CardApi.deck(this.props.navigation.state.params.title)
        this.setState({ deck })
    }

    render() {
        const { title, refresh } = this.props.navigation.state.params
        return (
            <View style={ [ globalStyles.screenContainer, { justifyContent: 'flex-start' } ] }>
                <View style={ [ globalStyles.deck ] }>
                    <Text style={ { textAlign: 'center' } }>{ title }</Text>
                    { this.state.deck.questions &&
                    <Text style={ {
                        color: gray,
                        textAlign: 'center'
                    } }>{ this.state.deck.questions.length } Cards</Text> }
                </View>
                <TouchableOpacity style={ [ globalStyles.button, globalStyles.buttonShadow, { backgroundColor: purple } ] }
                                  onPress={ () => this.props.navigation.navigate(
                                      'NewCardView',
                                      {
                                          title: this.state.deck.title,
                                          refresh
                                      }
                                  ) }>
                    <Text style={ { color: white, textAlign: 'center' } }>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ [ globalStyles.button, globalStyles.buttonShadow, { backgroundColor: white } ] }
                                  onPress={ this.startQuiz }>
                    <Text style={ { color: lightPurp, textAlign: 'center' } }>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }

    startQuiz = () => {
        clearLocalNotification().then(setLocalNotification())
        this.props.navigation.navigate(
            'QuizView',
            { deck: this.state.deck }
        )
    }
}

export default DeckView