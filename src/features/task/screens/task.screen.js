import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';

import { TaskList } from '../components/task.component';

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const TaskListContainer = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.space[3]};
`;

export const TaskScreen = () => (
	<SafeArea>
		<SearchContainer>
			<Searchbar />
		</SearchContainer>
		<TaskListContainer>
			<TaskList />
		</TaskListContainer>
	</SafeArea>
);
