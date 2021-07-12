import styled from 'styled-components';


export const Restaurant = styled.div`
	display: flex;
	justify-content: space-between;
	
	cursor: poiter;
	margin-top: 5px;
	padding: 16px;
	background-color: #ffffff;
	
	border-left: 5px solid transparent;
	:hover {
		border-left-color: ${(props) => props.theme.colors.primary};
		background-color: ${(props) => props.theme.colors.background};
	}	
`;





