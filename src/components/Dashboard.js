import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Settings from './Settings/index';
import Track from './Tracker/index';
import Food from './Food/index';

const Home = () => {
	const [active, setActive] = useState(0);
	const openTab = (event) => {
		const target = event.currentTarget.id;
		setActive(active === target ? active : target);
	};
	console.log(active);
	return (
		<>
			<App>
				<HeaderPosition>
					<Header>
						<Title>Macro</Title>
						<Profile>O</Profile>
					</Header>
				</HeaderPosition>
				<Body>
					<Track active={active} />
					<Food />
					<Settings />
				</Body>
				<FooterPosition>
					<Footer>
						<Button id={0} onClick={openTab}>
							Track
						</Button>
						<Button id={1} onClick={openTab}>
							Foods
						</Button>
						<Button id={2} onClick={openTab}>
							Settings
						</Button>
					</Footer>
				</FooterPosition>
			</App>
		</>
	);
};

export default Home;

/* Styles --- */

export const App = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	padding: 15px;
	background: var(--medium);
`;

export const HeaderPosition = styled.div`
	position: fixed;
	top: 0%;
	left: 0%;
	width: 100%;
`;

export const Header = styled.div`
	position: relative;
	width: 100%;
	height: 80px;
	background: var(--dark);
`;

export const Title = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 25px;
	color: var(--light);
`;

export const Profile = styled.div`
	position: absolute;
	top: 50%;
	right: 0%;
	transform: translate(0, -50%);
	padding: 15px;
	margin-right: 15px;
	background: var(--light);
`;

export const Body = styled.div`
	position: absolute;
	top: 80px;
	left: 0%;
	width: 100%;
`;

export const FooterPosition = styled.div`
	position: fixed;
	bottom: 0%;
	left: 0%;
	width: 100%;
`;

export const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 50px;
	background: var(--dark);
`;

export const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 15px;
	color: var(--light);
`;
