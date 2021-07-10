import styled from 'styled-components';

// Abaixo ex do consumo do PROVIDER
export const Container = styled.aside`
	background-color: ${(props) => props.theme.colors.background};
	width: 360px;
	height: 100vh;
	
	overflow-y: auto; /*scroll;*/
`;


export const Search = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	
	background-color: #ffffff;
	padding: 16px;
`;


