import React                        from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import DecksListView                from './views/DecksListView'
import NewDeckView                  from './views/NewDeckView'
import { purple, white }            from '../utils/colors'
import { FontAwesome, Ionicons }    from '@expo/vector-icons'

const Tabs = createBottomTabNavigator({
    DecksListView: {
        screen: DecksListView,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums-outline'
                                                     size={ 30 }
                                                     color={ tintColor }/>
        },
    },
    NewDeckView: {
        screen: NewDeckView,
        navigationOptions: {
            tabBarLabel: 'New Deck',
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-create-outline'
                                                        size={ 30 }
                                                        color={ tintColor }/>
        },
    },
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: purple,
        style: {
            height: 56,
            backgroundColor: white,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})

export default Tabs