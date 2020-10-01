import {Dimensions, Platform} from 'react-native'

let headerHight = Platform.OS === 'ios' ? 66:46
let footerHight = 55

export const Constants = {
    headerHight:headerHight,
    footerHight:footerHight,
    viewHight:Dimensions.get('window').hight-headerHight,
    screenHight:Dimensions.get('window').hight,
    screenWidth:Dimensions.get('window').width
}