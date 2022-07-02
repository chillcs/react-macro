import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<>
			<Section>
				<Settings>X</Settings>
				<Title>Macro</Title>
				<Profile>O</Profile>
			</Section>
		</>
	);
};

export default Header;

/* Styles --- */

export const Section = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 10px 15px;
	background: var(--medium);
`;

export const Settings = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 25%;
`;

export const Title = styled.div`
	display: flex;
	justify-content: center;
	width: 50%;
`;

export const Profile = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 25%;
`;
