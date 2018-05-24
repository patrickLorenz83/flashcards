import React, { Component }                                              from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { addDeck }                                                       from '../../api/CardsApi'
import { purple, white }                                                 from '../../utils/colors'

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
            <View style={ {
                flex: 1,
                marginLeft: 30,
                marginRight: 30,
                padding: 20
            } }>
                <KeyboardAvoidingView behavior="padding">
                    <TextInput onChangeText={ (text) => this.setState({ text }) }
                               placeholder="Enter the new deck name"
                               style={ { borderWidth: 1, height: 30 } }
                               value={ this.state.text }/>
                </KeyboardAvoidingView>
                <TouchableOpacity style={ {
                    backgroundColor: purple,
                    height: 80,
                    justifyContent: 'center',
                    marginTop: 10
                } }
                                  onPress={ this.handleSubmit }>
                    <Text style={ { color: white, textAlign: 'center' } }>Create new deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
