import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}
`;

// Reference: https://www.udemy.com/course/complete-react-native-mobile-development-zero-to-mastery-with-hooks/
