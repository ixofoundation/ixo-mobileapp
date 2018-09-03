import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ThemeColors } from '../styles/Colors';

const { width, height } = Dimensions.get('window');
interface Style {
	formContainer: ViewStyle;
	photoBoxContainer: ViewStyle;
	photoBoxCloseIcon: TextStyle;
	photoBoxCameraIcon: TextStyle;
	navigatorContainer: ViewStyle;
	backNavigatorButton: TextStyle;
	claimNavigatorButton: TextStyle;
	nextNavigatorButton: TextStyle;
}

const styles = StyleSheet.create<Style>({
	formContainer: {
		backgroundColor: ThemeColors.white
	},
	photoBoxContainer: {
		width: width / 4,
		height: width / 4,
		borderWidth: 1,
		borderColor: ThemeColors.grey,
		margin: 10,
		padding: 4
	},
	photoBoxCloseIcon: {
		color: ThemeColors.grey,
		fontSize: 15
	},
	photoBoxCameraIcon: {
		color: ThemeColors.grey,
		fontSize: 50
	},
	navigatorContainer: {
		flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 15
	},
	backNavigatorButton: {
		color: ThemeColors.blue_light, fontSize: 20, alignItems: 'center', paddingLeft: 5, fontFamily: 'Roboto_condensed'
	},
	claimNavigatorButton: {
		color: ThemeColors.white, fontSize: 20, paddingRight: 5, fontFamily: 'Roboto_condensed'
	},
	nextNavigatorButton: {
		color: ThemeColors.white, fontSize: 20, paddingRight: 5, fontFamily: 'Roboto_condensed'
	}
});

export default styles;
