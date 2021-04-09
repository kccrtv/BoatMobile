import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Task } from './src/features/task/Task';
import { colors } from './src/utils/colors';

export default function App() {
	const [task, setTask] = useState(null);
	const [taskHistory, setTaskHistory] = useState([]);

	useEffect(() => {
		if (task) {
			setTask([...taskHistory, task]);
		}
	}, [task]);

	console.log(taskHistory);

	return (
		<View style={styles.container}>
			{task ? (
				<Text>{task}</Text>
			) : (
				<Task addTask={setTask} clearTask={() => setTask(null)} />
			)}
			<Text>{task}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.lightGray,
	},
});
