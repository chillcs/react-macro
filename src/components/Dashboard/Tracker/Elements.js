import styled from 'styled-components';

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

export const TabList = styled.div`
	display: flex;
	width: 100%;
`;

export const Tab = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 10px;
	background: var(--light);
`;

export const Graph = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const GraphItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	text-align: center;
	width: 100px;
`;

export const Bar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	min-height: 10px;
	margin-bottom: 10px;
	background: var(--light);
`;

export const Title = styled.div`
	padding: 0 5px;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 10px;
	background: var(--light);
`;

export const Headings = styled.div`
	display: flex;
	width: 100%;
	padding-bottom: 10px;
`;

export const Heading = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	width: 20%;
	padding: 0 10px;
`;

export const Row = styled.div`
	display: flex;
	width: 100%;
`;

export const Cell = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	width: 20%;
	padding: 2px 15px;
	padding-left: 20px;
`;

export const Button = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 10px;
	background: var(--light);
`;
