import React                from 'react'
import { StyleSheet, View } from 'react-native'
import Tabs                 from './components/Tabs'
import MyStatusBar          from './components/MyStatusBar'
import { purple }           from './utils/colors'
import { setDummyData }     from './utils/decks'

export default class App extends React.Component {

    componentWillMount(){
        //setDummyData()
    }

    render() {
        return (
            <View style={ { flex: 1 } }>
                <MyStatusBar backgroundColor={purple} barStyle="light-content"/>
                <Tabs/>
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
