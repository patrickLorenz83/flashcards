import React                             from 'react'
import { Text, TouchableOpacity, View }  from 'react-native'
import { lightPurp, purple, red, white } from '../../utils/colors'

const DoneComponent = ({ deckTitle, correctAnswers, totalAnswers, restartQuiz, ...props }) => (
    <View>
        <Text>Done</Text>
        <Text>{ correctAnswers } Correct answers of { totalAnswers } questions!</Text>
        < TouchableOpacity style={ {
            backgroundColor: purple,
            height: 80,
            justifyContent: 'center',
            marginTop: 10
        } }
                           onPress={ () => {
                               props.navigation.navigate('DeckView', { title: deckTitle })
                           } }>
            <Text style={ { color: white, textAlign: 'center' } }>Go to deck</Text>
        </TouchableOpacity>
        < TouchableOpacity style={ {
            backgroundColor: white,
            height: 80,
            justifyContent: 'center',
            marginTop: 10
        } }
                           onPress={ () => {
                               restartQuiz()
                           } }>
            <Text style={ { color: lightPurp, textAlign: 'center' } }>reset quiz</Text>
        </TouchableOpacity>
    </View>
)

export default DoneComponent

