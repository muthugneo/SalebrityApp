import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../styles/theme';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default StyleSheet.create({
    shadow: {
        shadowColor: "#DDCFC6",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
})