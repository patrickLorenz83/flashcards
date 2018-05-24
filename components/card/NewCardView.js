import React, { Component }                                              from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { purple, white }                                                 from '../../utils/colors'
import { addCard }                                                       from '../../api/CardsApi'

class NewCardView extends Component {

    static navigationOptions = ({ navigation }) => ({ title: `add card to ${navigation.state.params.title}` })

    state = {
        question: '',
        answer: ''
    }

    render() {
        const { title } = this.props.navigation.state.params
        return (
            <View style={ { flex: 1 } }>
                <KeyboardAvoidingView behavior="padding">
                    <Text>Question</Text>
                    <TextInput onChangeText={ (text) => this.setState({ question: text }) }
                               placeholder="Enter the question"
                               style={ { borderWidth: 1, height: 30 } }
                               value={ this.state.question }/>

                    <Text>Answer</Text>
                    <TextInput onChangeText={ (text) => this.setState({ answer: text }) }
                               placeholder="Enter the answer"
                               style={ { borderWidth: 1, height: 30 } }
                               value={ this.state.answer }/>
                </KeyboardAvoidingView>
                <TouchableOpacity style={ {
                    backgroundColor: purple,
                    height: 80,
                    justifyContent: 'center',
                    marginTop: 10
                } }
                                  onPress={ () => {
                                      addCard(title, this.state)
                                      this.props.navigation.navigate('Home')
                                  } }>
                    <Text style={ { color: white, textAlign: 'center' } }>Add Card</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewCardView