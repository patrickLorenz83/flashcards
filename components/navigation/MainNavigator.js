import Tabs                     from '../navigation/Tabs'
import DeckView                 from '../deck/DeckView'
import { createStackNavigator } from 'react-navigation'
import { purple, white }        from '../../utils/colors'
import NewCardView              from '../card/NewCardView'

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    DeckView: {
        screen: DeckView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    },
    NewCardView: {
        screen: NewCardView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }
})

export default MainNavigator
