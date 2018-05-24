import { StyleSheet } from 'react-native'
import { silver }     from './colors'

const globalStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10
    },
    textInputLabel: {
        textAlign: 'center',
        fontSize: 20
    },
    textInput: {
        borderRadius: 25,
        borderWidth: 1,
        paddingLeft: 10,
        height: 30
    },
    textShadow: {
        shadowRadius: 25,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.40)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10
    },
    buttonShadow: {
        shadowRadius: 10,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.40)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    deck: {
        backgroundColor: silver,
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderRadius: 3,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.40)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    }
})

export default globalStyles