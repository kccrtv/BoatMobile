import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import React from 'react';
import { Text } from 'react-native';
import { theme } from './src/infrastructure/theme';
import { ThemeProvider } from 'styled-components/native';
import {
	useFonts,
	Inconsolata_400Regular,
	Inconsolata_700Bold,
} from '@expo-google-fonts/inconsolata';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './src/utils/safe-area.component';
import { Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { LogsScreen } from './src/features/logs/screens/logs.screen';

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body}
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Home = () => (
	<SafeArea>
		<LottieView
			key='animation'
			autoPlay
			loop
			resizeMode='cover'
			source={require('./src/assets/sailboat.json')}
		/>
	</SafeArea>
);

const Logs = () => (
	<SafeArea>
		<LogsScreen />
	</SafeArea>
);

const Settings = () => (
	<SafeArea>
		<Title>Settings</Title>
	</SafeArea>
);

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Home: 'md-boat',
	Logs: 'md-book',
	Settings: 'md-settings-sharp',
};

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
	};
};

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
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={createScreenOptions}
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

/**
 * Reference:
 * https://www.udemy.com/course/complete-react-native-mobile-development-zero-to-mastery-with-hooks/
 * https://reactnative.dev/
 * https://github.com/expo/google-fonts
 * https://callstack.github.io/react-native-paper/
 * https://reactnavigation.org/
 * https://github.com/lottie-react-native/lottie-react-native
 * https://lottiefiles.com/
 * https://icons.expo.fyi/
 *
 */
