import React from 'react';
import { useState } from 'react';
import {
	App,
	Header,
	Navbar,
	Title,
	Btn,
	Body,
	Footer,
	TabList,
	Tab,
} from '../Dashboard/Elements';
import Profile from '../Dashboard/Profile/index';
import Tracker from '../Dashboard/Tracker/index';
import Food from '../Dashboard/Food/index';
import Settings from '../Dashboard/Settings/index';

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
				<Header>
					<Navbar>
						<Title>Macro</Title>
						<Btn>O</Btn>
					</Navbar>
				</Header>
				<Body>
					<Profile />
					<Tracker />
					<Food />
					<Settings />
				</Body>
				<Footer>
					<TabList>
						<Tab id={0} onClick={openTab}>
							Tracker
						</Tab>
						<Tab id={1} onClick={openTab}>
							Food
						</Tab>
						<Tab id={2} onClick={openTab}>
							Settings
						</Tab>
					</TabList>
				</Footer>
			</App>
		</>
	);
};

export default Home;
