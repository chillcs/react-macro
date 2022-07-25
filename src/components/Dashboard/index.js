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
					<TabList>
						<Tab id={1} onClick={openTab}>
							Tracker
						</Tab>
						<Tab id={2} onClick={openTab}>
							Food
						</Tab>
						<Tab id={3} onClick={openTab}>
							Settings
						</Tab>
					</TabList>
				</Footer>
			</App>
		</>
	);
};

export default Home;
