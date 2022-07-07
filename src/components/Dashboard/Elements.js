import styled from 'styled-components';

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

export const Footer = styled.div`
	position: fixed;
	bottom: 0%;
	left: 0%;
	height: 50px;
	width: 100%;
	background: var(--dark);
`;

export const TabList = styled.div`
	display: flex;
`;

export const Tab = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 15px;
	color: var(--light);
`;
