import React, { useContext, useState, useEffect } from 'react';
import { Searchbar, Card } from 'react-native-paper';
import { StatusBar, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { ScrollView } from 'react-native-gesture-handler';

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const ItemContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

export const EntryCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Title = styled.Text`
	font-family: ${(props) => props.theme.fonts.heading};
	font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Body = styled.Text`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

export const LogsScreen = () => {
	const [log, setLog] = useState([]);
	const url = 'https://warm-dusk-07017.herokuapp.com/logs';

	function getLog() {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				let newLog = res;
				setLog(newLog);
			})
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		getLog(log);
	}, []);

	return (
		<SafeArea>
			<SearchContainer>
				<Searchbar />
			</SearchContainer>
			<ScrollView>
				{log.length > 0 ? (
					<ItemContainer>
						<EntryCard elevation={5}>
							<Info>
								<>
									<Title>{log[0].title}</Title>
									<Body>{log[0].content}</Body>
								</>
							</Info>
						</EntryCard>
						<Spacer />
						<EntryCard elevation={5}>
							<Info>
								<>
									<Title>{log[1].title}</Title>
									<Body>{log[1].content}</Body>
								</>
							</Info>
						</EntryCard>
						<Spacer />
						<EntryCard elevation={5}>
							<Info>
								<>
									<Title>{log[2].title}</Title>
									<Body>{log[2].content}</Body>
								</>
							</Info>
						</EntryCard>
						<Spacer />
						<EntryCard elevation={5}>
							<Info>
								<>
									<Title>{log[3].title}</Title>
									<Body>{log[3].content}</Body>
								</>
							</Info>
						</EntryCard>
						<Spacer />
						<EntryCard elevation={5}>
							<Info>
								<>
									<Title>{log[4].title}</Title>
									<Body>{log[4].content}</Body>
								</>
							</Info>
						</EntryCard>
					</ItemContainer>
				) : null}
			</ScrollView>
		</SafeArea>
	);
};

// Reference: https://www.udemy.com/course/complete-react-native-mobile-development-zero-to-mastery-with-hooks/
