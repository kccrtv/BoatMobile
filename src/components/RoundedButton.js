import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

export const RoundedButton = ({
	style = {},
	textStyle = {},
	size = 125,
	...props
}) => {
	return (
		<TouchableOpacity
			style={[styles(size).radius, style]}
			onPress={props.onPress}>
			<Text style={[styles(size).text, textStyle]}>{props.title}</Text>
		</TouchableOpacity>
	);
};

const styles = (size) =>
	StyleSheet.create({
		radius: {
			borderRadius: size / 2,
			borderRadius: spacing.sm,
			width: spacing.xxxl,
			height: size,
			alignItems: 'center',
			justifyContent: 'center',
			borderColor: colors.darkBlue,
			borderWidth: 2,
		},
		text: {
			color: colors.darkBlue,
			fontSize: size / 3,
		},
		//     secondary: {
		//       // borderRadius: size / 2,
		//       borderRadius: spacing.sm,
		//       width: spacing.xxxl,
		//       height: size,
		//       alignItems: 'center',
		//       justifyContent: 'center',
		//       borderColor: colors.darkBlue,
		//       borderWidth: 2,
		//     },
		//     secondaryText: { color: colors.darkBlue, fontSize: size / 3 },
		//     primary: {
		// borderRadius: spacing.sm,
		//       width: spacing.xxxl,
		//       height: size,
		//       alignItems: 'center',
		//       justifyContent: 'center',
		//       backgroundColor: colors.darkBlue,
		//       // borderColor: colors.darkBlue,
		//       borderWidth: 2,
		//     },
		//     primaryText: { color: colors.lightGray, fontSize: size / 3 }
	});
