import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import React from 'react';
import { Button } from 'react-native-paper';
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
import { colors } from './src/infrastructure/theme/colors';
import { space } from './src/infrastructure/theme/spacing';
import LottieView from 'lottie-react-native';

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
		{/* <Title>Home</Title> */}
	</SafeArea>
);
const Logs = () => (
	<SafeArea>
		<Title>Logs</Title>
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

const AccountContainer = styled.View`
	flex: 1;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.7);
	padding: ${(props) => props.theme.space[4]};
	margin-top: ${(props) => props.theme.space[2]};
`;

const AuthButton = styled(Button).attrs({
	color: colors.brand.primary,
})`
	padding: ${(props) => props.theme.space[2]};
	margin-top: ${(props) => props.theme.space[4]};
`;

export default function App() {
	const myFetch = fetch('https://warm-dusk-07017.herokuapp.com/logs');

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
					<AccountContainer>
						<AuthButton
							icon='lock-open-outline'
							mode='contained'
							onPress={() => console.log('Pressed')}>
							Login
						</AuthButton>
						<AuthButton
							icon='lock-open-outline'
							mode='contained'
							onPress={() => console.log('Pressed')}>
							Register
						</AuthButton>
					</AccountContainer>
				</SafeArea> */}

				{/* <SafeArea>
					<Title>Welcome aboard!</Title>
				</SafeArea> */}

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
