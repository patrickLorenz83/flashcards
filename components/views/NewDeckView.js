import React, { Component }                                              from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { addDeck }                                                       from '../../api/CardsApi'

export default class NewDeckView extends Component {

    state = {
        text: ''
    }
    handleSubmit = () =>{
        addDeck(this.state.text)
    }

    render() {

        return (
            <View>
                <KeyboardAvoidingView behavior="padding">
                    <TextInput onChangeText={ (text) => this.setState({ text }) }
                               placeholder="Enter the new deck name."
                               style={ { borderWidth: 1 } }
                               value={ this.state.text }/>
                </KeyboardAvoidingView>
                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text>Create new deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
