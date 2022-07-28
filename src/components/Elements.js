import styled from 'styled-components';

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	height: calc(100vh - 80px - 50px);
	padding: 10px;
	overflow: auto;
`;

export const Library = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	width: calc(100% - 20px);
	height: calc(100% - 50px - 30px);
	margin: 10px;
	background-color: var(--light);
	overflow-y: auto;
	z-index: 20;
`;

export const Table = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 10px;
	padding-bottom: 5px;
	background: var(--light);
`;

export const Row = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
	border-top: 1px solid var(--medium);
	&:last-of-type {
		border-bottom: none;
	}
`;

export const Cell = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	padding-left: 5px;
	font-size: var(--xs);
`;

export const Title = styled.div`
	width: 100%;
	margin: 20px 0 5px 0;
	text-align: center;
	font-size: var(--p);
`;

export const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50px;
	background: var(--light);
	font-size: var(--p);
	&:hover {
		cursor: pointer;
	}
`;

export const ButtonSm = styled.div`
	display: flex;
	justify-content: center;
	min-width: 20px;
	margin: 0 5px 0 15px;
	font-size: var(--xs);
	&:hover {
		cursor: pointer;
	}
`;
