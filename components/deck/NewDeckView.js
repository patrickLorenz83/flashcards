import React, { Component }                                              from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { addDeck }                                                       from '../../api/CardsApi'
import { green, purple, white }                                          from '../../utils/colors'
import globalStyles                                                      from '../../utils/globalStyles'

export default class NewDeckView extends Component {

    state = {
        text: ''
    }
    handleSubmit = () =>{
        addDeck(this.state.text).then(() => {
                this.props.navigation.navigate('DeckView', { title: this.state.text })
            }
        )
    }

    render() {

        return (
            <View style={ globalStyles.screenContainer }>
                <KeyboardAvoidingView behavior="padding">
                    <TextInput onChangeText={ (text) => this.setState({ text }) }
                               placeholder="Enter the new deck name"
                               style={ [globalStyles.textInput, globalStyles.textShadow] }
                               value={ this.state.text }/>
                </KeyboardAvoidingView>
                <TouchableOpacity style={ [ globalStyles.button, globalStyles.buttonShadow, { backgroundColor: purple } ] }
                                  onPress={ this.handleSubmit }>
                    <Text style={ { color: white, textAlign: 'center' } }>Create new deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
