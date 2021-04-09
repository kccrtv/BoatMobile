import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Task = ({ addTask, clearTask }) => {
	const [tempItem, setTempItem] = useState(null);

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Add to your task list:</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={{ flex: 1, marginRight: spacing.md }}
						onSubmitEditing={({ nativeEvent }) => {
							setTempItem(nativeEvent.text);
						}}
					/>
				</View>
				<View style={styles.buttonWrapper}>
					<RoundedButton title='Reset' size={50} onPress={() => clearTask()} />
					<RoundedButton
						size={50}
						title='+'
						onPress={() => {
							addTask(tempItem);
						}}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	titleContainer: {
		flex: 0.5,
		padding: spacing.md,
		justifyContent: 'center',
	},
	title: {
		color: colors.darkBlue,
		fontWeight: 'bold',
		fontSize: fontSizes.lg,
		textAlign: 'center',
	},
	inputContainer: {
		paddingTop: spacing.md,
		flexDirection: 'row',
		alignItems: 'center',
	},
	buttonWrapper: {
		flex: 0.3,
		flexDirection: 'row',
		padding: spacing.md,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
});
