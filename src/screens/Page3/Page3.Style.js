import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../styles/theme';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white_color
    },
    topViewStyle: {
        width: screenWidth,
        height: screenHeight / 4,
        backgroundColor: colors.primary_color
    },
    topLineViewStyle: {
        flexDirection: "row",
        marginTop: 50,
        marginLeft: 20
    },
    iconStyle: {
        width: 24,
        height: 24
    },
    logoViewStyle: {
        marginLeft: screenWidth / 3.75
    },
    logoStyle: {
        width: 86,
        height: 86,
        marginTop: -60
    },
    searchViewStyle: {
        flexDirection: 'row',
        width: screenWidth - 40,
        height: screenHeight / 16,
        alignSelf: 'center',
        backgroundColor: colors.white_color,
        marginTop: 20,
        borderRadius: 16,
        borderWidth: 0.8,
        borderColor: '#2E2E2E',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    searchTextStyle: {
        width: screenWidth - 120,
        fontFamily: fonts.medium_font,
        fontSize: 14,
        textAlign: 'center',
    },
    centerViewStyle: {
        flex: 1,
        backgroundColor: colors.white_color,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginBottom: 100
    },
    boxViewStyle: {
        width: screenWidth - 40,
        height: screenHeight / 4.5,
        backgroundColor: colors.primary_color,
        alignSelf: 'center',
        marginTop: 20,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        borderBottomEndRadius: 56,
        borderWidth: 0.5,
        shadowColor: "#2E2E2E",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 10
    },
    boxheadertext: {
        fontFamily: fonts.regular_font,
        fontSize: 18,
        color: colors.font_color,
        padding: 20
    },
    boxsubheadertext: {
        fontFamily: fonts.regular_font,
        fontSize: 16,
        paddingLeft: 20,
        lineHeight: 24,
        color: colors.font_color,
        opacity: 0.80
    },
    iconLineStyle: {
        width: screenWidth / 6.5,
        height: 10,
        marginLeft: 20,
        marginTop: 20
    },
    productListView: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom:15
    },
    headerText: {
        fontFamily: fonts.medium_font,
        fontSize: 18,
        color: colors.font_color
    },
    headerRightText: {
        fontFamily: fonts.medium_font,
        fontSize: 16,
        color: colors.font_color,
        opacity: 0.80,
        position: 'absolute',
        right: 20,
    },
    productView: {
        flex:1,
        width: screenWidth - 20,
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom:20,
       backgroundColor:colors.white_color,
       marginTop:5
    },
    productBoxView: {
        width: screenWidth / 2.3,
        height: screenHeight / 3,
        backgroundColor: colors.white_color,
        elevation: 10,
        borderRadius: 16,
        marginLeft: 10
    },
    productTopLine: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxImageStyle: {
        width: 16,
        height: 16
    },
    regularText: {
        fontFamily: fonts.regular_font,
        fontSize: 10,
        color: colors.font_color,
        paddingLeft: 5
    },
    topBoxView: {
        width: 45,
        height: 15,
        backgroundColor: '#00A3FF',
        borderRadius: 4,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallText: {
        fontFamily: fonts.regular_font,
        fontSize: 8,
        color: colors.white_color
    },
    boxBigImageStyle: {
        width: screenWidth / 2.9,
        height: screenHeight / 5.75,
        alignSelf: 'center'
    },
    productHeaderText: {
        fontFamily: fonts.semibold_font,
        fontSize: 14,
        color: colors.font_color,
    },
    boxProductImageStyle: {
        width: 16,
        height: 16
    },
    productRoundView: {
        width: 22,
        height: 22,
        borderRadius: 100,
        backgroundColor: colors.primary_color,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxSmallImageStyle: {
        width: screenWidth / 10,
        height: screenHeight / 14,
    },
    moreTextStyle: {
        fontFamily: fonts.medium_font,
        fontSize: 14,
        color: colors.font_color,
        textAlign: 'right',
        paddingRight:25,
        paddingTop:20
    }
})