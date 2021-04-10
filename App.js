import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import React from 'react';
import { Searchbar } from 'react-native-paper';
import {
	StatusBar,
	StyleSheet,
	SafeAreaView,
	Text,
	View,
	TextInput,
} from 'react-native';
import { theme } from './src/infrastructure/theme';
import { ThemeProvider } from 'styled-components/native';
// import { Task } from './src/features/task/Task';
import TaskScreen from './src/features/task/screens/task.screen';
import RoundedButton from './src/components/RoundedButton';
import {
	useFonts,
	Inconsolata_400Regular,
	Inconsolata_700Bold,
} from '@expo-google-fonts/inconsolata';
// import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './src/utils/safe-area.component';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body}
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Home = () => (
	<SafeArea>
		<Text>Home</Text>
	</SafeArea>
);
const Logs = () => (
	<SafeArea>
		<Text>Logs</Text>
	</SafeArea>
);
const Settings = () => (
	<SafeArea>
		<Text>Settings</Text>
	</SafeArea>
);

const Tab = createBottomTabNavigator();

export default function App() {
	const [regLoaded] = useFonts({
		Inconsolata_400Regular,
	});
	const [boldLoaded] = useFonts({
		Inconsolata_700Bold,
	});

	if (!regLoaded || !boldLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				{/* <SafeArea>
					<Title>Welcome aboard!</Title>
				</SafeArea> */}

				<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarIcon: ({ color, size }) => {
								let iconName;

								if (route.name === 'Home') {
									iconName = 'md-boat';
								} else if (route.name === 'Logs') {
									iconName = 'md-book';
								} else if (route.name === 'Settings') {
									iconName = 'md-settings-sharp';
								}
								return <Ionicons name={iconName} size={size} color={color} />;
							},
						})}
						tabBarOptions={{
							activeTintColor: '#222f65',
							inactiveTintColor: 'gray',
						}}>
						<Tab.Screen name='Home' component={Home} />
						<Tab.Screen name='Logs' component={Logs} />
						<Tab.Screen name='Settings' component={Settings} />
					</Tab.Navigator>
				</NavigationContainer>
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
