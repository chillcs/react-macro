import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Profile from '../Dashboard/Profile/index';
import Tracker from '../Dashboard/Tracker/index';
import Food from '../Dashboard/Food/index';
import Settings from '../Dashboard/Settings/index';

const Home = () => {
	const [active, setActive] = useState(2);
	function openTab(event) {
		const target = event.currentTarget.id;
		setActive((active) => (active === target ? active : target));
	}
	return (
		<>
			<App>
				<Header>
					<Navbar>
						<Title>Macro</Title>
						<Btn id={0} onClick={openTab}>
							Profile
						</Btn>
					</Navbar>
				</Header>
				<Body>
					{parseInt(active) === 0 && <Profile />}
					{parseInt(active) === 1 && <Tracker />}
					{parseInt(active) === 2 && <Food />}
					{parseInt(active) === 3 && <Settings />}
				</Body>
				<Footer>
					<Tabs>
						<Tab id={1} onClick={openTab}>
							Tracker
						</Tab>
						<Tab id={2} onClick={openTab}>
							Food
						</Tab>
						<Tab id={3} onClick={openTab}>
							Settings
						</Tab>
					</Tabs>
				</Footer>
			</App>
		</>
	);
};

export default Home;

export const App = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	padding: 15px;
	background: var(--medium);
`;

export const Header = styled.div`
	position: fixed;
	top: 0%;
	left: 0%;
	width: 100%;
	background: var(--dark);
`;

export const Navbar = styled.div`
	position: relative;
	height: 80px;
`;

export const Title = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 25px;
	color: var(--light);
`;

export const Btn = styled.div`
	position: absolute;
	top: 50%;
	right: 0%;
	transform: translate(0, -50%);
	padding: 20px;
	margin-right: 10px;
	background: var(--light);
	&:hover {
		cursor: pointer;
	}
`;

export const Body = styled.div`
	position: absolute;
	top: 80px;
	left: 0%;
	width: 100%;
`;

export const Footer = styled.div`
	position: fixed;
	bottom: 0%;
	left: 0%;
	height: 50px;
	width: 100%;
	background: var(--dark);
`;

export const Tabs = styled.div`
	display: flex;
`;

export const Tab = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 15px 10px;
	color: var(--light);
	&:hover {
		cursor: pointer;
	}
`;
