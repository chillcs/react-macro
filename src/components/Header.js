import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<>
			<Section>
				<Title>Macro</Title>
				<Profile>O</Profile>
			</Section>
		</>
	);
};

export default Header;

/* Styles --- */

export const Section = styled.div`
	position: relative;
	width: 100%;
	height: 50px;
`;

export const Title = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 25px;
`;

export const Profile = styled.div`
	position: absolute;
	top: 50%;
	right: 0%;
	transform: translate(0, -50%);
	padding: 15px;
	background: var(--light);
`;
