import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { theme } from './src/infrastructure/theme';
import { ThemeProvider } from 'styled-components/native';
import { Task } from './src/features/task/Task';

import {
	useFonts,
	Inconsolata_400Regular,
	Inconsolata_700Bold,
} from '@expo-google-fonts/inconsolata';

export default function App() {
	let [regLoaded] = useFonts({
		Inconsolata_400Regular,
	});
	let [boldLoaded] = useFonts({
		Inconsolata_700Bold,
	});

	if (!regLoaded || !boldLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<Task />
			</ThemeProvider>
			<ExpoStatusBar style='auto' />
		</>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		marginTop: StatusBar.currentHeight,
// 	},
// 	search: {
// 		padding: 16,
// 	},
// 	list: {
// 		flex: 1,
// 		padding: 16,
// 		backgroundColor: 'blue',
// 	},
// })
