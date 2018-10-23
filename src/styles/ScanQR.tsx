import { Dimensions, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { ThemeColors } from './Colors';

const { height, width } = Dimensions.get('window');

interface Style {
	infoBlock: ViewStyle;
	infoBlockImage: ImageStyle;
	moreInfoText: TextStyle;
	moreInfoTextContainer: ViewStyle;
	infoBlockOuterContainer: ViewStyle;
	keysafeText: TextStyle;
	infoText: TextStyle;
	dividerContainer: ViewStyle;
	divider: ViewStyle;
	closeIcon: TextStyle;
}

const styles = StyleSheet.create<Style>({
	infoBlockOuterContainer: {
		alignItems: 'flex-end',
		flexDirection: 'column',
		flex: 1,
		margin: 10
	},
	infoBlock: {
		justifyContent: 'center',
		height: height * 0.1,
		borderLeftWidth: 0,
		backgroundColor: ThemeColors.blue_dark
	},
	infoBlockImage: {
		width: width * 0.08,
		height: width * 0.08
	},
	keysafeText: {
		color: ThemeColors.white,
		fontSize: 12,
		padding: 10,
		width: width * 0.35
	},
	infoText: {
		color: ThemeColors.white,
		fontSize: 12,
		padding: 10,
		width: width * 0.35
	},
	moreInfoText: {
		color: ThemeColors.blue_lightest,
		fontSize: 12,
		textDecorationLine: 'underline',
		textAlign: 'center'
	},
	moreInfoTextContainer: {
		flex: 0.08,
		alignItems: 'center',
		backgroundColor: ThemeColors.blue_dark,
		width: '100%'
	},
	dividerContainer: {
		width: '100%',
		backgroundColor: ThemeColors.blue_dark
	},
	divider: {
		width: '95%',
		height: 1,
		backgroundColor: ThemeColors.blue_lightest,
		alignSelf: 'center'
	},
	closeIcon: {
		color: ThemeColors.white,
		top: 10,
		fontSize: 30
	}
});

export default styles;
