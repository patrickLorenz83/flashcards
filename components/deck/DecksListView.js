import React                from 'react'
import { StyleSheet, View } from 'react-native'
import DecksListComponent   from './DecksListComponent'

const DecksListView = (props) => (
    <View style={ styles.container }>
        <DecksListComponent {...props}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
})

export default DecksListView