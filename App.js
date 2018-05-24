import React                    from 'react'
import { StyleSheet, View }     from 'react-native'
import MyStatusBar              from './components/navigation/MyStatusBar'
import { purple }               from './utils/colors'
import { setDummyData }         from './utils/decks'
import MainNavigator            from './components/navigation/MainNavigator'
import { setLocalNotification } from './utils/notifications'

export default class App extends React.Component {

    componentWillMount(){
        setDummyData()
        setLocalNotification()
    }

    render() {
        return (
            <View style={ { flex: 1 } }>
                <MyStatusBar backgroundColor={purple} barStyle="light-content"/>
                <MainNavigator/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
