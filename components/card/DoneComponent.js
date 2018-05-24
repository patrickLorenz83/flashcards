import React                            from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { lightPurp, purple, white }     from '../../utils/colors'
import globalStyles                     from '../../utils/globalStyles'

const DoneComponent = ({ deckTitle, correctAnswers, totalAnswers, restartQuiz, ...props }) => (
    <View styles={ globalStyles.screenContainer }>
        <Text>Done</Text>
        <Text>{ correctAnswers } Correct answers of { totalAnswers } questions!</Text>
        < TouchableOpacity style={ [ globalStyles.button, globalStyles.buttonShadow, { backgroundColor: purple } ] }
                           onPress={ () => {
                               props.navigation.navigate('DeckView', { title: deckTitle })
                           } }>
            <Text style={ { color: white, textAlign: 'center' } }>Go to deck</Text>
        </TouchableOpacity>
        < TouchableOpacity style={ [ globalStyles.button, globalStyles.buttonShadow, { backgroundColor: white } ] }
                           onPress={ () => {
                               restartQuiz()
                           } }>
            <Text style={ { color: lightPurp, textAlign: 'center' } }>reset quiz</Text>
        </TouchableOpacity>
    </View>
)

export default DoneComponent

