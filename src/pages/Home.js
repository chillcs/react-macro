import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Settings from '../components/Settings/index';
import Track from '../components/Track/index';
import Foods from '../components/Foods/index';

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
					<Header />
				</HeaderPosition>
				<Body>
					<Track active={active} />
					<Foods />
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
