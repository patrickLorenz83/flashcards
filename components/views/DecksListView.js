import React                from 'react'
import { StyleSheet, View } from 'react-native'
import DecksListComponent   from '../decks/DecksListComponent'
import { white }            from '../../utils/colors'

const DecksListView = () => (
    <View style={ styles.container }>
        <DecksListComponent/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
})

export default DecksListView