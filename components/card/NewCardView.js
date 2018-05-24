import React, { Component }                                              from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { green, purple, white }                                          from '../../utils/colors'
import { addCard }                                                       from '../../api/CardsApi'
import globalStyles                                                      from '../../utils/globalStyles'

class NewCardView extends Component {

    static navigationOptions = ({ navigation }) => ({ title: `add card to ${navigation.state.params.title}` })

    state = {
        question: '',
        answer: ''
    }

    render() {
        const { title, refresh } = this.props.navigation.state.params
        return (
            <View style={ globalStyles.screenContainer }>
                <KeyboardAvoidingView behavior="padding">
                    <Text style={ globalStyles.textInputLabel }>Question</Text>
                    <TextInput onChangeText={ (text) => this.setState({ question: text }) }
                               placeholder="Enter the question"
                               style={ [globalStyles.textInput, globalStyles.textShadow] }
                               value={ this.state.question }/>

                    <Text style={ globalStyles.textInputLabel }>Answer</Text>
                    <TextInput onChangeText={ (text) => this.setState({ answer: text }) }
                               placeholder="Enter the answer"
                               style={ [globalStyles.textInput, globalStyles.textShadow] }
                               value={ this.state.answer }/>
                </KeyboardAvoidingView>
                <TouchableOpacity style={ [ globalStyles.button, globalStyles.buttonShadow, { backgroundColor: purple } ] }
                                  onPress={ () => {
                                      addCard(title, this.state).then(() => {
                                          refresh && refresh()
                                          this.props.navigation.navigate('DeckView', { title })
                                      })
                                  } }>
                    <Text style={ { color: white, textAlign: 'center' } }>Add Card</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewCardView