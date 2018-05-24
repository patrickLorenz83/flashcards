import React, { Component } from 'react'
import { Text, View }       from 'react-native'

class NewCardView extends Component {

    static navigationOptions = ({ navigation }) => ({ title: `add card to ${navigation.state.params.title}` })

    render() {
        return (
            <View>
                <Text>New Card View</Text>
            </View>
        )
    }
}

export default NewCardView